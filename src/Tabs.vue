<template>
  <div>
    <!-- Nav tabs -->
    <ul ref="tabs-container" class="nav nav-{{navStyle}}" role="tablist">
      <dropdown-li v-show="overflowIndex" ref="dropdown" class="pull-right tabdrop" :class="{'active': active >= overflowIndex}">
        <ul slot="dropdown-menu" class="dropdown-menu">
          <li v-for="tab in sortedChildren" v-if="isDropdownTab(tab)" @click.prevent="tabclick(tab)" :disabled="tab.disabled">
            <a href="#">
              <span v-if="tab.icon" :class="[iconset, iconset + '-' + tab.icon]"></span>
              {{{tab.header}}}
            </a>
          </li>
        </ul>
      </dropdown-li>

      <li v-for="tab in sortedChildren" :class="{
        'active': (tab.index === active),
        'disabled': tab.disabled
      }" @click.prevent="tabclick(tab)" :disabled="tab.disabled" v-if="isRegularTab(tab)">
        <a class="tab" href="#">
          <span v-if="tab.icon"  :class="[iconset, iconset + '-' + tab.icon]"></span>
          {{{tab.header}}}
        </a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div ref="tab-content" class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import DropdownLi from './DropdownLi.vue';

  export default {
    components: {
      DropdownLi,
    },
    props: {
      navStyle: {
        type: String,
        default: 'tabs',
      },
      effect: {
        type: String,
        default: 'fadein',
      },
      active: {
        type: Number,
        default: 0,
      },
      iconset: {
        type: String,
        default: 'glyphicon',
      },
    },
    data() {
      return {
        overflowIndex: 0,
        resizeTimer: false,
      };
    },
    created() {
      window.addEventListener('resize', this.timedReflow);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.timedReflow);
    },
    mounted() {
      this.$nextTick(this.init);
    },
    computed: {
      sortedChildren() {
        return this.$children.sort(a, b => {
          if (a.index < b.index) {
            return -1;
          }
          if (a.index > b.index) {
            return 1;
          }
          return 0;
        });
      },
    },
    watch: {
      active() {
        const child = this.getActiveChild();
        if (child) {
          this.$emit('change', child);
          child.$emit('activated');
        }
      },
    },
    methods: {
      isRegularTab(tab) {
        return tab.$el.getAttribute('role') == 'tabpanel' && (!this.overflowIndex || tab.index < this.overflowIndex);
      },

      isDropdownTab(tab) {
        return tab.$el.getAttribute('role') == 'tabpanel' && (this.overflowIndex && tab.index >= this.overflowIndex);
      },

      tabclick(tab) {
        if (!tab.disabled) {
          this.active = tab.index;
        }
      },

      getActiveChild() {
        for (const child of this.$children) {
          if (child.$el.getAttribute('role') == 'tabpanel' && child.index == this.active) {
            return child;
          }
        }
        return false;
      },

      timedReflow() {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(this.reflow, 100);
      },

      findFirstOverflow(verify) {
        const tabs = [].slice.call(this.$refs.tabsContainer.$el.children);
        let i = 0;
        for (const tab of tabs) {
          if (tab.nodeName != 'LI' || tab == this.$refs.dropdown.$el) {
            continue;
          }
          if (tab.offsetTop > 0) {
            this.overflowIndex = i;
            break;
          }
          i++;
        }
        if (!verify) {
          this.$nextTick(function() {
            this.findFirstOverflow(true);
          }.bind(this));
        }
      },

      reflow() {
        this.overflowIndex = 0;
        this.$nextTick(this.findFirstOverflow);
      },

      registerTab(tab) {
        if (!this.$refs.tabContent.$el) {
          return;
        }
        this.init();
      },

      init() {
        this.sortTabs();
        this.timedReflow();
      },

      sortTabs() {
        let index = 0;
        const children = [].slice.call(this.$refs.tabContent.$el.children);
        for (const pane of children) {
          for (const tab of this.$children) {
            if (tab.$el == pane) {
              tab.index = index;
              index++;
              break;
            }
          }
        }
      },
    }
  }
</script>

<style scoped>
  ul {
    position: relative;
  }

  .nav-tabs {
    position: relative;
    margin-bottom: 15px;
  }
</style>

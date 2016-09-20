<template>
  <div>
    <!-- Nav tabs -->
    <ul ref="tabsContainer" class="nav" :class="['nav-' + navStyle]" role="tablist">
      <dropdown-li v-show="overflowIndex" ref="dropdown" class="pull-right tabdrop" :class="{'active': active >= overflowIndex}">
        <ul slot="dropdown-menu" class="dropdown-menu">
          <li v-for="(tab, index) in tabs" v-if="isDropdownTab(tab, index)" @click.prevent="tabclick(tab, index)" :disabled="tab.disabled">
            <a href="#">
              <span v-if="tab.icon" :class="[iconset, iconset + '-' + tab.icon]"></span>
              <span v-html="tab.header"></span>
            </a>
          </li>
        </ul>
      </dropdown-li>

      <li v-for="(tab, index) in tabs" :class="{
        'active': (index === active),
        'disabled': tab.disabled
      }" @click.prevent="tabclick(tab, index)" :disabled="tab.disabled" v-if="isRegularTab(tab, index)">
        <a class="tab" href="#">
          <span v-if="tab.icon"  :class="[iconset, iconset + '-' + tab.icon]"></span>
          <span v-html="tab.header"></span>
        </a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div ref="tabContent" class="tab-content">
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
        default: 'fade',
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
        tabs: [],
      };
    },
    created() {
      window.addEventListener('resize', this.timedReflow);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.timedReflow);
    },
    mounted() {
      this.$nextTick(this.initTabs);
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
      isRegularTab(tab, index) {
        return tab.$el.getAttribute('role') == 'tabpanel' && (!this.overflowIndex || index < this.overflowIndex);
      },

      isDropdownTab(tab, index) {
        return tab.$el.getAttribute('role') == 'tabpanel' && (this.overflowIndex && index >= this.overflowIndex);
      },

      tabclick(tab, index) {
        if (!tab.disabled) {
          this.active = index;
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
        const tabs = [].slice.call(this.$refs.tabsContainer.children);
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
        if (!this.$refs.tabContent) {
          return;
        }
        this.initTabs();
      },

      initTabs() {
        this.sortTabs();
        this.timedReflow();
      },

      sortTabs() {
        let index = 0;
        const children = [].slice.call(this.$refs.tabContent.children);
        this.tabs = [];
        for (const pane of children) {
          for (const tab of this.$children) {
            if (tab.$el == pane) {
              tab.index = index++;
              this.tabs.push(tab);
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

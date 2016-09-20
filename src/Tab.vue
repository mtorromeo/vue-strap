<template>
  <transition :name="$parent.effect">
    <div role="tabpanel" class="tab-pane" :class="{hide:!show, active:show}" v-show="show" :transition="$parent.effect">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      icon: String,
      header: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        index: 0,
      };
    },
    computed: {
      show() {
        return (this.$parent.active == this.index);
      },
    },
    created() {
      this.$parent.registerTab(this);
    },
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .tab-content > .tab-pane {
    display: block;
  }
</style>

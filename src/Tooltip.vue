<template>
  <div>
    <span ref="trigger">
      <slot></slot>
    </span>
    <transition :name="effect">
      <div ref="popover" class="tooltip" :class="{
        'top':    placement === 'top',
        'left':   placement === 'left',
        'right':  placement === 'right',
        'bottom': placement === 'bottom',
      }" v-show="show" role="tooltip">
        <div class="tooltip-arrow"></div>
        <div class="tooltip-inner">
          <slot name="content">
            <span v-html="content"></span>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Popover from './Popover.vue';

  export default {
    extends: Popover,
    props: {
      trigger: {
        type: String,
        default: 'hover',
      },
      effect: {
        type: String,
        default: 'scale',
      },
    },
  };
</script>

<style>
  .tooltip {
    opacity: .9
  }
</style>

<template>
  <div>
    <span ref="trigger">
      <slot></slot>
    </span>
    <transition :name="effect">
      <div class="popover" :class="{
        top:    placement === 'top',
        left:   placement === 'left',
        right:  placement === 'right',
        bottom: placement === 'bottom',
      }" :style="{display: show ? 'block' : 'none'}" ref="popover" v-show="show">
        <div class="arrow"></div>
        <h3 class="popover-title" v-show="title">
          <slot name="title">{{title}}</slot>
        </h3>
        <div class="popover-content">
          <slot name="content">
            <span v-html="content"></span>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    trigger: {
      type: String,
      default: 'click',
    },
    effect: {
      type: String,
      default: 'fadein',
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    header: {
      type: Boolean,
      default: true,
    },
    placement: {
      type: String,
    },
  },
  data() {
    return {
      position: {
        top: 0,
        left: 0,
      },
      show: true,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    display() {
      this.show = true;
    },
    hide() {
      this.show = false;
    },
  },
  mounted() {
    if (!this.$refs.popover) {
      console.error('Couldn\'t find popover ref in your component that uses popoverMixin.');
      return;
    }
    const popover = this.$refs.popover;
    const trig = this.$refs.trigger.children[0];
    if (this.trigger === 'hover') {
      trig.addEventListener('mouseenter', this.display);
      trig.addEventListener('mouseleave', this.hide);
    } else if (this.trigger === 'focus') {
      trig.addEventListener('focus', this.display);
      trig.addEventListener('blur', this.hide);
    } else {
      trig.addEventListener('click', this.toggle);
    }

    switch (this.placement) {
    case 'top':
      this.position.left = trig.offsetLeft - popover.offsetWidth / 2 + trig.offsetWidth / 2;
      this.position.top = trig.offsetTop - popover.offsetHeight;
      break;
    case 'left':
      this.position.left = trig.offsetLeft - popover.offsetWidth;
      this.position.top = trig.offsetTop + trig.offsetHeight / 2 - popover.offsetHeight / 2;
      break;
    case 'right':
      this.position.left = trig.offsetLeft + trig.offsetWidth;
      this.position.top = trig.offsetTop + trig.offsetHeight / 2 - popover.offsetHeight / 2;
      break;
    case 'bottom':
      this.position.left = trig.offsetLeft - popover.offsetWidth / 2 + trig.offsetWidth / 2;
      this.position.top = trig.offsetTop + trig.offsetHeight;
      break;
    default:
      console.log('Wrong placement prop');
    }
    popover.style.top = `${this.position.top}px`;
    popover.style.left = `${this.position.left}px`;
    this.toggle();
  },
  beforeDestroy() {
    const trig = this.$refs.trigger.children[0];
    trig.removeEventListener('mouseenter', this.display);
    trig.removeEventListener('mouseleave', this.hide);
    trig.removeEventListener('focus', this.display);
    trig.removeEventListener('blur', this.hide);
    trig.removeEventListener('click', this.toggle);
  },
};
</script>

<style>
  .fade-enter-active, .fade-leave-active,
  .scale-enter-active, .scale-leave-active {
    transition-property: opacity, transform;
    transition-duration: .2s;
    transition-timing-function: ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .scale-enter, .scale-leave-active {
    transform: scale(0);
  }
</style>

<template>
  <transition name="fade">
    <div v-show="show" :class="{
      'alert':         true,
      'alert-success': type == 'success',
      'alert-warning': type == 'warning',
      'alert-info':    type == 'info',
      'alert-danger':  type == 'danger',
      'top':           placement === 'top',
      'top-right':     placement === 'top-right',
    }" :style="{width: width}" role="alert">
      <button v-show="dismissable" type="button" class="close" @click="close">
        <span>&times;</span>
      </button>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
      },
      dismissable: {
        type: Boolean,
        default: false,
      },
      show: {
        type: Boolean,
        default: true,
      },
      duration: {
        type: Number,
        default: 0,
      },
      width: {
        type: String
      },
      placement: {
        type: String
      }
    },
    watch: {
      show(value) {
        this.clearTimeout();
        if (value) {
          this.$emit('open');
          if (this.duration) {
            this._timeout = setTimeout(this.close, this.duration);
          }
        } else {
          this.$emit('close');
        }
        this.$emit('visibility-change', value);
      },
    },
    methods: {
      open() {
        this.show = true;
      },
      close() {
        this.show = false;
      },
      clearTimeout() {
        if (this._timeout) {
          clearTimeout(this._timeout);
        }
      },
    },
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .alert.top {
    position: fixed;
    top: 30px;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .alert.top-right {
    position: fixed;
    top: 30px;
    right: 50px;
    z-index: 2;
  }
</style>

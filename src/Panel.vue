<template>
  <div class="panel panel-default">
    <div class="panel-heading" @click="isOpen = !isOpen">
      <h4 class="panel-title">
        <slot name="header">{{ header }}</slot>
      </h4>
    </div>
    <transition name="collapse" @after-enter="afterEnter" @before-leave="beforeLeave">
      <div class="panel-collapse" v-show="isOpen">
        <div class="panel-body">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false,
      },
      header: String,
    },
    watch: {
      isOpen() {
        if (this.isOpen) {
          this.$parent.setActivePanel(this);
        }
        this.$emit('visibility-change', this.isOpen);
      },
    },
    methods: {
      afterEnter(el) {
        el.style.maxHeight = "";
      },
      beforeLeave(el) {
        el.style.maxHeight = `${el.offsetHeight}px`;
        // Recalculate DOM before the class gets added.
        return el.offsetHeight;
      },
    },
  }
</script>

<style>
  .panel-heading {
    cursor: pointer;
  }

  .collapse-enter-active, .collapse-leave-active {
    transition: max-height .5s ease;
    overflow: hidden;
  }

  .collapse-enter,
  .collapse-leave-active {
    max-height: 0!important;
  }
</style>

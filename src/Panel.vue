<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
    <a class="accordion-toggle"
      @click="isOpen = !isOpen">
      <slot name="header">
      {{ header }}
      </slot>
    </a>
    </h4>
    </div>
    <transition name="collapse">
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
        this.$emit('visibility-change', this.isOpen);
      }
    },
    transitions: {
      collapse: {
        afterEnter(el) {
          el.style.maxHeight = "";
        },
        beforeLeave(el) {
          el.style.maxHeight = `${el.offsetHeight}px`;
          // Recalculate DOM before the class gets added.
          return el.offsetHeight;
        },
      }
    },
  }
</script>

<style>
  .accordion-toggle {
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

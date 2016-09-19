<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
    <a class="accordion-toggle"
      @click="toggleIsOpen()">
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
        default: false
      },
      header: {
        type: String
      }
    },
    methods: {
      toggleIsOpen() {
        this.isOpen = !this.isOpen
        this.$dispatch('isOpenEvent', this)
      }
    },
    transitions: {
      collapse: {
        afterEnter: function afterEnter(el) {
          el.style.maxHeight = "";
        },
        beforeLeave: function beforeLeave(el) {
          el.style.maxHeight = el.offsetHeight + "px";
          // Recalculate DOM before the class gets added.
          return el.offsetHeight;
        }
      }
    }
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

<template>
  <div class="panel-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      oneAtATime: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      setActivePanel(panel) {
        if (!this.oneAtATime) {
          return;
        }
        for (const item of this.$children) {
          if (panel !== item) {
            item.isOpen = false;
          }
        }
      },
    },
  }
</script>

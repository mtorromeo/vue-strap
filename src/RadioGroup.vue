<template>
  <div class="btn-group" data-toggle="buttons">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      value: String,
    },
    watch: {
      value() {
        this.$emit('input', this.value);
      },
    },
  };
</script>

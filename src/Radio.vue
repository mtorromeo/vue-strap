<template>
    <label class="btn" :class="{
        'active':      checked,
        'btn-success': type == 'success',
        'btn-warning': type == 'warning',
        'btn-info':    type == 'info',
        'btn-danger':  type == 'danger',
        'btn-default': type == 'default',
        'btn-primary': type == 'primary',
    }">
        <input :value="value" :name="$parent.name" :tabindex="tabindex" type="radio" autocomplete="off" :checked="checked" @click="handleClick">
        <slot></slot>
    </label>
</template>

<script>
    export default {
        props: {
            value: String,
            tabindex: String,
            type: {
                type: String,
                default: 'default',
            },
        },
        computed: {
            checked() {
                return this.$parent.value == this.value;
            },
        },
        methods: {
            handleClick() {
                this.$parent.value = this.value;
            },
        },
    };
</script>

<style scoped>
    input[type='radio'] {
        display: none;
    }
</style>

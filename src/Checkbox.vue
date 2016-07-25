<template>
    <label class="btn" :class="{
        'active':      checked,
        'btn-success': type == 'success',
        'btn-warning': type == 'warning',
        'btn-info':    type == 'info',
        'btn-danger':  type == 'danger',
        'btn-default': type == 'default',
        'btn-primary': type == 'primary',
    }" :title="title">
        <input v-if="uncheckedValue" type="hidden" :name="name" v-model="hiddenValue">
        <input :value="value" :name="checkboxName" :tabindex="tabindex" type="checkbox" autocomplete="off" v-model="checked">
        <slot></slot>
    </label>
</template>

<script>
    export default {
        props: {
            name: String,
            value: String,
            uncheckedValue: String,
            tabindex: String,
            title: String,
            type: {
                type: String,
                default: 'default',
            },
            checked: {
                type: Boolean,
                default: false,
            },
        },

        computed: {
            checkboxName() {
                return this.uncheckedValue ? false : this.name;
            },
            hiddenValue() {
                return this.checked ? this.value : this.uncheckedValue;
            },
            watch: {
                checked() {
                    this.$emit('change', this.checked);
                },
            },
        },
    };
</script>

<style scoped>
    input[type='checkbox'] {
        display: none;
    }
</style>

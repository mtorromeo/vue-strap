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
        <input :value="value" :name="name" :tabindex="tabindex" type="checkbox" autocomplete="off" :checked="checked" @click="handleClick">
        <slot></slot>
    </label>
</template>

<script>
    export default {
        props: {
            name: String,
            value: String,
            tabindex: String,
            type: {
                type: String,
                default: 'default',
            },
            checked: {
                type: Boolean,
                default: false,
            },
        },
        methods: {
            handleClick() {
                const parent = this.$parent;
                const index = parent.value.indexOf(this.value)
                index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
                this.checked = !this.checked;
            }
        },
        created() {
            if (this.$parent.value.length) {
                this.checked = this.$parent.value.indexOf(this.value) > -1;
            } else if (this.checked) {
                this.$parent.value.push(this.value);
            }
        },
    };
</script>

<style scoped>
    input[type='checkbox'] {
        display: none;
    }
</style>

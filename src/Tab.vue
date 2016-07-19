<template>
    <div role="tabpanel" class="tab-pane" :class="{hide:!show, active:show}" :transition="$parent.effect">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            icon: String,
            header: {
                type: String,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                index: 0,
            };
        },
        computed: {
            show() {
                return (this.$parent.active == this.index);
            },
        },
        created() {
            this.$parent.registerTab(this);
        },
    }
</script>

<style scoped>
    .tab-content> .tab-pane {
        display: block;
    }
</style>

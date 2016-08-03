<template>
    <div role="dialog" :class="{
        modal: backdrop,
        fade:  effect === 'fade',
        zoom:  effect === 'zoom',
        in:    show,
    }" :style="{
        display: display ? 'block' : 'none',
    }" @click="backdropClick">
        <div :class="{
            'modal-dialog': true,
            'modal-lg':     large,
            'modal-sm':     small,
        }" role="document" :style="{width: optionalWidth}">
            <div v-el:modal-content class="modal-content">
                <slot name="modal-header">
                    <div class="modal-header">
                        <button type="button" class="close" @click="cancel">
                            &times;
                        </button>
                        <h4 class="modal-title">
                            <slot name="title">{{{title}}}</slot>
                        </h4>
                    </div>
                </slot>

                <slot name="modal-body">
                    <div class="modal-body">{{{body}}}</div>
                </slot>

                <slot name="modal-footer">
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" @click="cancel">{{ cancelText }}</button>
                        <button type="button" class="btn btn-primary" @click="confirm">{{ okText }}</button>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    import getScrollBarWidth from './utils/getScrollBarWidth.js';

    export default {
        props: {
            okText: {
                type: String,
                default: 'Save changes',
            },
            cancelText: {
                type: String,
                default: 'Close',
            },
            title: {
                type: String,
                default: '',
            },
            body: {
                type: String,
                default: '',
            },
            show: {
                require: true,
                type: Boolean,
                twoWay: true,
            },
            width: {
                default: null,
            },
            callback: {
                type: Function,
                default() {
                    return true;
                },
            },
            effect: {
                type: String,
                default: null,
            },
            backdrop: {
                type: Boolean,
                default: true,
            },
            large: {
                type: Boolean,
                default: false,
            },
            small: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                display: true,
            };
        },
        compiled() {
            this.$watch('show', this.watchShow, {
                immediate: true,
            });
        },
        computed: {
            optionalWidth() {
                if (this.width === null) {
                    return null;
                } else if (Number.isInteger(this.width)) {
                    return `${this.width}px`;
                }
                return this.width;
            },
        },
        methods: {
            close() {
                this.show = false;
            },
            cancel() {
                this.$emit('cancel');
                this.close();
            },
            confirm() {
                if (this.callback) {
                    const result = this.callback();
                    if (result !== undefined && !result) {
                        return;
                    }
                }
                this.$emit('confirm');
                this.close();
            },
            backdropClick(e) {
                if (this.backdrop && e.target === this.$el) {
                    this.cancel();
                }
            },
            watchShow(val) {
                const body = document.body;
                if (val) {
                    this.$els.modalContent.focus();
                    this.display = true;
                    body.classList.add('modal-open');
                    const scrollBarWidth = getScrollBarWidth();
                    if (scrollBarWidth !== 0) {
                        body.style.paddingRight = scrollBarWidth + 'px';
                    }
                    this.$emit('open');
                } else {
                    setTimeout(() => {
                        this.display = false;
                        body.classList.remove('modal-open');
                        body.style.paddingRight = '0';
                        this.$emit('close');
                    }, 300);
                }
            },
        }
    }
</script>
<style>
    .modal {
        transition: all 0.3s ease;
    }

    .modal.in {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal.zoom .modal-dialog {
        -webkit-transform: scale(0.1);
        -moz-transform: scale(0.1);
        -ms-transform: scale(0.1);
        transform: scale(0.1);
        top: 300px;
        opacity: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }

    .modal.zoom.in .modal-dialog {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        -webkit-transform: translate3d(0, -300px, 0);
        transform: translate3d(0, -300px, 0);
        opacity: 1;
    }
</style>

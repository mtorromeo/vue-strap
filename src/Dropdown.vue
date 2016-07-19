<template>
    <div class="btn-group">
        <slot></slot>
        <slot name="dropdown-menu"></slot>
    </div>
</template>

<script>
    export default {
        methods: {
            open() {
                this.$el.classList.add('open');
            },
            toggle(e) {
                if (e) {
                    e.preventDefault();
                }
                this.$el.classList.toggle('open');
            },
            close(e) {
                if (e) {
                    if (this._toggle && e.target == this._toggle) {
                        return;
                    }
                    if (this.$el.contains(e.target) && e.target.nodeName.toLowerCase() != 'a') {
                        return;
                    }
                }
                this.$el.classList.remove('open');
            },
        },
        compiled() {
            this._toggle = this.$el.querySelector('[data-toggle="dropdown"]');
            if (this._toggle) {
                this._toggle.addEventListener('click', this.toggle);
            }
            window.addEventListener('click', this.close);
        },
        beforeDestroy() {
            window.removeEventListener('click', this.close);
        },
    };
</script>

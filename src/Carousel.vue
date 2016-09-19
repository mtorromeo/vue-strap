<template>
  <div class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators" v-show="indicators">
      <indicator :indicator.sync="indicator" :active-index.sync="activeIndex" :is-animating.sync="isAnimating"></indicator>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <slot></slot>
    </div>
    <!-- Controls -->
    <div v-show="controls" class="carousel-controls hidden-xs">
      <a class="left carousel-control" role="button" @click="prevClick">
        <span class="fa fa-arrow-left" aria-hidden="true"></span>
      </a>
      <a class="right carousel-control" role="button" @click="nextClick">
        <span class="fa fa-arrow-right" aria-hidden="true"></span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      indicators: {
        type: Boolean,
        default: true,
      },
      controls: {
        type: Boolean,
        default: true,
      },
      interval: {
        type: Number,
        default: 5000,
      },
    },
    components: {
      indicator: {
        //inherit: true,
        props: [
          'indicator',
          'activeIndex',
          'isAnimating',
        ],
        template: '<li v-for="(i, index) in indicator" @click="onClick(index)" v-bind:class="{\'active\':index === activeIndex}"><span></span></li>',
        methods: {
          onClick(index) {
            if (this.isAnimating || this.activeIndex === index) {
              return false;
            }
            this.isAnimating = true;
            this.activeIndex = index;
          },
        },
      }
    },
    data() {
      return {
        indicator: [],
        activeIndex: 0,
        isAnimating: false,
      };
    },
    computed: {
      slider() {
        return this.$el.querySelectorAll('.item');
      },
    },
    watch: {
      activeIndex(newVal, oldVal) {
        this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal);
      },
    },
    methods: {
      transitionend() {
        [...this.slider].forEach((el) => el.className = 'item');
        selectedEl.classList.add('active');
        this.isAnimating = false;
      },
      slide(direction, selected, prev) {
        if (this._prevSelectedEvent) this._prevSelectedEvent.remove()
        if (this._selectedEvent) this._selectedEvent.remove()

        const prevSelectedEl = this.slider[prev];
        const selectedEl = this.slider[selected];

        direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev')
          // request property that requires layout to force a layout
        var x = selectedEl.clientHeight
        this._prevSelectedEvent = prevSelectedEl.addEventListener('transitionend', this.transitionend); EventListener.listen(prevSelectedEl, 'transitionend', transitionendFn)
        this._selectedEvent = EventListener.listen(selectedEl, 'transitionend', transitionendFn)
        prevSelectedEl.classList.add(direction)
        selectedEl.classList.add(direction)
      },
      nextClick() {
        if (this.isAnimating) return false
        this.isAnimating = true
        this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0
      },
      prevClick() {
        if (this.isAnimating) return false
        this.isAnimating = true
        this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1
      },
    },
    ready() {
      let intervalID = null
      const el = this.$el

      function intervalManager(flag, func, time) {
        flag ? intervalID = setInterval(func, time) : clearInterval(intervalID)
      }
      if (!!this.interval) {
        intervalManager(true, this.nextClick, this.interval)
        el.addEventListener('mouseenter', () => intervalManager(false))
        el.addEventListener('mouseleave', () => intervalManager(true, this.nextClick, this.interval))
      }
    },
  };
</script>

<style scoped>
  .carousel-control {
    cursor: pointer;
  }
</style>

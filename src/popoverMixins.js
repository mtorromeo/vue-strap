const PopoverMixin = {
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    effect: {
      type: String,
      default: 'fadein'
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    header: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String
    }
  },
  data() {
    return {
      position: {
        top: 0,
        left: 0
      },
      show: true
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    display() {
      this.show = true;
    },
    hide() {
      this.show = false;
    },
  },
  ready() {
    if (!this.$els.popover) {
      console.error('Couldn\'t find popover v-el in your component that uses popoverMixin.');
      return;
    }
    const popover = this.$els.popover;
    const trig = this.$els.trigger.children[0];
    if (this.trigger === 'hover') {
      trig.addEventListener('mouseenter', this.display);
      trig.addEventListener('mouseleave', this.hide);
    } else if (this.trigger === 'focus') {
      trig.addEventListener('focus', this.display);
      trig.addEventListener('blur', this.hide);
    } else {
      trig.addEventListener('click', this.toggle);
    }

    switch (this.placement) {
    case 'top':
      this.position.left = trig.offsetLeft - popover.offsetWidth / 2 + trig.offsetWidth / 2;
      this.position.top = trig.offsetTop - popover.offsetHeight;
      break;
    case 'left':
      this.position.left = trig.offsetLeft - popover.offsetWidth;
      this.position.top = trig.offsetTop + trig.offsetHeight / 2 - popover.offsetHeight / 2;
      break;
    case 'right':
      this.position.left = trig.offsetLeft + trig.offsetWidth;
      this.position.top = trig.offsetTop + trig.offsetHeight / 2 - popover.offsetHeight / 2;
      break;
    case 'bottom':
      this.position.left = trig.offsetLeft - popover.offsetWidth / 2 + trig.offsetWidth / 2;
      this.position.top = trig.offsetTop + trig.offsetHeight;
      break;
    default:
      console.log('Wrong placement prop');
    }
    popover.style.top = `${this.position.top}px`;
    popover.style.left = `${this.position.left}px`;
    popover.style.display = 'none';
    this.show = !this.show;
  },
  beforeDestroy() {
    const trig = this.$els.trigger.children[0];
    trig.removeEventListener('mouseenter', this.display);
    trig.removeEventListener('mouseleave', this.hide);
    trig.removeEventListener('focus', this.display);
    trig.removeEventListener('blur', this.hide);
    trig.removeEventListener('click', this.toggle);
  },
};

export default PopoverMixin;

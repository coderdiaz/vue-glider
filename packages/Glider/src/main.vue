<template>
  <div class="glider-contain">
    <div ref="glider" class="glider">
      <slot />
    </div>
    <div ref="dots" role="tablist" class="dots"></div>
  </div>
</template>
<script>
import Glider from 'glider-js';
import 'glider-js/glider.min.css';

export default {
  name: 'Glider',
  props: {
    slidesToShow: {
      type: [String, Number],
      default: 1,
    },
    slidesToScroll: {
      type: [String, Number],
      default: 1,
    },
    itemWidth: {
      type: Number,
      default: undefined,
    },
    exactWidth: {
      type: Boolean,
      default: undefined,
    },
    scrollLock: {
      type: Boolean,
      default: false,
    },
    scrollLockDelay: {
      type: Number,
      default: 250,
    },
    resizeLock: {
      type: Boolean,
      default: true,
    },
    rewind: {
      type: Boolean,
      default: false,
    },
    scrollPropagate: {
      type: Boolean,
      default: false,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    dragVelocity: {
      type: Number,
      default: 3.3,
    },
    duration: {
      type: Number,
      default: 0.5,
    },
    propagateEvent: {
      type: Boolean,
      default: true,
    },
    addTrack: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    $glider: null,
  }),
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const settings = {
        dots: this.$refs.dots,
        slidesToShow: this.slidesToShow,
        slidesToScroll: this.slidesToScroll,
        itemWidth: this.itemWidth,
        exactWidth: this.exactWidth,
        scrollLock: this.scrollLock,
        scrollLockDelay: this.scrollLockDelay,
        resizeLock: this.resizeLock,
        rewind: this.rewind,
        scrollPropagate: this.scrollPropagate,
        draggable: this.draggable,
        dragVelocity: this.dragVelocity,
        duration: this.duration,
        propagateEvent: this.propagateEvent,
        addTrack: this.addTrack,
      };
      this.$glider = new Glider(this.$refs.glider, settings);
    },
  },
  beforeDestroy() {
    if (this.$glider) {
      this.$glider.destroy();
    }
  },
};
</script>

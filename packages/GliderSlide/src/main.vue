<script>
export default {
  name: 'GliderSlide',
  render(h) {
    return h('div', {
      attrs: {
        class: 'glider--slide',
      },
    }, this.$slots.default);
  },
};
</script>

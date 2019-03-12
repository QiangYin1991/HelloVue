Vue.component('inputNumber', {
  template: '\
  <div class="input-number"> \
  </div>',
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
});
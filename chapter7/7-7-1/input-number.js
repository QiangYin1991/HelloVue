Vue.component('inputNumber', {
  template: '\
  <div class="input-number"> \
    <input type="text" :value="currentValue" @change="handleChange"></input> \
    <button @click="handleDown" :disabled="currentValue <= min">-</button> \
    <button @click="handleUp" :disabled="currentValue >= max">+</button> \
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
  watch: {
    currentValue: function (val) {
      this.$emit('input', val);
      this.$emit('on-change', val);
    },
    value: function(val) {
      this.updateValue(val);
    }
  },
  methods: {
    updateValue (val) {
      if (val > this.max) val = this.max;
      if (val < this.min) val = this.min;
      this.currentValue = val;
    },
    handleDown () {
      if (this.currentValue <= this.min) return;
      this.currentValue -= 1;
    },
    handleUp () {
      if (this.currentValue >= this.max) return;
      this.currentValue += 1;
    },
    handleChange (event) {
      let val = event.target.value.trim();
      console.log(val);
      if (isValueNumber(val)) {
        val = Number(val);
        this.currentValue = val;

        if (val > this.max) {
          this.currentValue = this.max;
        } else if (val < this.min) {
          this.currentValue = this.min;
        }
      } else {
        event.target.value = this.currentValue;
      }
    }
  },
  mounted: function() {
    this.updateValue(this.value);
  }
});

function isValueNumber (value) {
  return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/). test(value + '');
}
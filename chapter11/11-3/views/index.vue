<template>
  <div>
    <h1>首页</h1>
    <router-link to="/about">跳转到about</router-link>
    <p>count: {{ count }}</p>
    <button @click="handleIncrement">+1</button>
    <button @click="handleDecrease">-1</button>
    <button @click="handleActionIncrement">action +1</button>
    <button @click="handleAsyncIncrement">async +1</button>
    <button @click="handleAsyncDecrease">mutations async --</button>
    <div>list: {{ list }}</div>
    <div>listCount: {{ listCount }}</div>
    <div>
      随机增加：
      <Counter :number="number"></Counter>
    </div>
  </div>
</template>
<script>
import Counter from './counter.vue';

export default {
  components: {
    Counter
  },
  data () {
    return {
      number: 0
    }
  },
  created () {
    this.$bus.on('add', this.handleAddRandom);
  },
  beforeDestroy() {
    this.$bus.off('add', this.handleAddRandom);
  },
  computed: {
    count () {
      return this.$store.state.count;
    },
    list () {
      return this.$store.getters.filteredList;
    },
    listCount () {
      return this.$store.getters.listCount;
    }
  },
  methods: {
    handleAddRandom (num) {
      this.number += num;
    },
    handleIncrement () {
      this.$store.commit({
        type: 'increment',
        count: 10
        }
      );
    },
    handleDecrease () {
      this.$store.commit({
        type: 'decrease',
        count: 5
        }
      );
    },
    handleActionIncrement () {
      this.$store.dispatch('increment');
    },
    handleAsyncIncrement () {
      this.$store.dispatch('asyncIncrement').then(() => {
        console.log(this.$store.state.count);
      })
    },
    handleAsyncDecrease () {
      this.$store.commit('asyncDecrease');
    }
  },
}
</script>
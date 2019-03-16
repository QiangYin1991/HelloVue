<template>
  <div>
    <h1>首页</h1>
    <router-link to="/about">跳转到about</router-link>
    <p>count: {{ count }}</p>
    <button @click="handleIncrement">+1</button>
    <button @click="handleDecrease">-1</button>
    <button @click="handleActionIncrement">action +1</button>
    <div>list: {{ list }}</div>
    <div>listCount: {{ listCount }}</div>
  </div>
</template>
<script>
export default {
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
    }
  },
}
</script>
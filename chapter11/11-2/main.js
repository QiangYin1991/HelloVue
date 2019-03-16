import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

const Routers = [
  {
    path: '/index',
    meta: { title: '首页' },
    component: (resolve) => require(['./views/index.vue'], resolve)
  },
  {
    path: '/about',
    meta: { title: '关于' },
    component: (resolve) => require(['./views/about.vue'], resolve)
  },
  {
    path: '/user/:id',
    meta: { title: '个人主页' },
    component: (resolve) => require(['./views/user.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/index'
  }
];

const RouterConfig = {
  mode: 'history',
  routes: Routers
}

const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

const store = new Vuex.Store({
  state: {
    count: 0,
    list: [1, 5, 8, 10, 30, 50]
  },
  mutations: {
    increment (state, params) {
      state.count += params.count;
    },
    decrease (state, params) {
      state.count -= params.count;
    }
  },
  getters: {
    filteredList: state => {
      return state.list.filter(item => item < 10);
    },
    listCount: (state, getters) => {
      return getters.filteredList.length;
    }
  }
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h=> h(App)
});
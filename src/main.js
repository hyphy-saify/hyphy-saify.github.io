import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import MainPage from './MainPage.vue';
import BlogPage from './BlogPage.vue';
import BlogRoutes from './blogposts'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueGoogleCharts from 'vue-google-charts'

console.clear();
console.log(new Date());

// TODO: Replace the following with your own keys from firebase.google.com
// TODO: Use nconf api keys file

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(iView);
Vue.use(VueGoogleCharts);

new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({
    routes: [
      { path: '/about', component: MainPage },
      { path: '/blog',
        component: BlogPage,
        children: BlogRoutes,
      },
      {
        path: '/*',
        redirect: '/about',
      },
    ],
  }),
  store: new Vuex.Store({
    state: {
    },
    mutations: {
    },
  }),
  created: function () {
  },
});



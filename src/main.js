import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import MainPage from './MainPage.vue';
import OtherPage from './OtherPage.vue';
import LoginPage from './LoginPage.vue';
import RegisterPage from './RegisterPage.vue';
import firebase from 'firebase';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueGoogleCharts from 'vue-google-charts'

console.clear();
console.log(new Date());

// TODO: Replace the following with your own keys from firebase.google.com
// TODO: Use nconf api keys file
firebase.initializeApp({
  apiKey: "AIzaSyAL0LgeNpA6PpQ2MQLX6Nu7wF0w_eX6arY",
  authDomain: "sign-818b7.firebaseapp.com",
  databaseURL: "https://sign-818b7.firebaseio.com",
  projectId: "sign-818b7",
  storageBucket: "sign-818b7.appspot.com",
  messagingSenderId: "355449847645"
});

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(iView);
Vue.use(VueGoogleCharts);

new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({
    mode: 'history',
    routes: [
      { path: '/about', component: MainPage },
      { path: '/blog', component: OtherPage },
      {
        path: '/*',
        redirect: '/about',
      },
    ],
  }),
  store: new Vuex.Store({
    state: {
      user: null,
    },
    mutations: {
      setUser: function (state, _user) {
        state.user = _user;
      }
    },
  }),
  created: function () {
    console.log('Created...');
    console.log(firebase.auth().currentUser);
    var vm = this;
    firebase.auth().onAuthStateChanged(function (_user) {
      vm.$store.commit('setUser', _user);
      if (_user) {
        console.log('Firebase user: [' + _user.email + ']');
      } else {
        console.log('Firebase user: [' + 'Logged out' + ']');
      }
    });
  },
});



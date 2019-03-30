<template>
  <div :class="cssPrefix">
    <div :class="`${cssPrefix}__box`">
      <h2>Log In</h2>
      <i-input v-model="email" type="text" style="width:200px" placeholder="Email"/><br>
      <i-input type="password" v-model="password" style="width:200px" placeholder="Password"/><br>
      <i-button @click="login">Login</i-button>
      <router-link to="/register">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data () {
    return {
      password: "",
      email: "", 
      cssPrefix: "login-page",
    }
  },
  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(function(e) {
          console.log('Error logging in: ['+ e +']');
        });
    },
    logout: function() {
      console.log('Logging out...');
      firebase.auth().signOut();
    }
  },
}

</script>


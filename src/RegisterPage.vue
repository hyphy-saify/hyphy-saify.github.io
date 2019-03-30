// createUserWithEmailAndPassword(email, password)

<template>
  <div :class="cssPrefix">
    <div :class="`${cssPrefix}__box`">
      <h2>Register</h2>
      <i-input v-model="email" type="text" style="width:200px" placeholder="Email"/>
      <br>
      <i-input type="password" v-model="password1" style="width:200px" placeholder="Password"/>
      <br>
      <i-input
        type="password"
        v-model="password2"
        style="width:200px"
        placeholder="Confirm Password"
      />
      <br>
      <i-button @click="signup">Sign Up</i-button>
    </div>
  </div>
</template>

<style lang="sass">
.register-page {
  height: 100vh;
  &__header {
    
  }
}
</style>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      cssPrefix: "register-page",
      email: "",
      password1: "",
      password2: "",
      username: ""
    };
  },
  mounted() {
    
    firebase.auth().onAuthStateChanged((user) => {
    
      if (user) {
        firebase.database().ref("users/" + user.uid).set({
          email: user.email,
          uid: user.uid,
          username: this.username,
        });

        console.log("User is signed in.");
      } else {
        console.log("No user is signed in.");
      }
    });
  },
  methods: {
    signup: function() {
      if (this.password1 !== this.password2) {
        alert("passwords do not match");
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password1)
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode == "auth/email-already-in-use") {
            alert("email-already-in-use.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
    // logout: function() {
    //   console.log('Logging out...');
    //   firebase.auth().signOut();
    // }
  }
};
</script>


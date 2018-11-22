<template>
  <div>
    <nav>
      <div class="navItem"><router-link to="/Home">Home</router-link></div>
      <div class="navItem"><router-link to="/Events">Events</router-link></div>
      <div class="navItem"><router-link to="/MessageBoard">Message Boards</router-link></div>
      <div class="navItem"><button @click="signOut">Sign Out</button></div>
    </nav>
    <router-view :user="user" :today="today"></router-view>
  </div>
</template>
<script>

import firebase from 'firebase'
import moment from 'moment'

export default {
  name: 'app',
  data () {
    return {
      user: {},
      today: {}
    }
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut()
      .then(() => {
        console.log('sign-out successful');
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
  created() {
    let _this = this;
    firebase.auth().onAuthStateChanged(function(user) {
      _this.user = firebase.auth().currentUser;
      console.log(_this.user.displayName);
    })
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    if (dd < 10) {
      dd ='0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    _this.today = mm + '/' + dd + '/' + yyyy
  }
}
</script>

<style lang="scss">

nav {

  display:flex;
  text-align: center;
}

.navItem {
  flex:1;

}

</style>

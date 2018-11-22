<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>Display Name: <input type="text" v-model="user.displayName"/></div>
    <button @click="update(user)">Save</button>
  </div>
</template>
<script>

import firebase from 'firebase'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Home Component',
      user: {}
    }
  },
  methods: {
    update: (user) => {
      user.updateProfile({
        displayName: user.displayName
      })
      .then(function() {
        console.log('update successful');
      }).catch(function(err){
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
    }
}
</script>

<style lang="scss">

</style>

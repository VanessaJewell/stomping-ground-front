<template>
  <div>
    <h1>{{ msg }}</h1>
    <div id="login-widget"></div>
  </div>
</template>

<script>

import firebase from 'firebase'
import firebaseui from 'firebaseui'
require('../../node_modules/firebaseui/dist/firebaseui.css')

export default {
  name: 'app',
  data () {
    return {
      msg: 'Log In Component'
    }
  },
  mounted () {
    var uiConfig = {
      signInSuccessUrl: './Home',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      tosUrl: '<your-tos-url>',
      privacyPolicyUrl: function() {
        window.location.assign('<your-privacy-policy-url>');
      }
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#login-widget', uiConfig);
  }
}
</script>

<style scoped>
  .firebaseui-page-provider-sign-in {
    text-align:right;
  }

</style>

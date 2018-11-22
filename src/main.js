'use strict'

import firebase from 'firebase'
require('./db/connection')
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import router from './router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {

      }
      else {
        this.$router.push('/');
      }
    })
  },
  render: h => h(App)
})

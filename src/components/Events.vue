<template>
  <div>
    <h1>{{ msg }}</h1>
    <button><router-link to='/NewEvent'>Create New Event</router-link></button>
    <div class="card" v-for="oneEvent in events">
      <div class="name"><h4>Created by: {{oneEvent.userDisplayName}}</h4></div>
      <div class="date">{{oneEvent.date}}</div>
      <h3>{{oneEvent.heading}}</h3>
      <p>{{oneEvent.content}}</p>
      <button v-if="user.uid === oneEvent.uid"><router-link to='/UpdateEvent'>Update Event</router-link></button>
    </div>
  </div>
</template>
<script>

import axios from 'axios'
import firebase from 'firebase'

export default {
  props: ['today', 'user'],
  name: 'app',
  data () {
    return {
      msg: 'Neighborhood Events and News',
      events: []
    }
  },
  methods: {

  },
  created () {
    let _this = this;
    axios.get('http://127.0.0.1:3000/allEvents')
    .then((response) => {
      _this.events = response.data.sort(function(a,b) {
        return b.time - a.time
      });
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
   }
}
</script>

<style lang="scss">
.card {
  border:solid 1px;
  padding:0.5em;
  width:80%;
  min-height:250px;
  margin:0.5em auto;
  position:relative;
}

.name {
  position:absolute;
  top:0;
  left:0;
  padding-left:10px;
}

.date {
  position:absolute;
  top:15%;
  left:0;
  padding-left:10px;
}

.heading {
  width:75%;
  height:2em;
}

.content {
  width:75%;
  height: 150px;
}
</style>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="card">
      <h3>New Event</h3>
      {{today}}
      <!-- User Name: {{user.displayName}}
      <h3>Heading: <input class="heading" type="text" v-model="newEvent.heading"/></h3>
      <h3>Content: <textarea class="content" v-model="newEvent.content"></textarea></h3>
      <button type="submit" @click="addEvent(newEvent)">save</button> -->
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
      msg: 'Update Event',
      newEvent: {}
    }
  },
  methods: {
    addEvent: function(newEvent) {
      axios.post('http://127.0.0.1:3000/addEvents', {
        date: this.today,
        time: new Date().getTime(),
        heading: this.newEvent.heading,
        content: this.newEvent.content,
        uid: this.user.uid,
        userDisplayName: this.user.displayName
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.newEvent.heading = '';
        this.newEvent.content = '';
    }
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

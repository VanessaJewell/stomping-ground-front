<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="card">
      <h3>New Event</h3>
      {{today}}
      User Name: {{user.displayName}}
      <h3>Heading: <input id="heading" class="heading" type="text"  v-model="newEvent.heading"/></h3>
      <h3>Content: <textarea id="content" class="content"  v-model="newEvent.content"></textarea></h3>
      <button id="newBtn" type="submit" @click="newBtn(newEvent)">save</button>
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
      msg: 'Create New Event',
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
        this.newEvent.heading = ' ';
        this.newEvent.content = ' ';
    },
    newBtn: function(newEvent) {
      let heading = document.getElementById('heading').value;
      let content = document.getElementById('content').value;
      let newBtn = document.getElementById('newBtn');
      if (heading != '' && content != '') {
        this.addEvent(newEvent);
      }
      else {
        alert('Heading and Content required')
      }
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

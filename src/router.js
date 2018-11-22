'use strict'

import VueRouter from 'vue-router';

import Events from './components/Events.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Main from './components/Main.vue'
import MessageBoard from './components/MessageBoard.vue'
import NewEvent from './components/NewEvent.vue'
import UpdateEvent from './components/UpdateEvent.vue'



const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Login},
    {path: '/main', component: Main,
      children: [
        {path: '/home', component: Home},
        {path: '/events', component: Events},
        {path: '/messageboard', component: MessageBoard},
        {path: '/newevent', component: NewEvent},
        {path: '/updateevent', component: UpdateEvent}
      ]
    }
  ]
})

export default router;

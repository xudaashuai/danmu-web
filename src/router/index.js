import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/Login.vue';
import Chatting from '../components/Chatting/Chatting.vue';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login/:id',
      name: 'Login',
      component: Login
    },
    {
      path: '/chatting',
      name: 'Chatting',
      component: Chatting,
    }
  ]
});

export default router;

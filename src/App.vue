<template>
  <div id="app">

    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->

  </div>
</template>

<script>
import Chatting from './components/Chatting/Chatting.vue';
import Login from './components/Login/Login.vue';


export default {
  name: 'app',
  components: {
    Chatting,
    Login,
  },
  beforeCreate() {
 },
  created() {
    localStorage.addr = '未知';

  }
}
</script>

<style lang="scss">
@import "./common/style/base.scss";

#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

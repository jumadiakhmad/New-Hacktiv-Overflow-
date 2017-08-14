<template>
  <div id="app">
    <Navbar :username="username"></Navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  name: 'app',
  data() {
    return {
      token: '',
      username: {
        id: '',
        username: ''
      }
    }
  },
  methods: {
    getToken() {
      this.token = localStorage.getItem('token')
    }
  },
  created() {
    this.getToken();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

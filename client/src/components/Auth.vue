<template>
  <b-tabs class="middle">
    <b-tab title="Register" active>
      <div style="padding: 20px">
        <br>
        <p style="text-align: left">Name</p>
        <b-form-input v-model="regName" type="text" placeholder="Enter your name"></b-form-input>

        <br>
        <p style="text-align: left">Username</p>
        <b-form-input v-model="regUsername" type="text" placeholder="Enter your username"></b-form-input>

        <br>
        <p style="text-align: left">Email</p>
        <b-form-input v-model="regEmail" type="email" placeholder="Enter your email"></b-form-input>

        <br>
        <br>
        <p style="text-align: left">Password</p>
        <b-form-input v-model="regPassword" type="password" placeholder="Enter your password"></b-form-input>
        <br>
        <b-button variant="primary" href="" @click="doRegister">Register</b-button>
      </div>
    </b-tab>
    <b-tab title="Login" >
      <div style="padding: 20px">
        <br>
        <p style="text-align: left">Username</p>
        <b-form-input v-model="logUsername" type="text" placeholder="Enter your username"></b-form-input>

        <br>
        <p style="text-align: left">Password</p>
        <b-form-input v-model="logPassword" type="password" placeholder="Enter your password"></b-form-input>
        <br>
        <b-button variant="primary" @click="doLogin"><<router-link to="./MainPage"></router-link>Login</b-button>
      </div>
    </b-tab>
  </b-tabs>
</template>

<script>
export default {
  props: ['users'],
  data () {
    return {
      regName: '',
      regEmail: '',
      regPassword: '',
      regUsername: '',
      logUsername: '',
      logPassword: ''

    }
  },
  methods: {
    doRegister () {
      var self = this
      this.axios.post('http://localhost:3000/users/register', {
        name: self.regName,
        username: self.regUsername,
        email: self.regEmail,
        password: self.regPassword
      })
      .then(function (response) {
        if (response.data._id) {
          self.regStat = true
        } else {
          self.failedReg = true
        }
      })
      .catch(function (err) {
        console.log(err)
        self.failedReg = true
      })
    },
    doLogin () {
      var self = this
      this.axios.post('http://localhost:3000/users/login', {
        username: self.logUsername,
        password: self.logPassword
      })
      .then(function (response) {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token)
          self.$router.push({path: './pageprofil'})
        } else {
          self.failedLog = true
        }
      })
      .catch(function (err) {
        console.log(err)
        self.failedLog = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.middle {
  width: 500px;
  margin: auto;
}
</style>

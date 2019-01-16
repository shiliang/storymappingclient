<template>
  <form>
    <br> <input type="text" v-model="username" />
    <br> <input type="password" v-model="password" />
    <button v-on:click="btnLogin">登录</button>
    <button v-on:click="btnRegist">注册</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  methods: {
    btnRegist: function () {
      this.$router.push({path: '/regist'})
    },
    btnLogin: function () {
      let formData = new FormData()
      formData.append('username', this.username)
      formData.append('password', this.password)
      axios.post('http://localhost:8090/login', formData)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>

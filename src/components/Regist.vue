<template>
  <form>
    <br> <input type="text" v-model="username" />
    <br> <input type="password" v-model="password" />
    <button v-on:click="btnreg">注册</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Regist',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    btnreg: function () {
      let formData = new FormData()
      formData.append('username', this.username)
      formData.append('password', this.password)
      axios.post('/register', formData)
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

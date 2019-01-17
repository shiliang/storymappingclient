<template>
  <form>
    <br> <input type="text" v-model="username" />
    <br> <input type="password" v-model="password" />
    <button v-on:click="btnLogin">登录</button>
    <button v-on:click="btnRegist">注册</button>
  </form>

</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    btnRegist: function () {
      this.$router.push({path: '/regist'})
    },
    btnLogin: function () {
      let formData = new FormData()
      let result = {}
      formData.append('username', this.username)
      formData.append('password', this.password)
      this.$axios.post('/login', formData)
        .then(res => {
          if (res.status === 200) {
            result = res.data
            console.log('获取结果', result) // 在此得到了预期的结果
          }
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

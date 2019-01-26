<template>
  <form>
    <br> <input v-model="username" type="text" >
    <br> <input v-model="password" type="password" >
    <button @click="btnLogin">登录</button>
    <button @click="btnRegist">注册</button>
  </form>

</template>

<script>
export default {
  name: 'Login',
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    btnRegist: function() {
      this.$router.push({ path: '/regist' })
    },
    btnLogin: function() {
      const formData = new FormData()
      let result = {}
      formData.append('username', this.username)
      formData.append('password', this.password)
      this.$axios.post('/login', formData)
        .then(res => {
          if (res.status === 200) {
            result = res.data
            // 如果登录成功
            if (!this.isEmpty(result['success'])) {
              // 跳到个人主页
              this.$router.push({ name: 'Index', params: { userId: result['success'] }})
            }
          }
        })
        .catch(function(err) {
          console.log(err)
        })
    },

    isEmpty: function(v) {
      switch (typeof v) {
        case 'undefined':
          return true
        case 'string':
          if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0) return true
          break
        case 'boolean':
          if (!v) return true
          break
        case 'number':
          if (v === 0 || isNaN(v)) return true
          break
        case 'object':
          if (v === null || v.length === 0) return true
          for (var i in v) {
            return false
          }
          return true
      }
      return false
    }
  }
}

</script>

<style scoped>

</style>

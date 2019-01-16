<template>
  <form action="/user/ulogin" method="post">
    <br> <input type="text" name="username" />
    <br> <input type="password" name="password" />
    <br> <input type="submit" value="登陆" />
    <button v-on:click="btnRegist">注册</button>
  </form>
</template>

<script>
  export default {
    name: 'Regist'
  }
</script>

<style scoped>

</style>

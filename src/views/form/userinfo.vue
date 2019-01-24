<template>
  <div class="app-container">
    <el-form ref="form" :model="userinfoform" label-width="120px">
      <el-form-item label="头像">
        <!-- 头像设置 -->
        <!-- <el-dropdown class="avatar-container"> -->
        <div class="avatar-wrapper">
        <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
        <i class="el-icon-caret-bottom"/>
      </div>
      <!-- </el-dropdown> -->
      </el-form-item>
      <el-form-item label="名字">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  data() {
    return {
      form: {
        avatar: '',
        username: 'admin',
        email: '123@qq.com',
        password: 'admin'
      }
    }
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }

}
</script>

<style scoped>
.line{
  text-align: center;
}
/* .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
} */
.avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      line-height: initial;
}
.user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
}
.el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
</style>


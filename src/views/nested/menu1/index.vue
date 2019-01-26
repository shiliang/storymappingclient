<template >
  <div class="app-container">
    <div style="padding:30px;">
      <el-alert :closable="false" title="新建卡片">
        <router-view />
      </el-alert>
    </div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="卡片主题" required="true">
        <el-input v-model="form.title"/>
      </el-form-item>
      <el-form-item label="所属计划">
        <el-select v-model="form.belongProject" placeholder="请选择计划" @click.native="searchProjects">
          <el-option v-for="project in projects" :value="project" :key="project.id" :label="project.title"/>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="form.status" placeholder="请选择状态">
          <el-option label="新建" value="add"/>
          <el-option label="开发" value="dev"/>
          <el-option label="结束" value="end"/>
        </el-select>
      </el-form-item>
      <el-form-item label="负责人:" >
        <el-col :span="3">
          <el-input v-model="form.personInCharge" placeholder="负责人"/>
        </el-col>
      </el-form-item>
      <el-form-item label="卡片描述" required="true">
        <el-input v-model="form.content" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addcard } from '@/api/card'
import { projectlist } from '@/api/project'
export default {
  data() {
    return {
      form: {
        'title': '',
        'belongProject': '',
        'status': '',
        'personInCharge': '',
        'content': ''
      },
      projects: {}
    }
  },
  methods: {
    searchProjects() {
      projectlist().then(response => {
        var self = this
        self.projects = response.data
        console.log(self.form.projects)
      })
    },
    onSubmit() {
      // console.log(this.form)
      this.form.date = new Date()
      addcard(JSON.parse(JSON.stringify(this.form))).then(response => {
        if (response.status === 200) {
          alert('添加成功')
        } else {
          alert('添加失败')
        }
        location.reload()
      })
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
</style>


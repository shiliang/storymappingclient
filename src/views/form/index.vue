<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="计划主题" required="true">
        <el-input v-model="form.title"/>
      </el-form-item>
      <el-form-item label="父计划">
        <el-select v-model="form.fatherproject" placeholder="请选择计划">
          <el-option label="计划一" value="第一版迭代"/>
        </el-select>
      </el-form-item>
      <el-form-item label="开始日期">
        <el-col :span="11">
          <el-date-picker v-model="form.beginDate" type="date" placeholder="选择日期" style="width: 100%;"/>
        </el-col>
      </el-form-item>
      <el-form-item label="结束日期">
        <el-col :span="11">
          <el-date-picker v-model="form.endDate" type="date" placeholder="选择日期" style="width: 100%;"/>
        </el-col>
      </el-form-item>
      <el-form-item label="计划描述">
        <el-input v-model="form.describe" type="textarea" />
      </el-form-item>
      <el-form-item label="计划变更通知">
        <el-switch v-model="form.delivery"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addproject } from '@/api/project' 
export default {
  data() {
    return {
      form: {
        title: '',
        fatherproject: '',
        beginDate: '',
        endDate: '',
        delivery: false,
        describe: ''
      }
    }
  },
  methods: {
    onSubmit() {
      addproject(this.form).then(response => {
        location.reload()
      })
      // this.$message('submit!')
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


<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="项目详情" name="first">
      <br><label>项目名称</label>
      <el-input v-model="projname" placeholder="" style="width: 200px"/>

      <br><label>项目标识</label>
      <el-input v-model="projtag" placeholder="" style="width: 200px"/>

      <br><label>项目描述</label>
      <el-input v-model="projdesc" placeholder="" style="width: 200px"/>

    </el-tab-pane>
    <el-tab-pane label="类型/字段/状态" name="second">类型/字段/状态</el-tab-pane>
    <el-tab-pane label="权限" name="third">权限hahah</el-tab-pane>
  </el-tabs>
</template>

<script>
  import {  } from '@/api/project'
export default {
  name: 'Index',
  data() {
    return {
      activeName: 'second',
      projname: '',
      projtag: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.index)
      if (tab.index === '0') {
        // 向后台请求项目的数据

      }
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <el-row>
    <el-col v-for="card in allcards" :span="4" :key="card.cid" :offset="1">
      <el-card :body-style="{ padding: '0px', height:'360px', }" shadow="hover" style="width: 200px;height: 160px;">
        <div style="padding: 6px;height: 310px;">
          <div class="divcss5">
            <div style="position: relative;left: 10px;"><font size="3">#{{ card.cid }}</font></div>
          </div>
          <div style="position: relative;top: 15px;left: 10px;"><font size="5">{{ card.ctitle }}</font></div>
          <div style="position: relative;top: 30px;">
            <div style="position: relative;top: 10px;left: 100px;" class="divcsstime"><font size="1"><i class="el-icon-time"/>{{ card.pdatesave }}</font></div>
          </div>
          <div style="position: relative;top: 45px;left: 150px;">
            <el-button type="text"><font size="4">查看</font></el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>

export default {
  data() {
    return {
      allcards: [
        {
          cid: '123',
          ctitle: '哈哈哈',
          pdatesave: '2018-4-9 11:11:11'
        },
        {
          cid: '123',
          ctitle: 'ctitle',
          pdatesave: '2018-4-9 11:11:11'
        },
        {
          cid: '123',
          ctitle: 'ctitle',
          pdatesave: '2018-4-9 11:11:11'
        },
        {
          cid: '123',
          ctitle: 'ctitle',
          pdatesave: '2018-4-9 11:11:11'
        },
        {
          cid: '123',
          ctitle: 'ctitle',
          pdatesave: '2018-4-9 11:11:11'
        },
        {
          cid: '123',
          ctitle: 'ctitle',
          pdatesave: '2018-4-9 11:11:11'
        },
        {
          cid: '123',
          ctitle: 'ctitle',
          pdatesave: '2018-4-9 11:11:11'
        }
      ]
    }
  },
  computed: {// 计算属性
  },
  methods: {// 这里用于定义方法
  }
}
</script>

<style>
.divcss5{ background:#3CB371; color:#FFF}
.divcsstime{ color:#808080}
</style>


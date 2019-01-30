<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="我负责的" name="first">
        <el-row v-for="card in allchargedcards" :span="4" :key="card.id" :offset="1">
          <el-card :model="card" shadow="hover" style="width: 530px;height: 160px;" class="box-card">
            <div slot="header" class="clearfix">
              <label>{{ card.title }}</label>
              <label id="tag_number">{{ card.number }}</label>
              <el-button type="text" value = "card.id" @click="viewCard(card)">详情</el-button>
            </div>
            <div class="text item">
              <label>hello</label>
            </div>

          </el-card>
        </el-row>

      </el-tab-pane>
      <el-tab-pane label="我创建的" name="second">类型/字段/状态</el-tab-pane>
      <el-tab-pane label="我参与的" name="third">权限hahah</el-tab-pane>
      <el-tab-pane label="已完成的" name="third">权限hahah</el-tab-pane>
    </el-tabs>

    <el-dialog :visible.sync="dialogTableVisible" title="收货地址">

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <label>{{ currentcard.title }}</label>
          </div>
        </el-col>
      </el-row>

    </el-dialog>
  </div>

</template>

<script>
import { cardInchargeList } from '@/api/card'
import { getId } from '@/utils/auth'
export default {
  name: 'Index',
  data() {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      allchargedcards: [
      ],
      userId: '',
      currentcard: ''
    }
  },
  created: function() {
    /*    var self = this
    this.userId = getId()
    cardInchargeList(this.userId).then(response => {
      self.allchargedcards = response.data
      console.log(self.allchargedcards)
    })*/
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab.index)
      if (tab.index === '0') {
        // 向后台请求项目的数据,我负责的
        this.userId = getId()
        cardInchargeList(this.userId).then(response => {
          const data = response.data
          this.allchargedcards = data
          console.log(data)
        })
      } else if (tab.index === '1') {
        // 我创建的

      } else if (tab.index === '2') {
        // 我参与的
      } else {
        // 已完成的

      }
    },
    viewCard(card) {
      // 把card对象渲染页面
      this.currentcard = card
      this.dialogTableVisible = true
    }
  }
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

</style>

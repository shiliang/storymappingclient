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
              <span>{{ card.type }}</span>
              <span>敏捷开发</span>
              <span>{{ card.planTitle }}</span>
              <span class="time">{{ card.date | formatDate }}</span>
            </div>

          </el-card>
        </el-row>

      </el-tab-pane>
      <el-tab-pane label="我创建的" name="second">类型/字段/状态</el-tab-pane>
      <el-tab-pane label="我参与的" name="third">权限hahah</el-tab-pane>
      <el-tab-pane label="已完成的" name="third">权限hahah</el-tab-pane>
    </el-tabs>

    <el-dialog :visible.sync="dialogTableVisible" title="卡片详情">

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <label>{{ currentcard.title }}</label>
          </div>
        </el-col>
      </el-row>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="字段" name="1">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <label>状态:</label>
                <el-input v-model="input"/>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <label>负责人:</label>
                <el-input v-model="input"/>

              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <label>优先级:</label>
                <el-input v-model="input"/>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <label>估算工时:</label>
                <el-input v-model="input"/>

              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <label>截止时间:</label>
                <el-input v-model="input"/>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <label>所属计划:</label>
                <el-input v-model="input"/>

              </div>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="内容" name="2">
          <div>
            <p>故事描述:</p>
            <p id="storydesc"/>
          </div>
          <div>
            <p>验证标准:</p>
          </div>
        </el-collapse-item>
        <el-collapse-item title="卡片层级" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="动态" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>

    </el-dialog>
  </div>

</template>

<script>
import { cardInchargeList } from '@/api/card'
import { getId } from '@/utils/auth'
import { formatDate } from '@/utils/formatDate'
export default {
  name: 'Index',
  filters: {
    formatDate(time) {
      const date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  data() {
    return {
      activeNames: ['1'],
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
    },
    handleChange(val) {
      console.log(val)
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

<template>
<div>
  <el-row>
    <div style="padding:30px;">
    <el-alert :closable="false" title="卡片列表" />
    </div>
    <el-col :span="4" v-for="card in allcards" :key="card.id" :offset="1">
        <el-card :body-style="{ padding: '0px', height:'360px', }" shadow="hover" style="width: 230px;height: 160px;" :model="card" >
            <div style="padding: 6px;height: 310px;">
              <div @click="watchCard(card.id)" style="cursor:pointer;">
                <div class="divcss5" >
                    <div style="position: relative;left: 10px;"><font size="3">#{{card.id}}</font></div>
                </div>
                <div style="position: relative;top: 15px;left: 10px;"><font size="5">{{card.title}}</font></div>
                <div style="position: relative;top: 30px;">
                    <div style="position: relative;top: 10px;left: 100px;" class="divcsstime"><font size="1"><i class="el-icon-time"></i>{{card.date}}</font></div>
                </div>
                </div>
                <div style="position: relative;top: 45px;left: 100px;">
                  <el-button size="small" icon="el-icon-edit" @click="editCard(card.id)"></el-button>
                  <el-button size="small" icon="el-icon-delete" @click="delCard(card.id)"></el-button>
                </div>
                <!-- <div style="position: relative;top: 45px;left: 100px;">
                  <el-button size="small" icon="el-icon-edit" @click="editCard(card.id)"></el-button>
                </div> -->
            </div>
        </el-card>
    </el-col>
</el-row>

<el-dialog title="卡片信息" :visible.sync="dialogFormVisible">
  <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="卡片主题" required="true">
        <el-input v-model="form.title" readonly="readonly"/>
      </el-form-item>
      <el-form-item label="所属计划">
        <el-select v-model="form.project" placeholder="请选择计划" disabled="readonly">
          <el-option :label="belongProject.title" :value="belongProject.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="form.status" placeholder="请选择状态" disabled="readonly">
          <el-option label="新建" value="add"/>
          <el-option label="开发" value="dev"/>
          <el-option label="结束" value="end"/>
        </el-select>
      </el-form-item>
      <el-form-item  label="负责人:">
        <el-col>
          <el-input v-model="form.personInCharge" placeholder="负责人" style="width:auto" readonly="readonly"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="卡片描述" required="true">
        <el-input v-model="form.content" type="textarea" readonly="readonly"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="dialogFormVisible=false">关闭</el-button>
      </el-form-item>
    </el-form>
</el-dialog>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { cardlist, cardview, delcard } from '@/api/card'
import { projectview } from '@/api/project'
export default {
  data() {
    return {
      allcards: [
      ],
      dialogFormVisible: false,
      // selectStatus:{'add': '新建', '':''},
      form: {
        title: '',
        project: '',
        status: '',
        personInCharge: '',
        content: ''
      },
      belongProject: {},
      readonly: true
    }
  },
  created: function() {
    // alert("wo lai le !!")
    var self = this
    cardlist().then(response => {
      self.allcards = response.data
      // console.log(self.allcards)
    })
  },
  methods: {//这里用于定义方法
    delCard(id) {
      delcard(id).then(response => {
        if (response.status === 200){
          alert("删除卡片成功！")
          location.reload()
        } else {
          alert("删除失败！")
          location.reload()
        }
      })
    },
    watchCard(id) {
      cardview(id).then(response => {
        var res = response.data
        this.form.id = res.id
        this.form.title = res.title
        var projectid = res.belongProject.id
        this.form.status = res.status
        this.form.personInCharge = res.personInCharge
        this.form.content = res.content
        projectview(projectid).then(re => {
          this.belongProject = re.data
          this.form.project = this.belongProject
        })
        this.dialogFormVisible = true
      })
    },
  },
  computed: {//计算属性
  }

  
}
</script>

<style>
.divcss5{ background:#3CB371; color:#FFF} 
.divcsstime{ color:#808080} 
</style>



<template>
<div>
  <el-row>
    <div style="padding:30px;">
    <el-alert :closable="false" title="计划列表" />
    </div>
    <el-col :span="4" v-for="plan in allplans" :key="plan.id" :offset="1">
        <el-card :body-style="{ padding: '0px', height:'1000px', }" shadow="hover" style="width: 230px;height: 160px;" :model="card" >
            <div style="padding: 6px;height: 310px;">
                <div @click="watchPlan(plan.id)" style="cursor:pointer;">
                <div class="divcss5" >
                    <div style="position: relative;left: 10px;"><font size="3">#{{plan.id}}</font></div>
                </div>
                <div style="position: relative;top: 15px;left: 10px;"><font size="5">{{plan.title}}</font></div>
                <div style="position: relative;top: 30px;">
                    <div style="position: relative;top: 10px;left: 100px;" class="divcsstime"><font size="1"><i class="el-icon-time"></i>{{plan.beginDate}}</font></div>
                </div>
				<div style="position: relative;top: 30px;">
                    <div style="position: relative;top: 10px;left: 100px;" class="divcsstime"><font size="1"><i class="el-icon-time"></i>{{plan.endDate}}</font></div>
                </div>
                </div>
                <div style="position: relative;top: 45px;left: 100px;">
                  <el-button size="small" icon="el-icon-edit" @click="editPlan(plan.id)"></el-button>
                  <el-button size="small" icon="el-icon-delete" @click="delPlan(plan.id)"></el-button>
                </div>
                <!-- <div style="position: relative;top: 45px;left: 100px;">
                  <el-button size="small" icon="el-icon-edit" @click="editPlan(plan.id)"></el-button>
                </div> -->
            </div>
        </el-card>
    </el-col>
</el-row>


</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { planlist, planview, delplan } from '@/api/plan'
import { projectview } from '@/api/project'
export default {
  data() {
    return {
      allplans: [
      ],
      dialogFormVisible: false,
      form: {
        title: '',
		fatherproject: '',
        beginDate: '',
        endDate: '',
        discribe: '',
      }
    }
  },
  created: function() {
    // alert("wo lai le !!")
    var self = this
    planlist().then(response => {
      self.allplans = response.data
      //console.log("sdakhsa", self.allplans)
    })
  },
  methods: {//这里用于定义方法
    delPlan(id) {
      delplan(id).then(response => {
        if (response.status === 200){
          alert("删除计划成功！")
          location.reload()
        } else {
          alert("删除失败！")
          location.reload()
        }
      })
    },
    watchPlan(id) {
      console.log("ddddddddss",id)
      planview(id).then(response => {
        var res = response.data
        this.form.id = res.id
        this.form.title = res.title
         //this.form.project = res.project
         //var projectid = res.belongProject.id
         //onsole.log(projectid)
        this.form.beginDate = res.beginDate
		console.log("fff", this.form.beginDate)
        this.form.endDate = res.endDate
        this.form.discribe = res.discribe
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



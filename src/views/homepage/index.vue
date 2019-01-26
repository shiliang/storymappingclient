<template>
  <div>
    <el-row>
      <div style="padding:30px;">
        <el-alert :closable="false" title="项目列表" />
      </div>
      <el-col v-for="project in allprojects" :span="4" :key="project.id" :offset="1">
        <el-project :body-style="{ padding: '0px', height:'360px', }" :model="project" shadow="hover" style="width: 230px;height: 160px;" >
          <div style="padding: 6px;height: 310px;">
            <div style="cursor:pointer;" @click="watchproject(project.id)">
              <div class="divcss5" >
                <div style="position: relative;left: 10px;"><font size="3">#{{ project.id }}</font></div>
              </div>
              <div style="position: relative;top: 15px;left: 10px;"><font size="5">{{ project.projectName }}</font></div>
            </div>
            <div style="position: relative;top: 45px;left: 100px;">
              <el-button size="small" icon="el-icon-edit" @click="editproject(project.id)"/>
              <el-button size="small" icon="el-icon-delete" @click="delproject(project.id)"/>
            </div>
          </div>
        </el-project>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { projectlist, projectview } from '@/api/project'
import { getId } from '../../utils/auth'
import user from '../../store/modules/user'

export default {
  name: 'Index',
  props: {
    msg: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      allprojects: []
    }
  },
  created: function() {
    var userid = getId()
    projectlist(userid).then(response => {
      this.allprojects = response.data
    })
  },

  methods: {
    watchproject(projectid) {
      projectview(projectid).then(() => {
        user.Child = false
        user.Parent = true
        this.$router.push({ path: this.redirect || '/' })
      })
    }
  }
}
</script>

<style scoped>
  .divcss5{ background:#3CB371; color:#FFF}
</style>

<template>
  <div class="app-container"/>
</template>

<script>
import { projectlist } from '@/api/project'
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

  },
  methods: {

  },
  beforeRouteEnter(to, from, next) {
    var user_id = from.params.id
    // 发请求给后台请求渲染数据
    projectlist().then(response => {
      var self = this
      self.projects = response.data
      console.log(self.form.projects)
    })
  }
}
</script>

<style scoped>

</style>

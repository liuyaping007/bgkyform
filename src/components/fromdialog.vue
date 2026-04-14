<template>
  <div class="fromdialog">
    <el-dialog :width="dialogwidth" :title="fromname" class="my-dialog" :visible.sync="formvisible"
      v-if="dialogtype === '1'" :modal="true" :style="getcss">
      <iframe ref="iframepreviewpc" name="iframepreviewpc" frameborder="0" :src="hrefurl" width="100%" height="100%"
        id="mobile_survey"></iframe>
      <!-- <previewpage :bigId="bigId" :vuecode="bigVuecode" :isdialog="true">
      </previewpage> -->
    </el-dialog>
    <el-drawer v-else :title="fromname" :visible.sync="formvisible" :size="dialogwidth">
      <iframe ref="iframepreviewpc" name="iframepreviewpc" frameborder="0" :src="hrefurl" width="100%" height="100%"
        id="mobile_survey"></iframe>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: "fromdialog",
  data() {
    return {
      projectId: '',
      bigId: '',
      dialogwidth: '',
      dialogHeight: '',
      fromname: '',
      formvisible: false,
      dialogtype: '1',
      hrefurl: '',
      dialogtop: '',
    }
  },
  computed: {
    getcss() {
      return `---fromdialogmargintop:${this.dialogtop}; ---fromdialogwidth:${this.dialogwidth} ;---fromdialogheight:${this.dialogHeight} ;`
    },
  },
  methods: {
    init(projectId, param, dialoginfo) {
      let newparam = {}
      if (param != null) {
        if (typeof param == 'string') {
          param = JSON.parse(param)
          if (Array.isArray(param)) {
            param = {}
          }
        }
        if (param.body != null) {
          newparam = param.body
        } else {
          newparam = param
        }
        newparam['projectId'] = projectId
      } else {
        newparam['projectId'] = projectId
      }
      const routeData = this.$router.resolve({
        path: '/big' + projectId, //跳转目标窗口的地址
        query: newparam,
      })
      this.hrefurl = routeData.href
      this.projectId = projectId
      // 获取屏幕宽度
      const screenWidth = window.innerWidth || document.documentElement.clientWidth
      // 计算80%的屏幕宽度
      const eightyPercentWidth = Number((screenWidth * 0.8).toFixed(0))
      const screenHeight = window.innerHeight || document.documentElement.clientHeight

      dialoginfo = dialoginfo == null ? {
        bigName: "弹层标题",
        bigWidth: eightyPercentWidth,
        bigHeight: screenHeight,
      } : dialoginfo;
      this.fromname = dialoginfo.bigName
      this.bigId = projectId
      this.dialogwidth =
        dialoginfo.bigWidth > eightyPercentWidth
          ? dialoginfo.bigWidth * 0.8 + 'px'
          : dialoginfo.bigWidth + 20 + 'px'
      this.dialogHeight =
        dialoginfo.bigHeight > screenHeight
          ? dialoginfo.bigHeight * 0.8 + 'px'
          : dialoginfo.bigHeight + 'px'
      this.dialogtop = dialoginfo == null ? "60px" :
        (
          (screenHeight -
            (dialoginfo.bigWidth > screenHeight
              ? dialoginfo.bigHeight * 0.8
              : dialoginfo.bigHeight)) /
          2
        ).toFixed(0) + 'px'
      this.formvisible = true
    }
  }
}
</script>
<style scoped>
.fromdialog>>>.el-drawer__header {
  margin-bottom: 5px;
}

.dialog-footer {
  margin-bottom: 10px;
  margin-right: 8px;
}

.foot-toolbar {
  text-align: right;
}

.my-dialog>>>.el-dialog {
  margin-top: var(---fromdialogmargintop) !important;
}

.my-dialog>>>.el-dialog__body {
  width: var(---fromdialogwidth);
  height: var(---fromdialogheight);
  overflow: hidden;
}
</style>
<template>
  <div :style="{ width: '100%', height: '100%' }" v-on="$listeners">
    <div v-if="isError !== true" class="echart" :id="controlid" :style="{
      float: 'left',
      width: '100%',
      height: '100%',
    }"></div>
    <div v-else class="logmsg">{{ logmsg }}</div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import "echarts-wordcloud";
import tdTheme from "./theme.json"; // 引入默认主题
import "echarts-gl";
import "echarts-liquidfill/src/liquidFill.js"; //在这里引入
import elementResizeDetectorMaker from "element-resize-detector";
export default {
  props: [
    "options",
    "echartroll",
    "maxechartrollnum",
    "echartrolltime",
    "orienttype",
  ],
  data() {
    return {
      mychart: undefined,
      controlid: "",
      optionconfig: {},
      isError: false,
      logmsg: "",
      mapregistecode: "",
      datalength: 0,
      intervalobj: null,
      intervalindex: 0,
    };
  },
  methods: {
    detectChartType() {
      let findseries = kylinjson.kylinjson({
        path: "$..series[?(@ != null && (@.type!='line'||@.type!='bar'))]",
        json: this.optionconfig,
      });
      this.datalength = 0;
      if (findseries.length > 0 && this.optionconfig.series != null) {
        this.intervalindex = this.optionconfig.series.indexOf(findseries[0]);
        if (this.intervalindex >= 0) {
          this.datalength = findseries[0].data.length;
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    setechartroll() {
      if (this.echartroll == true && this.detectChartType()) {
        this.optionconfig.dataZoom = [
          {
            type: "slider",
            start: 0,
            end: this.maxechartrollnum - 1,
            show: false, // 关键配置项
          },
        ];
        if (this.orienttype == "horizontal") {
          this.options.dataZoom[0].xAxisIndex = this.intervalindex; // 关联第一个x轴
          this.options.dataZoom[0].orient = "horizontal"; // 横向布局（默认值）
        } else {
          this.options.dataZoom[0].yAxisIndex = this.intervalindex; // 关联第一个x轴
          this.options.dataZoom[0].orient = "vertical"; // 横向布局（默认值）
        }
        this.autoScroll();
      }
    },
    autoScroll() {
      if (this.optionconfig.dataZoom != null) {
        let totalrowscount = this.datalength;

        if (this.intervalobj != null) {
          clearInterval(this.intervalobj);
        }
        let count = 0;
        let $this = this;
        this.intervalobj = setInterval(() => {
          $this.mychart.dispatchAction({
            type: "dataZoom",
            show: false, // 关键配置项
            startValue: count % (totalrowscount - $this.maxechartrollnum),
            endValue:
              (count % (totalrowscount - $this.maxechartrollnum)) +
              $this.maxechartrollnum,
          });
          count += 1;
          if (count > totalrowscount) {
            count = 0;
          }
        }, 2000);
      }
    },
    loadmapregistecode() {
      let findResult = kylinjson.kylinjson({
        path: "$..map",
        json: this.options,
      });
      if (findResult != null && findResult.length > 0) {
        this.mapregistecode = findResult[0];
      } else {
        let findResult2 = kylinjson.kylinjson({
          path: "$..mapType",
          json: this.options,
        });
        if (findResult2 != null && findResult2.length > 0) {
          this.mapregistecode = findResult[0];
        }
      }
    },
    initChart() {
      this.loadmapregistecode();
      this.mychart = echarts.init(
        document.getElementById(this.controlid),
        tdTheme
      );
      let app = {};
      this.$emit("loadoptions", this.mychart, echarts, app, this);
      if (this.options !== undefined && this.options !== null) {
        if (
          this.mapcode != this.mapregistecode &&
          echarts.getMap(this.mapcode) != null
        ) {
          echarts.registerMap(
            this.mapregistecode,
            echarts.getMap(this.mapcode)
          );
        }
        this.optionconfig = this.options;
        this.mychart.clear(); // 每次重绘之前，先清除一下
        this.mychart.setOption(this.optionconfig, true);
      }
      const _this = this;
      const erd = elementResizeDetectorMaker();
      erd.listenTo(document.getElementById(this.controlid), () => {
        _this.$nextTick(() => {
          this.resize();
        });
      });
      this.$emit("initchartafter", this.mychart);
      this.mychart.off("click"); //图表渲染前销毁点击事件
      this.mychart.on("click", (param) => {
        this.$emit("clickechart", param);
      });
      this.mychart.getZr().off("click");
      this.mychart.getZr().on("click", (params) => {
        if (!params.target) {
          this.$emit("zrclick", params);
        }
      });
      // 事件绑定
      this.mychart.on("mouseover", () => {
        if (this.intervalobj != null) {
          clearInterval(this.intervalobj);
          this.intervalobj = null;
        }
      });
      this.mychart.on("mouseout", this.autoScroll);
    },
    resize() {
      this.mychart.resize();
    },
    getMychart() {
      return this.mychart;
    },

    loadOption(options) {
      if (this.mychart != null) {
        if (options !== null) {
          if (
            options.series != null &&
            options.series.length > 0 &&
            options.series[0].maskImage != null
          ) {
            var maskResource = new Image();
            maskResource.src = options.series[0].maskImage;
            options.series[0].maskImage = maskResource;
          }
          this.optionconfig = options;
          this.mychart.setOption(this.optionconfig);
        } else {
          this.mychart.setOption({});
        }
      }
    },
  },
  created() {
    this.controlid =
      "div" + Date.parse(new Date()) + "_" + Math.ceil(Math.random() * 99999);
    this.$nextTick(() => {
      this.initChart();
    });
  },
  mounted() { },
  watch: {
    options: {
      handler(val) {
        if (this.mychart !== undefined) {
          if (this.options !== undefined) {
            this.optionconfig = this.options;
            this.setechartroll();
            this.mychart.setOption(this.optionconfig, true);
          }
        }
      },
      deep: true,
    },
    echartroll() {
      this.setechartroll();
    },
    maxechartrollnum() {
      this.setechartroll();
    },
    echartrolltime() {
      this.setechartroll();
    },
    orienttype() {
      this.setechartroll();
    },
  },
  beforeDestroy() {
    if (this.mychart) {
      this.mychart.dispose();
    }
    if (this.intervalobj != null) {
      clearInterval(this.intervalobj);
      this.intervalobj = null;
    }
  },
};
</script>
<style scoped>
.logmsg {
  color: red;
  font-size: 25px;
}
</style>

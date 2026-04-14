import { setOptionsTitle, setOptionsTooltip } from "../comm.js";
import * as echarts from "echarts";
export const widgetChinaMap = {
  xAxis: {
    axisLine: false,
  },
  yAxis: {
    axisLine: false,
  },
  title: {
    show: true,
  },
  visualMap: {
    min: 0,
    max: 1000000,
    text: ["高", "低"],
    color: ["#073684", "#061E3D"],
  },
  tooltip: {
    trigger: "item",
    formatter: function(params) {
      console.log(params);
      let value = params.value;
      if (isNaN(value)) {
        value = 0;
      }
      return params.name + " : " + value;
    },
  },
  geo: [
    {
      map: "china",
      show: true,
      roam: false,
      layoutSize: "80%",
      label: {
        emphasis: {
          show: false,
          color: "white",
        },
      },
      itemStyle: {
        normal: {
          borderColor: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "#00F6FF",
              },
              {
                offset: 1,
                color: "#53D9FF",
              },
            ],
            false
          ),
          borderWidth: 3,
          shadowColor: "rgba(10,76,139,1)",
          shadowOffsetY: 0,
          shadowBlur: 60,
        },
      },
    },
  ],
  series: [
    {
      aspectScale: 0.75,
      type: "map",
      map: "china",
      //roam: true,
      effect: {
        show: false,
        period: 6,
        trailLength: 0.7,
        color: "#fff",
        symbolSize: 3,
      },
      label: {
        normal: {
          //调整数值
          position: "right",
          // 地图省市区显隐
          show: false,
          color: "#53D9FF",
          fontSize: 20,
        },
        emphasis: {
          show: true,
        },
      },
      itemStyle: {
        normal: {
          //地图块颜色
          areaColor: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#073684", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#061E3D", // 100% 处的颜色
              },
            ],
          },
          borderColor: "#215495",
          borderWidth: 1,
        },
        //鼠标放置颜色加深
        emphasis: {
          areaColor: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#073684", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#2B91B7", // 100% 处的颜色
              },
            ],
          },
        },
      },
      data: [],
    },
  ],
};
export const widgetChinaMapAnalysisfun = {
  optionsSetup: {},
  options: {},
  optionsStyle: {},
  val: [],
  setOptions(options, optionsSetup, cotrl, val) {
    this.val = [];
    if (val != null && typeof val == "string" && val != "") {
      this.val = JSON.parse(val);
    } else if (typeof val == "object") {
      this.val = val;
    }
    this.optionsStyle.width = cotrl.w;
    this.optionsStyle.height = cotrl.h;
    this.optionsSetup = optionsSetup;
    this.options = options;
    this.options.title = setOptionsTitle(this.optionsSetup);
    this.options.tooltip = setOptionsTooltip(this.optionsSetup);
    this.setOptionsMap();
    return this.options;
  },
  staticDataFn() {
    let val = this.val;
    this.options.series[0].data = val;
    const seriesData = this.options.series[0].data.map(({ value }) => value);
    this.options.visualMap.max = Math.max(...seriesData);
  },
  // 地图设置
  setOptionsMap() {
    const optionsSetup = this.optionsSetup;
    const label = {
      normal: {
        //调整数值
        position: "right",
        // 地图省市区显隐
        show: optionsSetup.isShowMap,
        color: optionsSetup.colorMap,
        fontSize: optionsSetup.fontSizeMap,
      },
      emphasis: {
        show: false,
      },
    };
    const itemStyle = {
      normal: {
        //地图块颜色
        areaColor: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: optionsSetup.font0PreColor, // 0% 处的颜色
            },
            {
              offset: 1,
              color: optionsSetup.font100PreColor, // 100% 处的颜色
            },
          ],
        },
        borderColor: optionsSetup.borderColor,
        borderWidth: 1,
      },
      //鼠标放置颜色加深
      emphasis: {
        areaColor: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#073684", // 0% 处的颜色
            },
            {
              offset: 1,
              color: optionsSetup.fontHighlightColor, // 100% 处的颜色
            },
          ],
        },
      },
    };
    this.options.visualMap.color = [
      optionsSetup.num100PreColor,
      optionsSetup.num0PreColor,
    ];
    this.options.series[0]["label"] = label;
    this.options.series[0]["itemStyle"] = itemStyle;
  },
};

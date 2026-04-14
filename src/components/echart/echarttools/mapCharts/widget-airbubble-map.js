import {
  setWidgetConfigValue,
  setOptionsTitle,
  setOptionsTooltip,
} from "../comm.js";
import * as echarts from "echarts";
let max = 6000,
  min = 10;
let maxSize4Pin = 100,
  minSize4Pin = 20;
export const widgetAirbubbleMap = {
  //backgroundColor: '#0F1C3C',
  tooltip: {
    trigger: "item",
    formatter: function(params) {
      if (params.value.length > 1) {
        return params.data.name + "" + params.data.value[2];
      } else {
        return params.name;
      }
    },
  },
  geo: {
    map: "china",
    show: true,
    roam: true,
    label: {
      emphasis: {
        show: false,
      },
    },
    layoutSize: "80%",
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
        borderWidth: 1,
        shadowColor: "rgba(10,76,139,1)",
        shadowOffsetY: 0,
        shadowBlur: 60,
      },
    },
  },
  series: [
    {
      type: "effectScatter",
      coordinateSystem: "geo",
      rippleEffect: {
        brushType: "stroke",
      },
      showEffectOn: "render",
      itemStyle: {
        normal: {
          //气泡颜色
          color: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "rgba(5,80,151,0.2)",
              },
              {
                offset: 0.8,
                color: "rgba(5,80,151,0.8)",
              },
              {
                offset: 1,
                color: "rgba(0,108,255,0.7)",
              },
            ],
            global: false,
          },
        },
      },
      label: {
        normal: {
          show: true,
          color: "#fff",
          fontWeight: "bold",
          position: "inside",
          formatter: function(para) {
            return "{cnNum|" + para.data.value[2] + "}";
          },
          rich: {
            cnNum: {
              fontSize: 13,
              color: "#D4EEFF",
            },
          },
        },
      },
      symbol: "circle",
      symbolSize: (val) => {
        debugger;
        if (val[2] == 0) {
          return 0;
        }
        return (
          ((this.maxSize4Pin - this.minSize4Pin) / (max - min)) * val[2] +
          (this.maxSize4Pin -
            ((this.maxSize4Pin - this.minSize4Pin) / (max - min)) * max) *
            1.2
        );
      },
      data: [],
      zlevel: 1,
    },
  ],
};
let geoCoordMap = {
  台湾省: [121.5135, 25.0308],
  黑龙江省: [127.9688, 45.368],
  内蒙古自治区: [110.3467, 41.4899],
  吉林省: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁省: [123.1238, 42.1216],
  河北省: [114.4995, 38.1006],
  天津市: [117.4219, 39.4189],
  山西省: [112.3352, 37.9413],
  陕西省: [109.1162, 34.2004],
  甘肃省: [103.5901, 36.3043],
  宁夏回族自治区: [106.3586, 38.1775],
  青海省: [101.4038, 36.8207],
  新疆维吾尔自治区: [87.9236, 43.5883],
  西藏自治区: [91.11, 29.97],
  四川省: [103.9526, 30.7617],
  重庆市: [108.384366, 30.439702],
  山东省: [117.1582, 36.8701],
  河南省: [113.4668, 34.6234],
  江苏省: [118.8062, 31.9208],
  安徽省: [117.29, 32.0581],
  湖北省: [114.3896, 30.6628],
  浙江省: [119.5313, 29.8773],
  福建省: [119.4543, 25.9222],
  江西省: [116.0046, 28.6633],
  湖南省: [113.0823, 28.2568],
  贵州省: [106.6992, 26.7682],
  云南省: [102.9199, 25.4663],
  广东省: [113.12244, 23.009505],
  广西壮族自治区: [108.479, 23.1152],
  海南省: [110.3893, 19.8516],
  上海市: [121.4648, 31.2891],
  香港: [114.173355, 22.320048],
  澳门: [113.54909, 22.198951],
};

export const widgetAirbubbleMapAnalysisfun = {
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

    // this.setOptionsTitle();
    this.setOptionsGeo();
    if (Array.isArray(this.optionsSetup.mapName)) {
      cotrl.mapcity = this.optionsSetup.mapName;
      cotrl.mapcode = this.options.geo.map;
    }
    // this.setOptionsData();
    this.setOptionAirSize();
    this.staticDataFn();
    // this.setOptionsTooltip();
    return this.options;
  },
  setOptionsGeo() {
    const optionsSetup = this.optionsSetup;
    let mapName =
      this.optionsSetup.mapName == "" ? "china" : this.optionsSetup.mapName;
    if (Array.isArray(this.optionsSetup.mapName)) {
      mapName = this.optionsSetup.mapName[this.optionsSetup.mapName.length - 1];
    }

    const geo = {
      map: mapName,
      show: true,
      roam: true,
      layoutSize: "80%",
      label: {
        //调整数值
        // 地图省市区显隐
        show: optionsSetup.isShowMap,
        color: optionsSetup.fontColor,
        fontSize: optionsSetup.fontSize,
        fontWeight: optionsSetup.fontWeight,
        fontStyle: optionsSetup.fontStyle,
        fontFamily: optionsSetup.fontFamily,
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
                color: optionsSetup.fontColor0, // 0% 处的颜色
              },
              {
                offset: 1,
                color: optionsSetup.fontColor100, // 100% 处的颜色
              },
            ],
          },
          borderType: optionsSetup.borderType,
          borderColor: optionsSetup.borderColor,
          borderWidth: optionsSetup.borderWidth,
          shadowColor: optionsSetup.shadowColor,
          shadowBlur: optionsSetup.shadowBlur,
          opacity: optionsSetup.opacity / 100,
        },
      },
      //鼠标放置颜色加深
      emphasis: {
        label: {
          show: optionsSetup.isShowEmphasisLabel,
          color: optionsSetup.emphasisLabelFontColor,
          fontSize: optionsSetup.emphasisLabelFontSize,
          fontWeight: optionsSetup.emphasisLabelFontWeight,
          fontStyle: optionsSetup.emphasisLabelFontStyle,
          fontFamily: optionsSetup.emphasisLabelFontFamily,
        },
        itemStyle: {
          areaColor: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: optionsSetup.emphasisLabelFontColor0, // 0% 处的颜色
              },
              {
                offset: 1,
                color: optionsSetup.emphasisLabelFontColor100, // 100% 处的颜色
              },
            ],
          },
        },
      },
    };
    this.options.geo = geo;
  },
  setOptionAirSize() {
    maxSize4Pin = this.optionsSetup.fontmaxSize4Pin;
    minSize4Pin = this.optionsSetup.fontminSize4Pin;
  },
  staticDataFn() {
    let val = this.val;
    const optionsSetup = this.optionsSetup;
    const label = this.options.series[0]["label"];
    const normal = {
      show: optionsSetup.isShowData,
      color: "#fff",
      fontWeight: "bold",
      position: "inside",
      formatter: function(para) {
        return "{cnNum|" + para.data.value[2] + "}";
      },
      rich: {
        cnNum: {
          fontSize: optionsSetup.fontDataSize,
          color: optionsSetup.fontDataColor,
          fontWeight: optionsSetup.fontDataWeight,
          fontStyle: optionsSetup.fontDataStyle,
          fontFamily: optionsSetup.fontDataFamily,
        },
      },
    };
    const data = this.convertData(val);
    this.options.series[0].symbolSize = (val, param1, param2) => {
      if (val[2] == 0) {
        return 0;
      }
      return (
        ((param1.data.maxSize4Pin - param1.data.minSize4Pin) /
          (param1.data.max - param1.data.min)) *
          val[2] +
        (param1.data.maxSize4Pin -
          ((param1.data.maxSize4Pin - param1.data.minSize4Pin) /
            (param1.data.max - param1.data.min)) *
            param1.data.max) *
          1.2
      );
    };
    this.options.series[0]["data"] = data;
    label["normal"] = normal;
  },

  convertData(data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
          maxSize4Pin: maxSize4Pin,
          minSize4Pin: minSize4Pin,
          max: max,
          min: min,
        });
      }
    }
    return res;
  },
};

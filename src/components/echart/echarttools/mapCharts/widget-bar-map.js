import { setWidgetConfigValue, setOptionsTitle } from "../comm.js";
import * as echarts from "echarts";
export const widgetBarMap = {
  title: {
    show: true,
  },
  //backgroundColor: '#131C38',
  tooltip: {
    trigger: "item",
    show: true,
    enterable: true,
    textStyle: {
      fontSize: 20,
      color: "#fff",
    },
    backgroundColor: "rgba(0,2,89,0.8)",
    formatter: function(params, ticket, callback) {
      if (params.seriesType == "scatter") {
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
        borderWidth: 1,
        shadowColor: "rgba(10,76,139,1)",
        shadowOffsetY: 0,
        shadowBlur: 60,
      },
    },
  },
  series: [
    // 柱状体的主干
    {
      type: "lines",
      zlevel: 1,
      effect: {
        show: false,
        symbolSize: 5, // 图标大小
      },
      lineStyle: {
        width: 20, // 尾迹线条宽度
        color: "rgb(22,255,255, .6)",
        opacity: 1, // 尾迹线条透明度
        curveness: 0, // 尾迹线条曲直度
      },
      silent: true,
      data: [],
    },
    // 柱状体的顶部
    {
      type: "scatter",
      coordinateSystem: "geo",
      //geoIndex: 0,
      zlevel: 1,
      rippleEffect: {
        brushType: "stroke",
      },
      label: {
        show: true,
        formatter: function(params) {
          return "{cnNum|" + params.data[2] + "}";
        },
        rich: {
          cnNum: {
            // 数值字号
            fontSize: 13,
            color: "#D4EEFF",
          },
        },
        position: "top",
      },
      symbol: "circle",
      symbolSize: [20, 10],
      itemStyle: {
        color: "rgb(22,255,255, 1)",
        opacity: 1,
      },
      silent: true,
      data: [],
    },
    // 柱状体的底部
    {
      type: "scatter",
      coordinateSystem: "geo",
      rippleEffect: {
        brushType: "stroke",
      },
      //geoIndex: 0,
      zlevel: 1,
      label: {
        // 这儿是处理的
        formatter: "{b}",
        position: "bottom",
        color: "#fff",
        fontSize: 12,
        distance: 10,
        show: true,
      },
      symbol: "circle",
      symbolSize: [20, 10],
      itemStyle: {
        // color: '#F7AF21',
        color: "rgb(22,255,255, 1)",
        opacity: 1,
      },
      silent: true,
      data: [],
    },
    // 底部外框
    {
      type: "scatter",
      coordinateSystem: "geo",
      //geoIndex: 0,
      rippleEffect: {
        brushType: "stroke",
      },
      zlevel: 1,
      label: {
        show: false,
      },
      symbol: "circle",
      symbolSize: [40, 20],
      itemStyle: {
        color: {
          type: "radial",
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [
            {
              offset: 0,
              color: "rgb(22,255,255, 0)", // 0% 处的颜色
            },
            {
              offset: 0.75,
              color: "rgb(22,255,255, 0)", // 100% 处的颜色
            },
            {
              offset: 0.751,
              color: "rgb(22,255,255, 1)", // 100% 处的颜色
            },
            {
              offset: 1,
              color: "rgb(22,255,255, 1)", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        opacity: 1,
      },
      silent: true,
      data: [],
    },
  ],
};
const geoCoordMap = {
  新疆维吾尔自治区: [87.6285, 43.7933],
  湖北省: [114.3415, 30.5462],
  辽宁省: [123.435, 41.8367],
  广东省: [113.2668, 23.1333],
  内蒙古自治区: [111.7652, 40.8182],
  黑龙江省: [126.6619, 45.7422],
  河南省: [113.753, 34.767],
  山东省: [117.0207, 36.6702],
  陕西省: [108.9539, 34.2666],
  贵州省: [106.7052, 26.6003],
  上海市: [121.4648, 31.2891],
  重庆市: [107.7539, 30.1904],
  西藏自治区: [91.1174, 29.6486],
  安徽省: [117.3301, 31.7345],
  福建省: [119.2961, 26.101],
  湖南省: [112.9829, 28.116],
  海南省: [110.3487, 20.0186],
  江苏省: [118.7635, 32.0613],
  青海省: [101.7804, 36.6225],
  广西壮族自治区: [108.3275, 22.8166],
  宁夏回族自治区: [106.2588, 38.4722],
  浙江省: [120.1525, 30.2666],
  河北省: [114.5303, 38.0377],
  香港特别行政区: [114.1733, 22.32],
  台湾省: [121.509, 25.0443],
  澳门特别行政区: [113.549, 22.1989],
  甘肃省: [103.8267, 36.0606],
  四川省: [104.0764, 30.6516],
  天津市: [117.2015, 39.0853],
  江西省: [115.8165, 28.6372],
  云南省: [102.7093, 25.0464],
  山西省: [112.5787, 37.8139],
  北京市: [116.4073, 39.9041],
  吉林省: [125.3258, 43.8969],
};
export const widgetBarMapAnalysisfun = {
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
    this.setOptionsGeo();
    if (Array.isArray(this.optionsSetup.mapName)) {
      cotrl.mapcity = this.optionsSetup.mapName;
      cotrl.mapcode = this.options.geo.map;
    }
    this.staticDataFn();
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
  }, // 计算柱图的高度比例
  calMaxHeight(val, heightRate) {
    const maxValue = Math.max.apply(
      null,
      val.map((item) => item.value)
    );
    return heightRate / maxValue;
  }, // 柱体主干
  getOptionsBarTrunk(optionsSetup, arrColor, allData, heightRate) {
    const barTrunk = {
      type: "lines",
      zlevel: 1,
      effect: {
        show: false,
        symbolSize: 5, // 图标大小
      },
      lineStyle: {
        width: optionsSetup.barWidth, // 尾迹线条宽度
        color: (params) => {
          return params.data.color;
        },
        opacity: 1, // 尾迹线条透明度
        curveness: 0, // 尾迹线条曲直度
      },
      silent: true,
      data: this.calScatterTrunk(allData, heightRate, arrColor),
    };
    return barTrunk;
  }, // 计算柱体的主干
  calScatterTrunk(val, heightRate, arrColor) {
    let arrydatalist = [];
    for (let i = 0; i < val.length; i++) {
      let item = val[i];
      arrydatalist.push({
        coords: [
          geoCoordMap[item.name],
          [
            geoCoordMap[item.name][0],
            geoCoordMap[item.name][1] +
              item.value * this.calMaxHeight(val, heightRate),
          ],
        ],
        color: arrColor[i],
      });
    }
    return arrydatalist;
  }, // 计算柱体顶部
  calScatterTop(val, heightRate, arrColor) {
    let arrydatalist = [];
    for (var i = 0; i < val.length; i++) {
      let item = val[i];
      arrydatalist.push([
        geoCoordMap[item.name][0],
        geoCoordMap[item.name][1] +
          item.value * this.calMaxHeight(val, heightRate),
        item.value,
        arrColor[i],
      ]);
    }
    return arrydatalist;
  },
  staticDataFn() {
    let val = this.val;
    let name = [];
    let latitude = [];
    let longitude = [];
    let value = [];
    for (const i in val) {
      name[i] = val[i].name;
      latitude[i] = val[i].latitude;
      longitude[i] = val[i].longitude;
      value[i] = val[i].value;
    }
    let allData = [];
    for (const i in name) {
      geoCoordMap[name[i]] = [latitude[i], longitude[i]];
      const obj = {
        name: name[i],
        value: value[i],
      };
      allData.push(obj);
    }
    const optionsSetup = this.optionsSetup;
    const heightRate = optionsSetup.heightRate;
    // 颜色设置
    const customColor = optionsSetup.customColor;
    if (!customColor) return;
    const arrColor = [];
    for (const i in val) {
      arrColor.push(customColor[i % customColor.length].color);
    }
    this.options.series[1] = this.getOptionsBarTrunk(
      optionsSetup,
      arrColor,
      allData,
      heightRate
    );
    this.options.series[2] = this.getOptionsBarTop(
      optionsSetup,
      arrColor,
      allData,
      heightRate
    );
    this.options.series[3] = this.getOptionsBarBottom(
      optionsSetup,
      arrColor,
      allData
    );
    this.options.series[4] = this.getOptionsBarBottomOut(
      optionsSetup,
      arrColor,
      allData
    );
  }, // 柱体顶
  getOptionsBarTop(optionsSetup, arrColor, allData, heightRate) {
    const barTop = {
      type: "scatter",
      coordinateSystem: "geo",
      //geoIndex: 0,
      zlevel: 1,
      rippleEffect: {
        brushType: "stroke",
      },
      label: {
        show: optionsSetup.isShowFontData,
        formatter: function(params) {
          return "{cnNum|" + params.data[2] + "}";
        },
        rich: {
          cnNum: {
            // 数值字号
            fontSize: optionsSetup.fontDataSize,
            color: (params) => {
              return params.data.color;
            },
            fontWeight: optionsSetup.fontDataWeight,
            fontStyle: optionsSetup.fontDataStyle,
            fontFamily: optionsSetup.fontDataFamily,
          },
        },
        position: "top",
      },
      symbol: "circle",
      symbolSize: [optionsSetup.barWidth, 10],
      itemStyle: {
        color: (params) => {
          return params.data[3];
        },
        opacity: 1,
      },
      silent: true,
      data: this.calScatterTop(allData, heightRate, arrColor),
    };

    return barTop;
  }, // 柱底
  getOptionsBarBottom(optionsSetup, arrColor, allData) {
    const batBottom = {
      type: "scatter",
      coordinateSystem: "geo",
      rippleEffect: {
        brushType: "stroke",
      },
      //geoIndex: 0,
      zlevel: 1,
      label: {
        // 这儿是处理的
        show: optionsSetup.isShowFontText,
        formatter: "{b}",
        position: "bottom",
        fontSize: optionsSetup.fontTextSize,
        color: (params) => {
          return param.data.color;
        },
        fontWeight: optionsSetup.fontTextWeight,
        fontStyle: optionsSetup.fontTextStyle,
        fontFamily: optionsSetup.fontTextFamily,
        distance: 10,
      },
      symbol: "circle",
      symbolSize: [optionsSetup.barWidth, 10],
      itemStyle: {
        color: (params) => {
          return params.data.color;
        },
        opacity: 1,
      },
      silent: true,
      data: this.calScatterBottom(allData, arrColor),
    };
    return batBottom;
  },
  // 柱底外圆
  getOptionsBarBottomOut(optionsSetup, arrColor, allData) {
    const barBottomOut = {
      type: "scatter",
      coordinateSystem: "geo",
      //geoIndex: 0,
      rippleEffect: {
        brushType: "stroke",
      },
      zlevel: 1,
      label: {
        show: false,
      },
      symbol: "circle",
      symbolSize: [optionsSetup.barBottomOutSymbolSize, 10],
      // 渐变色
      itemStyle: {
        color: (params) => {
          return {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "rgba(22,255,255, 0)", // 0% 处的颜色
              },
              {
                offset: 0.75,
                color: "rgba(22,255,255, 0)", // 100% 处的颜色
              },
              {
                offset: 0.751,
                color: params.data.color, // 100% 处的颜色
              },
              {
                offset: 1,
                color: params.data.color, // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          };
        },
        opacity: 1,
      },
      silent: true,
      data: this.calScatterBottom(allData, arrColor),
    };
    return barBottomOut;
  }, // 计算柱体的底部
  calScatterBottom(val, arrColor) {
    let arrydatalist = [];
    for (let i = 0; i < val.length; i++) {
      let item = val[i];
      arrydatalist.push({
        name: item.name,
        value: geoCoordMap[item.name],
        color: arrColor[i],
      });
    }
    return arrydatalist;
  },
};

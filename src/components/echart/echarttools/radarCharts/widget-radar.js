import {
  setWidgetConfigValue,
  setOptionsTitle,
  setOptionsTooltip,
  setOptionsLegend,
} from "../comm.js";
export const widgetRadar = {
  title: {},
  legend: {},
  radar: {
    indicator: [],
  },
  series: [],
};

export const widgetRadarAnalysisfun = {
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
    this.options.legend = setOptionsLegend(this.optionsSetup);
    this.setOptionsRadar();
    this.setOptionsMargin();
    this.staticDataFn();
    return this.options;
  },
  // 雷达大小设置
  setOptionsMargin() {
    this.options.radar.radius = "70%";
  }, // 雷达设置
  setOptionsRadar() {
    const optionsSetup = this.optionsSetup;
    const axisLine = {
      show: optionsSetup.axisLineShow,
      lineStyle: {
        color: optionsSetup.axisLineColor,
        opacity: optionsSetup.axisLineOpacity / 100,
      },
    };
    const axisName = {
      show: optionsSetup.axisNameShow,
      color: optionsSetup.axisNameColor,
      fontSize: optionsSetup.axisNameFontSize,
      fontStyle: optionsSetup.axisNamFontStyle,
      fontWeight: optionsSetup.axisNamFontWeight,
    };
    const splitLine = {
      show: optionsSetup.splitLineShow,
      lineStyle: {
        color: optionsSetup.splitLineColor,
        opacity: optionsSetup.splitLineOpacity / 100,
      },
    };
    this.options.radar.axisLine = axisLine;
    // echarts5.X以上，name属性被替换为axisName
    this.options.radar.name = axisName;
    this.options.radar.splitLine = splitLine;
    this.options.radar.shape = optionsSetup.radarShape;
    this.options.radar.splitNumber = optionsSetup.splitNumber;
  },
  //去重
  setUnique(arr) {
    let newArr = [];
    arr.forEach((item) => {
      return newArr.includes(item) ? "" : newArr.push(item);
    });
    return newArr;
  },
  staticDataFn() {
    let val = this.val;
    const optionsSetup = this.optionsSetup;
    //颜色
    const customColor = optionsSetup.customColor;
    const arrColor = [];
    for (let i = 0; i < customColor.length; i++) {
      arrColor.push(customColor[i].color);
    }
    this.options.color = arrColor;
    // 雷达设置相关
    const indicator = optionsSetup.dynamicAddRadar;
    this.options.radar.indicator = indicator;
    // 雷达图key值
    const radarKeys = [];
    for (const i in indicator) {
      radarKeys[i] = indicator[i].key;
    }
    const name = [];
    const data = [];
    const legendName = [];
    for (const i in val) {
      name[i] = val[i].name;
    }
    for (const i in name) {
      const values = new Array(radarKeys.length).fill(0);
      for (const j in radarKeys) {
        for (const k in val) {
          if (val[k].name == name[i]) {
            values[j] = val[k][radarKeys[j]];
          }
        }
      }
      data.push({
        name: name[i],
        value: values,
        label: {
          show: optionsSetup.isShow,
          position: optionsSetup.fontPosition,
          distance: optionsSetup.fontDistance,
          fontSize: optionsSetup.fontSize,
          color: optionsSetup.fontColor == "" ? null : optionsSetup.fontColor,
          fontWeight: optionsSetup.fontWeight,
          fontStyle: optionsSetup.fontStyle,
          fontFamily: optionsSetup.fontFamily,
        },
        lineStyle: {
          normal: {
            width: optionsSetup.lineWidth,
            type: optionsSetup.lineType,
            color: arrColor[i],
          },
        },
      });
      legendName.push(name[i]);
    }
    this.options.series[0] = {
      type: "radar",
      data: data,
      symbolSize: optionsSetup.symbolSize,
      areaStyle: {
        normal: {
          opacity: optionsSetup.opacity / 100,
        },
      },
    };
    this.options.legend["data"] = legendName;
    this.setOptionsLegendName(legendName);
  }, // 图例名称设置
  setOptionsLegendName(name) {
    const optionsSetup = this.optionsSetup;
    const series = this.options.series;
    const legendName = optionsSetup.legendName;
    // 图例没有手动写则显示原值，写了则显示新值
    if (null == legendName || legendName == "") {
      for (let i = 0; i < name.length; i++) {
        series[0].data[i].name = name[i];
      }
      this.options.legend["data"] = name;
    } else {
      const arr = legendName.split("|");
      for (let i = 0; i < arr.length; i++) {
        series[0].data[i].name = arr[i];
      }
      this.options.legend["data"] = arr;
    }
  },
};

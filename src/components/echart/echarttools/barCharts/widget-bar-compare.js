import {
  setOptionsLegend,
  setOptionsTitle,
  setOptionsTooltip,
} from "../comm.js";
export const widgetBarCompare = {
  title: {
    //text: '柱状对比图',
    x: "center",
    textStyle: {
      color: "#ffffff",
    },
  },
  //边距
  grid: [
    {
      //左
      show: false, //边框线
      left: "4%",
      top: 60,
      bottom: 10,
      containLabel: true,
      width: "40%",
    },
    {
      //中间字体位置
      show: false,
      left: "50.5%",
      top: 60,
      bottom: 25,
      width: "0%",
    },
    {
      //右
      show: false,
      right: "4%",
      top: 60,
      bottom: 10,
      containLabel: true,
      width: "40%",
    },
  ],
  //图例
  legend: {
    textStyle: {
      color: "#fff",
      textAlign: "center",
    },
    //itemGap:80,
    //itemWidth: 0
  },
  xAxis: [
    {
      // 左
      splitNumber: 2,
      show: true,
      type: "value",
      inverse: true,
      axisLine: {
        //底分割线
        show: false,
      },
      axisTick: {
        show: false,
      },
      position: "bottom",
      axisLabel: {
        // x轴
        show: true,
        textStyle: {
          color: "#ffffff",
          fontSize: 12,
        },
      },
      splitLine: {
        // 竖分割线
        show: true,
        lineStyle: {
          color: "#57617f",
          width: 1,
          type: "solid",
        },
      },
    },
    {
      gridIndex: 1,
      show: false,
    },
    {
      // 右
      gridIndex: 2,
      show: true,
      type: "value",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      position: "bottom",
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ffffff",
          fontSize: 12,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#57617f",
          width: 1,
          type: "solid",
        },
      },
    },
  ],
  yAxis: [
    {
      type: "category",
      inverse: true,
      position: "right",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      data: [],
    },
    {
      //处理轴数据
      gridIndex: 1,
      type: "category",
      inverse: true,
      position: "left",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          align: "center",
          color: "#ffffff",
          fontSize: 14,
        },
      },
      data: [],
    },
    {
      gridIndex: 2,
      type: "category",
      inverse: true,
      position: "left",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "",
      type: "bar",
      barGap: 20,
      barWidth: 15,
      label: {
        normal: {
          show: true,
          color: "red",
          position: "insideLeft",
          textStyle: {
            color: "#ffffff",
          },
        },
        emphasis: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          color: "#36c5e7",
          barBorderRadius: [8, 0, 0, 8],
        },
        emphasis: {
          show: false,
        },
      },
      data: [],
    },
    {
      name: "",
      type: "bar",
      barGap: 20,
      barWidth: 15,
      xAxisIndex: 2,
      yAxisIndex: 2,
      label: {
        normal: {
          show: true,
          color: "red",
          position: "insideRight",
          textStyle: {
            color: "#ffffff",
          },
        },
      },
      itemStyle: {
        normal: {
          color: "#e68b55",
          barBorderRadius: [0, 8, 8, 0],
        },
        emphasis: {
          show: false,
        },
      },
      data: [],
    },
  ],
};

export const widgetBarCompareAnalysisfun = {
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
    this.setOptionsXLeft();
    this.setOptionsXRight();
    this.setOptionsY();
    this.setOptionsTop();
    this.setOptionsGrid();
    this.setOptionsColor();
    this.staticDataFn();
    return this.options;
  },
  //静态数据
  staticDataFn() {
    let val = this.val;
    //数据
    let xAxisList = [];
    let yAxisList = [];
    let arrayList = [];
    const legendName = [];
    for (const i in val) {
      xAxisList[i] = val[i].axis;
      yAxisList[i] = val[i].name;
    }
    xAxisList = this.setUnique(xAxisList);
    yAxisList = this.setUnique(yAxisList);
    for (const i in yAxisList) {
      const data = new Array(xAxisList.length).fill(0);
      for (const j in xAxisList) {
        for (const k in val) {
          if (val[k].name == yAxisList[i]) {
            if (val[k].axis == xAxisList[j]) {
              data[j] = val[k].data;
            }
          }
        }
      }
      arrayList.push({
        name: yAxisList[i],
        data: data,
      });
      legendName.push(yAxisList[i]);
    }
    this.options.series[0]["name"] = arrayList[0].name;
    this.options.series[0]["data"] = arrayList[0].data;
    this.options.series[1]["name"] = arrayList[1].name;
    this.options.series[1]["data"] = arrayList[1].data;
    this.options.yAxis[1]["data"] = xAxisList;
    this.options.legend["data"] = legendName;
    this.setOptionsLegendName(legendName);
  }, //去重
  setUnique(arr) {
    let newArr = [];
    arr.forEach((item) => {
      return newArr.includes(item) ? "" : newArr.push(item);
    });
    return newArr;
  },
  setOptionsLegendName(name) {
    const optionsSetup = this.optionsSetup;
    const series = this.options.series;
    const legendName = optionsSetup.legendName;
    // 图例没有手动写则显示原值，写了则显示新值
    if (null == legendName || legendName == "") {
      for (let i = 0; i < name.length; i++) {
        series[i].name = name[i];
      }
      this.options.legend["data"] = name;
    } else {
      const arr = legendName.split("|");
      for (let i = 0; i < arr.length; i++) {
        series[i].name = arr[i];
      }
      this.options.legend["data"] = arr;
    }
  },
  // 左X轴设置
  setOptionsXLeft() {
    const optionsSetup = this.optionsSetup;
    const xAxisLeft = {
      max: optionsSetup.maxXLeft !== "" ? optionsSetup.maxXLeft : null,
      splitNumber: optionsSetup.splitNumberXLeft,
      type: "value",
      show: optionsSetup.isShowXLeft,
      inverse: true,
      position: "bottom",
      axisLabel: {
        // x轴
        show: optionsSetup.isShowAxisLabelXLeft,
        //interval: optionsSetup.textIntervalXLeft,
        textStyle: {
          color: optionsSetup.textColorXLeft,
          fontSize: optionsSetup.textFontSizeXLeft,
          fontWeight: optionsSetup.textFontWeightXLeft,
          fontStyle: optionsSetup.textFontStyleXLeft,
          fontFamily: optionsSetup.textFontFamilyXLeft,
        },
      },
      //X轴线
      axisLine: {
        show: optionsSetup.isShowAxisLineXLeft,
        lineStyle: {
          color: optionsSetup.lineColorXLeft,
          width: optionsSetup.lineWidthXLeft,
        },
      },
      // X轴刻度线
      axisTick: {
        show: optionsSetup.isShowAxisLineXLeft,
        lineStyle: {
          color: optionsSetup.lineColorXLeft,
          width: optionsSetup.lineWidthXLeft,
        },
      },
      splitLine: {
        // 分割线
        show: optionsSetup.isShowSplitLineXLeft,
        lineStyle: {
          color: optionsSetup.splitLineColorXLeft,
          width: optionsSetup.splitLineWidthXLeft,
          type: "solid",
        },
      },
    };
    if (xAxisLeft.max == null) {
      delete xAxisLeft.max;
    }
    this.options.xAxis[0] = xAxisLeft;
  },
  // 右X轴设置
  setOptionsXRight() {
    const optionsSetup = this.optionsSetup;
    const xAxisRight = {
      max: optionsSetup.maxXRight !== "" ? optionsSetup.maxXRight : null,
      gridIndex: 2,
      splitNumber: optionsSetup.splitNumberXRight,
      show: optionsSetup.isShowXRight,
      type: "value",
      position: "bottom",
      axisLabel: {
        // x轴
        show: optionsSetup.isShowAxisLabelXRight,
        textStyle: {
          color: optionsSetup.textColorXRight,
          fontSize: optionsSetup.textFontSizeXRight,
          fontWeight: optionsSetup.textFontWeightXRight,
          fontStyle: optionsSetup.textFontStyleXRight,
          fontFamily: optionsSetup.textFontFamilyXRight,
        },
      },
      axisLine: {
        //X轴线
        show: optionsSetup.isShowAxisLineXRight,
        lineStyle: {
          color: optionsSetup.lineColorXRight,
          width: optionsSetup.lineWidthXRight,
        },
      },
      axisTick: {
        show: optionsSetup.isShowAxisLineXRight,
        lineStyle: {
          color: optionsSetup.lineColorXRight,
          width: optionsSetup.lineWidthXRight,
        },
      },
      splitLine: {
        // 分割线
        show: optionsSetup.isShowSplitLineXRight,
        lineStyle: {
          color: optionsSetup.splitLineColorXRight,
          width: optionsSetup.splitLineWidthXRight,
          type: "solid",
        },
      },
    };
    this.options.xAxis[2] = xAxisRight;
  },
  // Y轴设置
  setOptionsY() {
    const optionsSetup = this.optionsSetup;
    const yAxis = {
      //处理轴数据
      gridIndex: 1,
      type: "category",
      inverse: true,
      show: true,
      axisLabel: {
        show: optionsSetup.isShowAxisLabelY,
        interval: optionsSetup.textIntervalY,
        textStyle: {
          align: "center",
          color: optionsSetup.textColorY,
          fontSize: optionsSetup.textFontSizeY,
          fontWeight: optionsSetup.textFontWeightY,
          fontStyle: optionsSetup.textFontStyleY,
          fontFamily: optionsSetup.textFontFamilyY,
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    };
    this.options.yAxis[1] = yAxis;
  },
  // 数值设定、柱体设置
  setOptionsTop() {
    const optionsSetup = this.optionsSetup;
    const series = this.options.series;
    series[0].label = {
      normal: {
        show: optionsSetup.isShow,
        position: "insideLeft",
        textStyle: {
          fontSize: optionsSetup.fontSize,
          color: optionsSetup.dataColor,
          fontWeight: optionsSetup.fontWeight,
        },
      },
      emphasis: {
        show: false,
      },
    };
    series[1].label = {
      normal: {
        show: optionsSetup.isShow,
        color: "red",
        position: "insideRight",
        textStyle: {
          fontSize: optionsSetup.fontSize,
          color: optionsSetup.dataColor,
          fontWeight: optionsSetup.fontWeight,
        },
      },
      emphasis: {
        show: false,
      },
    };
    for (const key in series) {
      series[key].barWidth = optionsSetup.maxWidth;
      //柱体背景属性
      series[key].showBackground = optionsSetup.isShowBackground;
      series[key].backgroundStyle = {
        color: optionsSetup.backgroundStyleColor,
        borderColor: optionsSetup.backgroundStyleBorderColor,
        borderWidth: optionsSetup.backgroundStyleBorderWidth,
        borderType: optionsSetup.backgroundStyleBorderType,
        shadowBlur: optionsSetup.backgroundStyleShadowBlur,
        shadowColor: optionsSetup.backgroundStyleShadowColor,
        opacity: optionsSetup.backgroundStyleOpacity / 100,
      };
    }
    this.options.series = series;
  },
  // 边距设置
  setOptionsGrid() {
    const optionsSetup = this.optionsSetup;
    const grid = [
      {
        //左
        show: optionsSetup.frameLineLeft,
        borderColor: optionsSetup.borderColorLeft,
        borderWidth: optionsSetup.borderWidthLeft,
        left: optionsSetup.marginLeftRight,
        top: optionsSetup.marginTop,
        bottom: optionsSetup.marginBottom,
        containLabel: true,
        width: "40%",
      },
      {
        //中间字体位置
        show: false,
        left: "51%",
        top: optionsSetup.marginTop,
        bottom: optionsSetup.marginBottom + 15,
        width: "0%",
      },
      {
        //右
        show: optionsSetup.frameLineRight,
        borderColor: optionsSetup.borderColorRight,
        borderWidth: optionsSetup.borderWidthRight,
        right: optionsSetup.marginLeftRight,
        top: optionsSetup.marginTop,
        bottom: optionsSetup.marginBottom,
        containLabel: true,
        width: "40%",
      },
    ];
    this.options.grid = grid;
  },
  // 颜色修改、圆角修改
  setOptionsColor() {
    const optionsSetup = this.optionsSetup;
    const customColor = optionsSetup.customColor;
    if (!customColor) return;
    const itemStyleLeft = {
      normal: {
        color: customColor[0].color,
        barBorderRadius: [optionsSetup.radius, 0, 0, optionsSetup.radius],
      },
      emphasis: {
        show: false,
      },
    };
    const itemStyleRight = {
      normal: {
        color: customColor[1].color,
        barBorderRadius: [0, optionsSetup.radius, optionsSetup.radius, 0],
      },
      emphasis: {
        show: false,
      },
    };
    this.options.series[0].itemStyle = itemStyleLeft;
    this.options.series[1].itemStyle = itemStyleRight;
  },
};

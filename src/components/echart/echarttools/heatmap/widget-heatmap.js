import {
  setWidgetConfigValue,
  setOptionsTitle,
  setOptionsTooltip,
} from "../comm.js";
export const widgetHeatmap = {
  title: {
    text: "",
    left: "center",
    textStyle: {
      color: "#fff",
    },
  },
  tooltip: {
    position: "top",
    show: true,
    textStyle: {},
  },
  grid: {
    height: "90%",
    width: "90%",
    top: 10,
    left: 20,
  },
  xAxis: {
    name: "",
    type: "category",
    axisLabel: {
      show: true,
      color: "#0f0",
    },
    data: [],
    splitArea: {
      show: false,
    },
    nameTextStyle: {
      color: "",
      fontSize: 14,
    },
  },
  yAxis: {
    name: "",
    type: "category",
    axisLabel: {
      show: true,
      color: "#0f0",
    },
    data: [],
    splitArea: {
      show: false,
    },
    nameTextStyle: {
      color: "",
      fontSize: 14,
    },
  },
  visualMap: {
    show: true,
    min: 0,
    max: 5000,
    calculable: true,
    orient: "horizontal",
    left: "center",
    bottom: 0,
    inRange: {
      color: [],
    },
    textStyle: {
      fontSize: 14,
      color: "#fff",
    },
  },
  series: [
    {
      name: "",
      type: "heatmap",
      data: [],
      label: {
        show: false,
        fontSize: 16,
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

export const widgetHeatmapAnalysisfun = {
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
    this.setOptionsX();
    this.setOptionsY();
    this.setOptionsSeries();
    this.setOptionsMargin();
    this.setOptionsVisualMap();
    this.staticDataFn();
    return this.options;
  },
  // X轴设置
  setOptionsX() {
    const optionsSetup = this.optionsSetup;
    const xAxis = {
      type: "category",
      // 坐标轴是否显示
      show: optionsSetup.isShowX,
      position: optionsSetup.positionX,
      offset: optionsSetup.offsetX,
      // 坐标轴名称
      name: optionsSetup.nameX,
      nameLocation: optionsSetup.nameLocationX,
      nameTextStyle: {
        color: optionsSetup.nameColorX,
        fontSize: optionsSetup.nameFontSizeX,
        fontWeight: optionsSetup.nameFontWeightX,
        fontStyle: optionsSetup.nameFontStyleX,
        fontFamily: optionsSetup.nameFontFamilyX,
      },
      // 轴反转
      inverse: optionsSetup.reversalX,
      axisLabel: {
        show: optionsSetup.isShowAxisLabelX,
        interval: optionsSetup.textIntervalX,
        // 文字角度
        rotate: optionsSetup.textAngleX,
        textStyle: {
          // 坐标文字颜色
          color: optionsSetup.textColorX,
          fontSize: optionsSetup.textFontSizeX,
          fontWeight: optionsSetup.textFontWeightX,
          fontStyle: optionsSetup.textFontStyleX,
          fontFamily: optionsSetup.textFontFamilyX,
        },
      },
      // X轴线
      axisLine: {
        show: optionsSetup.isShowAxisLineX,
        lineStyle: {
          color: optionsSetup.lineColorX,
          width: optionsSetup.lineWidthX,
        },
      },
      // X轴刻度线
      axisTick: {
        show: optionsSetup.isShowAxisLineX,
        lineStyle: {
          color: optionsSetup.lineColorX,
          width: optionsSetup.lineWidthX,
        },
      },
      // X轴分割线
      splitLine: {
        show: optionsSetup.isShowSplitLineX,
        lineStyle: {
          color: optionsSetup.splitLineColorX,
          width: optionsSetup.splitLineWidthX,
        },
      },
    };
    this.options.xAxis = xAxis;
  }, //去重
  setUnique(arr) {
    let newArr = [];
    arr.forEach((item) => {
      return newArr.includes(item) ? "" : newArr.push(item);
    });
    return newArr;
  },
  staticDataFn() {
    let val = this.val;
    const data = [];
    let xAxisList = [];
    let yAxisList = [];
    for (const i in val) {
      xAxisList[i] = val[i].axis;
      yAxisList[i] = val[i].yaxis;
      data[i] = [val[i].axis, val[i].yaxis, val[i].num];
    }
    xAxisList = this.setUnique(xAxisList);
    yAxisList = this.setUnique(yAxisList);
    this.options.xAxis.data = xAxisList;
    this.options.yAxis.data = yAxisList;
    this.options.series[0].data = data;
  },
  // Y轴设置
  setOptionsY() {
    const optionsSetup = this.optionsSetup;
    const yAxis = {
      max: optionsSetup.maxY !== "" ? optionsSetup.maxY : null,
      type: "category",
      scale: optionsSetup.scale,
      // 均分
      splitNumber: optionsSetup.splitNumberY,
      // 坐标轴是否显示
      show: optionsSetup.isShowY,
      position: optionsSetup.positionY,
      offset: optionsSetup.offsetY,
      // 坐标轴名称
      name: optionsSetup.textNameY,
      nameLocation: optionsSetup.nameLocationY,
      nameTextStyle: {
        color: optionsSetup.nameColorY,
        fontSize: optionsSetup.nameFontSizeY,
        fontWeight: optionsSetup.nameFontWeightY,
        fontStyle: optionsSetup.nameFontStyleY,
        fontFamily: optionsSetup.nameFontFamilyY,
      },
      // 轴反转
      inverse: optionsSetup.reversalY,
      axisLabel: {
        show: optionsSetup.isShowAxisLabelY,
        // 文字角度
        rotate: optionsSetup.textAngleY,
        //interval: optionsSetup.textIntervalY,
        textStyle: {
          // 坐标文字颜色
          color: optionsSetup.textColorY,
          fontSize: optionsSetup.textFontSizeY,
          fontWeight: optionsSetup.textFontWeightY,
          fontStyle: optionsSetup.textFontStyleY,
          fontFamily: optionsSetup.textFontFamilyY,
        },
      },
      axisLine: {
        show: optionsSetup.isShowAxisLineY,
        lineStyle: {
          color: optionsSetup.lineColorY,
          width: optionsSetup.lineWidthY,
        },
      },
      axisTick: {
        show: optionsSetup.isShowAxisLineY,
        lineStyle: {
          color: optionsSetup.lineColorY,
          width: optionsSetup.lineWidthY,
        },
      },
      splitLine: {
        show: optionsSetup.isShowSplitLineY,
        lineStyle: {
          color: optionsSetup.splitLineColorY,
          width: optionsSetup.splitLineWidthY,
        },
      },
    };
    this.options.yAxis = yAxis;
  },
  // 数值设定
  setOptionsSeries() {
    const optionsSetup = this.optionsSetup;
    const label = {
      show: optionsSetup.isShow,
      position: optionsSetup.fontPosition,
      distance: optionsSetup.fontDistance,
      fontSize: optionsSetup.fontSize,
      color: optionsSetup.fontColor,
      fontWeight: optionsSetup.fontWeight,
      fontStyle: optionsSetup.fontStyle,
      fontFamily: optionsSetup.fontFamily,
    };
    this.options.series[0].label = label;
  },
  // 边距设置
  setOptionsMargin() {
    const optionsSetup = this.optionsSetup;
    const grid = {
      left: optionsSetup.marginLeft,
      right: optionsSetup.marginRight,
      bottom: optionsSetup.marginBottom,
      top: optionsSetup.marginTop,
      containLabel: true,
    };
    this.options.grid = grid;
  }, // 图设置
  setOptionsVisualMap() {
    const optionsSetup = this.optionsSetup;
    const visualMap = {
      show: optionsSetup.isShowLegend,
      type: optionsSetup.visualMapType,
      min: optionsSetup.dataMin,
      max: optionsSetup.dataMax,
      calculable: true,
      inRange: {
        color: optionsSetup.legendColorList.map((x) => {
          return x.color;
        }),
      },
      left: optionsSetup.lateralPosition,
      top: optionsSetup.longitudinalPosition,
      bottom: optionsSetup.longitudinalPosition,
      orient: optionsSetup.layoutFront,
      textStyle: {
        color: optionsSetup.legendColor,
        fontSize: optionsSetup.legendFontSize,
        fontWeight: optionsSetup.legendFontWeight,
        fontStyle: optionsSetup.legendFontStyle,
        fontFamily: optionsSetup.legendFontFamily,
      },
      itemHeight: optionsSetup.legendHeight,
      itemWidth: optionsSetup.legendWidth,
    };
    this.options.visualMap = visualMap;
  },
};

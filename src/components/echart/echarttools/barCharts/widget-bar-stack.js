import {
  setOptionsTitle,
  setOptionsTooltip,
  setOptionsLegend,
} from "../comm.js";
export const widgetBarStack = {
  grid: {},
  legend: {
    textStyle: {
      color: "#fff",
    },
  },
  xAxis: {
    type: "category",
    data: [],
    axisLabel: {
      show: true,
      textStyle: {
        color: "#fff",
      },
    },
  },
  yAxis: {
    type: "value",
    data: [],
    axisLabel: {
      show: true,
      textStyle: {
        color: "#fff",
      },
    },
  },
  series: [
    {
      data: [],
      name: "",
      type: "bar",
      barGap: "0%",
      itemStyle: {},
    },
  ],
};
export const widgetBarStackAnalysisfun = {
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
    this.setOptionsX();
    this.setOptionsY();
    this.setOptionsMargin();
    this.staticDataFn();
    return this.options;
  },
  //去重
  setUnique(arr) {
    let newArr = [];
    arr.forEach((item) => {
      return newArr.includes(item) ? "" : newArr.push(item);
    });
    return newArr;
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
      axisLine: {
        show: optionsSetup.isShowAxisLineX,
        lineStyle: {
          color: optionsSetup.lineColorX,
          width: optionsSetup.lineWidthX,
        },
      },
      axisTick: {
        show: optionsSetup.isShowAxisLineX,
        lineStyle: {
          color: optionsSetup.lineColorX,
          width: optionsSetup.lineWidthX,
        },
      },
      splitLine: {
        show: optionsSetup.isShowSplitLineX,
        lineStyle: {
          color: optionsSetup.splitLineColorX,
          width: optionsSetup.splitLineWidthX,
        },
      },
    };
    this.options.xAxis = xAxis;
  },
  // Y轴设置
  setOptionsY() {
    const optionsSetup = this.optionsSetup;
    const yAxis = {
      max: optionsSetup.maxY !== "" ? optionsSetup.maxY : null,
      type: "value",
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
    if (yAxis.max == null) {
      delete yAxis.max;
    }
    this.options.yAxis = yAxis;
  }, // 边距设置
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
  },
  //静态数据
  staticDataFn() {
    let val = this.val;
    const optionsSetup = this.optionsSetup;
    //颜色
    const customColor = optionsSetup.customColor;
    const arrColor = [];
    for (let i = 0; i < customColor.length; i++) {
      arrColor.push(customColor[i].color);
    }
    //数据
    const series = [];
    let xAxisList = [];
    let yAxisList = [];
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
      series.push({
        name: yAxisList[i],
        type: "bar",
        data: data,
        barGap: optionsSetup.barGap + "%",
        barMinHeight: optionsSetup.minHeight,
        stack: this.getStackStyle(),
        barWidth: optionsSetup.maxWidth,
        label: {
          show: optionsSetup.isShow,
          position: optionsSetup.fontPosition,
          distance: optionsSetup.fontDistance,
          fontSize: optionsSetup.fontSize,
          color: optionsSetup.fontColor,
          fontWeight: optionsSetup.fontWeight,
          formatter: !!optionsSetup.percentSign ? "{c}%" : "{c}",
          fontStyle: optionsSetup.fontStyle,
          fontFamily: optionsSetup.fontFamily,
        },
        //颜色，圆角属性
        itemStyle: {
          normal: {
            color: arrColor[i],
            barBorderRadius: optionsSetup.radius,
          },
        },
        //柱体背景属性
        showBackground: optionsSetup.isShowBackground,
        backgroundStyle: {
          color: optionsSetup.backgroundStyleColor,
          borderColor: optionsSetup.backgroundStyleBorderColor,
          borderWidth: optionsSetup.backgroundStyleBorderWidth,
          borderType: optionsSetup.backgroundStyleBorderType,
          shadowBlur: optionsSetup.backgroundStyleShadowBlur,
          shadowColor: optionsSetup.backgroundStyleShadowColor,
          opacity: optionsSetup.backgroundStyleOpacity / 100,
        },
      });
      legendName.push(yAxisList[i]);
    }
    this.options.series = series;
    // 根据图表的宽度 x轴的字体大小、长度来估算X轴的label能展示多少个字
    const rowsNum =
      optionsSetup.textRowsNum !== ""
        ? optionsSetup.textRowsNum
        : parseInt(
            this.optionsStyle.width /
              xAxisList.length /
              optionsSetup.textFontSizeX
          );
    const axisLabel = {
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
      // 自动换行
      formatter: function(value, index) {
        const strs = value.split("");
        let str = "";
        for (let i = 0, s; (s = strs[i++]); ) {
          str += s;
          if (!(i % rowsNum)) str += "\n";
        }
        return str;
      },
    };
    if (optionsSetup.verticalShow) {
      this.options.xAxis.data = [];
      this.options.yAxis.data = xAxisList;
      this.options.xAxis.type = "value";
      this.options.yAxis.type = "category";
    } else {
      this.options.xAxis.data = xAxisList;
      this.options.yAxis.data = [];
      this.options.xAxis.type = "category";
      this.options.yAxis.type = "value";
      if (optionsSetup.textRowsBreakAuto) {
        this.options.xAxis.axisLabel = axisLabel;
      }
    }
    this.options.legend["data"] = legendName;
    this.setOptionsLegendName(legendName);
  }, //获取堆叠样式
  getStackStyle() {
    const optionsSetup = this.optionsSetup;
    let style = "";
    if (optionsSetup.stackStyle == "upDown") {
      style = "total";
    }
    return style;
  }, // 图例名称设置
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
};

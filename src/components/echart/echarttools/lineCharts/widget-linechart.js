import {
  setWidgetConfigValue,
  setOptionsLegend,
  setOptionsTitle,
  setOptionsTooltip,
} from "../comm.js";
export const widgetLinechart = {
  grid: {},
  color: [],
  title: {
    text: "",
    textStyle: {
      color: "#fff",
    },
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c}%",
  },
  legend: {
    textStyle: {
      color: "#fff",
    },
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLabel: {
      show: true,
      textStyle: {
        color: "#fff",
      },
    },
  },
  yAxis: {
    type: "value",
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
      type: "line",
    },
  ],
};

export const widgetLinechartAnalysisfun = {
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
    // this.setOptionsTitle();
    this.setOptionsX();
    this.setOptionsY();
    // this.setOptionsLegend();
    // this.setOptionsTooltip();
    // this.setOptionsData();
    this.staticDataFn();
    this.setOptionsMargin();

    return this.options;
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
  staticDataFn() {
    let val = this.val;
    const optionsSetup = this.optionsSetup;
    //颜色
    const customColor = optionsSetup.customColor;
    const arrColor = [];
    for (let i = 0; i < customColor.length; i++) {
      arrColor.push(customColor[i].color);
    }
    const series = this.options.series;
    let axis = [];
    let data = [];
    for (const i in val) {
      axis[i] = val[i].axis;
      data[i] = val[i].data;
    }
    const legendName = [];
    legendName.push("line");
    // x轴
    this.options.xAxis.data = axis;
    // series
    for (const i in series) {
      if (series[i].type == "line") {
        series[i].symbol = optionsSetup.symbol;
        series[i].showSymbol = optionsSetup.markPoint;
        series[i].symbolSize = optionsSetup.pointSize;
        series[i].smooth = optionsSetup.smoothCurve;
        if (optionsSetup.area) {
          series[i].areaStyle = {
            opacity: optionsSetup.areaThickness / 100,
          };
        } else {
          series[i].areaStyle = {
            opacity: 0,
          };
        }
        series[i].itemStyle = {
          normal: {
            color: arrColor[i],
          },
        };
        series[i].lineStyle = {
          color: arrColor[i],
          width: optionsSetup.lineWidth,
        };
        series[i].label = {
          show: optionsSetup.isShow,
          position: optionsSetup.fontPosition,
          distance: optionsSetup.fontDistance,
          fontSize: optionsSetup.fontSize,
          color: optionsSetup.fontColor,
          fontWeight: optionsSetup.fontWeight,
          formatter: !!optionsSetup.percentSign ? "{c}%" : "{c}",
          fontStyle: optionsSetup.fontStyle,
          fontFamily: optionsSetup.fontFamily,
        };
        series[i].data = data;
      }
    }
    // 根据图表的宽度 x轴的字体大小、长度来估算X轴的label能展示多少个字
    const rowsNum =
      optionsSetup.textRowsNum !== ""
        ? optionsSetup.textRowsNum
        : parseInt(
            this.optionsStyle.width / axis.length / optionsSetup.textFontSizeX
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
    if (optionsSetup.textRowsBreakAuto) {
      this.options.xAxis.axisLabel = axisLabel;
    }
    this.options.legend["data"] = legendName;
    this.setOptionsLegendName(legendName);
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
    this.options.yAxis = yAxis;
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
  },
};

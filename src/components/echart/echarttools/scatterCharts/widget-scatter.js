import {
  setWidgetConfigValue,
  setOptionsTitle,
  setOptionsTooltip,
  setOptionsLegend,
} from "../comm.js";
export const widgetScatter = {
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
      symbolSize: 10,
      type: "scatter",
    },
  ],
};
export const widgetScatterAnalysisfun = {
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
    // this.setOptionsData();
    return this.options;
  },
  // 图例名称设置
  setOptionsLegendName(name) {
    const optionsSetup = this.optionsSetup;
    const series = this.options.series;
    const legendName = optionsSetup.legendName;
    if (series.length == 0) {
      return;
    }
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
  }, // 获得位置
  getOptionsPosition() {
    const optionsSetup = this.optionsSetup;
    let position = "";
    if (optionsSetup.verticalShow) {
      position = "right";
    } else {
      position = "top";
    }
    return position;
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
    legendName.push("scatter");
    for (const i in series) {
      if (series[i].type === "scatter") {
        series[i].type = "scatter";
        series[i].symbol = optionsSetup.symbol;
        series[i].symbolSize = optionsSetup.pointSize;
        series[i].label = {
          show: optionsSetup.isShow,
          position: optionsSetup.fontPosition,
          distance: optionsSetup.fontDistance,
          fontSize: optionsSetup.fontSize,
          color:
            optionsSetup.dataColor === "" ? "inherit" : optionsSetup.dataColor,
          fontWeight: optionsSetup.fontWeight,
          formatter: !!optionsSetup.percentSign ? "{c}%" : "{c}",
          fontStyle: optionsSetup.fontStyle,
          fontFamily: optionsSetup.fontFamily,
        };
        // 获取颜色样式
        if (optionsSetup.colorStyle === "same") {
          series[i].itemStyle = {
            normal: {
              color: arrColor[i],
            },
          };
        } else {
          series[i].itemStyle = {
            normal: {
              color: (params) => {
                return arrColor[params.dataIndex];
              },
            },
          };
        }
        //柱体背景属性
        series[i].showBackground = optionsSetup.isShowBackground;
        series[i].backgroundStyle = {
          color: optionsSetup.backgroundStyleColor,
          borderColor: optionsSetup.backgroundStyleBorderColor,
          borderWidth: optionsSetup.backgroundStyleBorderWidth,
          borderType: optionsSetup.backgroundStyleBorderType,
          shadowBlur: optionsSetup.backgroundStyleShadowBlur,
          shadowColor: optionsSetup.backgroundStyleShadowColor,
          opacity: optionsSetup.backgroundStyleOpacity / 100,
        };
        series[i].data = data;
      }
    }
    // 根据图表的宽度 x轴的字体大小、长度来估算X轴的label能展示多少个字
    const rowsNum =
      optionsSetup.textRowsNum !== ""
        ? optionsSetup.textRowsNum
        : parseInt(
            this.optionsStyle.width / axis.length / optionsSetup.fontSizeX
          );
    const axisLabel = {
      show: true,
      interval: optionsSetup.textInterval,
      // 文字角度
      rotate: optionsSetup.textAngleX,
      textStyle: {
        // 坐标文字颜色
        color: optionsSetup.colorX,
        fontSize: optionsSetup.fontSizeX,
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
    // x轴
    this.options.xAxis.data = axis;
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
      show: optionsSetup.hideX,
      // 坐标轴名称
      name: optionsSetup.nameX,
      nameTextStyle: {
        color: optionsSetup.nameColorX,
        fontSize: optionsSetup.nameFontSizeX,
      },
      // 轴反转
      inverse: optionsSetup.reversalX,
      axisLabel: {
        show: true,
        interval: optionsSetup.textInterval,
        // 文字角度
        rotate: optionsSetup.textAngleX,
        textStyle: {
          // 坐标文字颜色
          color: optionsSetup.colorX,
          fontSize: optionsSetup.fontSizeX,
        },
      },
      axisLine: {
        show: true,
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
      // 坐标轴名称
      name: optionsSetup.textNameY,
      nameTextStyle: {
        color: optionsSetup.nameColorY,
        fontSize: optionsSetup.nameFontSizeY,
      },
      // 轴反转
      inverse: optionsSetup.reversalY,
      axisLabel: {
        show: true,
        // 文字角度
        rotate: optionsSetup.textAngleY,
        textStyle: {
          // 坐标文字颜色
          color: optionsSetup.colorY,
          fontSize: optionsSetup.fontSizeY,
        },
      },
      axisLine: {
        show: true,
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
};

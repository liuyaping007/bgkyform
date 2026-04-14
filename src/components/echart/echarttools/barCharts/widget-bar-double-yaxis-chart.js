import {
  setOptionsLegend,
  setOptionsTitle,
  setOptionsTooltip,
  setOptionsX,
  setOptionsMargin,
} from "../comm.js";
export const widgetBarDoubleYaxis = {
  color: [],
  grid: {},
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
  xAxis: [
    {
      type: "category",
      data: [],
      axisLabel: {
        show: false,
        textStyle: {
          color: "#fff",
        },
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "",
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        show: true,
        textStyle: {
          color: "#fff",
        },
      },
    },
    {
      type: "value",
      name: "",
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        show: true,
        textStyle: {
          color: "#fff",
        },
      },
    },
  ],
  series: [
    {
      name: "",
      type: "bar",
      yAxisIndex: 0,
      data: [],
      itemStyle: {
        // barBorderRadius: null,
      },
    },
    {
      name: "",
      type: "bar",
      yAxisIndex: 1,
      data: [],
      itemStyle: {},
    },
  ],
};

export const widgetBarDoubleYaxisAnalysisfun = {
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
    this.options.xAxis = setOptionsX(this.optionsSetup);
    this.setOptionsY();
    this.setOptionsBar();
    this.options.grid = setOptionsMargin(optionsSetup);
    this.setOptionsColor();
    this.staticDataFn();
    return this.options;
  },
  // Y轴设置
  setOptionsY() {
    const optionsSetup = this.optionsSetup;
    const yAxis = [
      {
        max: optionsSetup.maxYLeft !== "" ? optionsSetup.maxYLeft : null,
        type: "value",
        scale: optionsSetup.scaleYLeft,
        // 均分
        splitNumber: optionsSetup.splitNumberYLeft,
        // 坐标轴是否显示
        show: optionsSetup.isShowYLeft,
        position: optionsSetup.positionYLeft,
        offset: optionsSetup.offsetYLeft,
        // 坐标轴名称
        name: optionsSetup.textNameYLeft,
        nameLocation: optionsSetup.nameLocationYLeft,
        // 别名
        nameTextStyle: {
          color: optionsSetup.nameColorYLeft,
          fontSize: optionsSetup.nameFontSizeYLeft,
          fontWeight: optionsSetup.nameFontWeightYLeft,
          fontStyle: optionsSetup.nameFontStyleYLeft,
          fontFamily: optionsSetup.nameFontFamilyYLeft,
        },
        axisLabel: {
          show: optionsSetup.isShowAxisLabelYLeft,
          // 文字角度
          rotate: optionsSetup.textAngleYLeft,
          textStyle: {
            // 坐标文字颜色
            color: optionsSetup.textColorYLeft,
            fontSize: optionsSetup.textFontSizeYLeft,
            fontWeight: optionsSetup.textFontWeightYLeft,
            fontStyle: optionsSetup.textFontStyleYLeft,
            fontFamily: optionsSetup.textFontFamilyYLeft,
          },
        },
        axisLine: {
          show: optionsSetup.isShowAxisLineYLeft,
          lineStyle: {
            width: optionsSetup.lineWidthYLeft,
            color: optionsSetup.lineColorYLeft,
          },
        },
        axisTick: {
          // 刻度
          show: optionsSetup.isShowAxisLineYLeft,
          lineStyle: {
            width: optionsSetup.lineWidthYLeft,
            color: optionsSetup.lineColorYLeft,
          },
        },
        splitLine: {
          show: optionsSetup.isShowSplitLineYLeft,
          lineStyle: {
            color: optionsSetup.splitLineColorYLeft,
            width: optionsSetup.splitLineFontWidthYLeft,
          },
        },
      },
      {
        max: optionsSetup.maxYRight !== "" ? optionsSetup.maxYRight : null,
        type: "value",
        scale: optionsSetup.scaleYRight,
        // 均分
        splitNumber: optionsSetup.splitNumberYRight,
        // 坐标轴是否显示
        show: optionsSetup.isShowYRight,
        position: optionsSetup.positionYRight,
        offset: optionsSetup.offsetYRight,
        // 坐标轴名称
        name: optionsSetup.textNameYRight,
        nameLocation: optionsSetup.nameLocationYRight,
        // 别名
        nameTextStyle: {
          color: optionsSetup.nameColorYRight,
          fontSize: optionsSetup.nameFontSizeYRight,
          fontWeight: optionsSetup.nameFontWeightYRight,
          fontStyle: optionsSetup.nameFontStyleYRight,
          fontFamily: optionsSetup.nameFontFamilyYRight,
        },
        axisLabel: {
          show: optionsSetup.isShowAxisLabelYRight,
          // 文字角度
          rotate: optionsSetup.textAngleYRight,
          textStyle: {
            // 坐标文字颜色
            color: optionsSetup.textColorYRight,
            fontSize: optionsSetup.textFontSizeYRight,
            fontWeight: optionsSetup.textFontWeightYRight,
            fontStyle: optionsSetup.textFontStyleYRight,
            fontFamily: optionsSetup.textFontFamilyYRight,
          },
        },
        axisLine: {
          show: optionsSetup.isShowAxisLineYRight,
          lineStyle: {
            width: optionsSetup.lineWidthYRight,
            color: optionsSetup.lineColorYRight,
          },
        },
        axisTick: {
          // 刻度
          show: optionsSetup.isShowAxisLineYRight,
          lineStyle: {
            width: optionsSetup.lineWidthYRight,
            color: optionsSetup.lineColorYRight,
          },
        },
        splitLine: {
          show: optionsSetup.isShowSplitLineYRight,
          lineStyle: {
            color: optionsSetup.splitLineColorYRight,
            width: optionsSetup.splitLineFontWidthYRight,
          },
        },
      },
    ];
    if (yAxis.max == null) {
      delete yAxis.max;
    }
    this.options.yAxis = yAxis;
  },
  // 柱体设置 数值设置
  setOptionsBar() {
    const optionsSetup = this.optionsSetup;
    const series = this.options.series;
    for (const key in series) {
      if (series[key].type == "bar") {
        series[key].barGap = optionsSetup.barGap + "%";
        series[key].label = {
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
        series[key].barWidth = optionsSetup.maxWidth;
        series[key].barMinHeight = optionsSetup.minHeight;
        series[key].itemStyle.barBorderRadius = optionsSetup.radius;
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
    }
    this.options.series = series;
  },
  // 图例颜色修改
  setOptionsColor() {
    const optionsSetup = this.optionsSetup;
    const customColor = optionsSetup.customColor;
    if (!customColor) return;
    const arrColor = [];
    for (let i = 0; i < customColor.length; i++) {
      arrColor.push(customColor[i].color);
    }
    this.options.color = arrColor;
    this.options = Object.assign({}, this.options);
  },
  staticDataFn() {
    let val = this.val;
    const optionsSetup = this.optionsSetup;
    const series = this.options.series;
    let axis = [];
    let bar1 = [];
    let bar2 = [];
    for (const i in val) {
      axis[i] = val[i].axis;
      bar1[i] = val[i].bar1;
      bar2[i] = val[i].bar2;
    }
    // x轴
    this.options.xAxis.data = axis;
    // series
    series[0].data = bar1;
    series[1].data = bar2;

    const legendName = [];
    legendName.push("bar1");
    legendName.push("bar2");
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

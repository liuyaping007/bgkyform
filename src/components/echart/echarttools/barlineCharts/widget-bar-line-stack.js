import {
  setWidgetConfigValue,
  setOptionsTitle,
  setOptionsTooltip,
  setOptionsLegend,
} from "../comm.js";
export const widgetBarLineStack = {
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
  yAxis: [
    {
      type: "value",
      axisLine: {
        show: true,
        lineStyle: {
          color: "#cdd5e2",
        },
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#666666",
        },
      },
    },
    {
      type: "value",
      nameTextStyle: {
        color: "#666666",
      },
      axisLine: {
        lineStyle: {
          color: "#cdd5e2",
        },
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#666666",
        },
      },
    },
  ],
  series: [
    {
      data: [],
      name: "",
      type: "bar",
      barGap: "0%",
      itemStyle: {
        barBorderRadius: null,
      },
    },
    {
      data: [],
      name: "",
      type: "line",
      itemStyle: {},
    },
  ],
};

export const widgetBarLineStackAnalysisfun = {
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
  //获取堆叠样式
  getStackStyle() {
    const optionsSetup = this.optionsSetup;
    let style = "";
    if (optionsSetup.stackStyle == "upDown") {
      style = "total";
    }
    return style;
  },
  //去重
  setUnique(arr) {
    let newArr = [];
    arr.forEach((item) => {
      return newArr.includes(item) ? "" : newArr.push(item);
    });
    return newArr;
  },
  getStaticSeriesData(xAxisList, yAxis, data, type) {
    const typeData = new Array(xAxisList.length).fill(0);
    for (const i in xAxisList) {
      for (const j in data) {
        if (data[j].name == yAxis && data[j].axis == xAxisList[i]) {
          typeData[i] = data[j][type];
        }
      }
    }
    return typeData;
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
    for (const i in val) {
      xAxisList[i] = val[i].axis;
      yAxisList[i] = val[i].name;
    }
    xAxisList = this.setUnique(xAxisList);
    yAxisList = this.setUnique(yAxisList);
    const legendName = yAxisList;
    for (let i = 0; i < yAxisList.length; i++) {
      const bar = this.getStaticSeriesData(xAxisList, yAxisList[i], val, "bar");
      series.push({
        name: yAxisList[i],
        type: "bar",
        data: bar,
        barGap: optionsSetup.barGap + "%",
        barMinHeight: optionsSetup.minHeight,
        stack: this.getStackStyle(),
        barWidth: optionsSetup.maxWidth,
        label: {
          show: optionsSetup.isShowBar,
          position: optionsSetup.fontPositionBar,
          distance: optionsSetup.fontDistanceBar,
          fontSize: optionsSetup.fontSizeBar,
          color: optionsSetup.fontColorBar,
          fontWeight: optionsSetup.fontWeightBar,
          formatter: !!optionsSetup.percentSignBar ? "{c}%" : "{c}",
          fontStyle: optionsSetup.fontStyleBar,
          fontFamily: optionsSetup.fontFamilyBar,
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
    }
    for (let i = 0; i < yAxisList.length; i++) {
      const line = this.getStaticSeriesData(
        xAxisList,
        yAxisList[i],
        val,
        "line"
      );
      series.push({
        name: yAxisList[i],
        type: "line",
        data: line,
        yAxisIndex: 1,
        symbol: optionsSetup.symbol,
        showSymbol: optionsSetup.markPoint,
        symbolSize: optionsSetup.pointSize,
        smooth: optionsSetup.smoothCurve,
        itemStyle: {
          normal: {
            color: arrColor[i],
          },
        },
        // 线条
        lineStyle: {
          color: arrColor[i],
          width: optionsSetup.lineWidth,
        },
        areaStyle: {
          opacity: optionsSetup.area ? optionsSetup.areaThickness / 100 : 0,
        },
        label: {
          show: optionsSetup.isShowLine,
          position: optionsSetup.fontPositionLine,
          distance: optionsSetup.fontDistanceLine,
          fontSize: optionsSetup.fontSizeLine,
          color: optionsSetup.fontColorLine,
          fontWeight: optionsSetup.fontWeightLine,
          formatter: !!optionsSetup.percentSignLine ? "{c}%" : "{c}",
          fontStyle: optionsSetup.fontStyleLine,
          fontFamily: optionsSetup.fontFamilyLine,
        },
      });
    }
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
    if (optionsSetup.textRowsBreakAuto) {
      this.options.xAxis.axisLabel = axisLabel;
    }
    this.options.series = series;
    this.options.xAxis.data = xAxisList;
    this.options.yAxis.data = [];
    this.options.xAxis.type = "category";
    this.options.yAxis.type = "value";
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

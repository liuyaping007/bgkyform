import {
  setWidgetConfigValue,
  setOptionsTitle,
  setOptionsTooltip,
  setOptionsLegend,
} from "../comm.js";
export const widgetPieNightingale = {
  legend: {
    top: "bottom",
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
    },
  },
  series: [
    {
      //name: "面积模式",
      type: "pie",
      radius: ["10%", "50%"],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8,
      },
      data: [],
    },
  ],
};

export const widgetPieNightingaleAnalysisfun = {
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
    this.setOptionsColor();
    this.staticDataFn();
    // this.setOptionsData();
    return this.options;
  },
  staticDataFn() {
    let val = this.val;
    const staticData = typeof val == "string" ? JSON.parse(val) : val;
    const optionsSetup = this.optionsSetup;
    const numberValue = optionsSetup.numberValue ? "\n{c}" : "";
    const percentage = optionsSetup.percentage ? "\n({d}%)" : "";
    const series = {
      type: "pie",
      center: ["50%", "50%"],
      left: optionsSetup.left,
      top: optionsSetup.top,
      right: optionsSetup.right,
      bottom: optionsSetup.bottom,
      // 饼图模式 面积模式"area" 半径模式"radius"//name: "面积模式",
      roseType: optionsSetup.nightingaleRoseType,
      radius: [optionsSetup.innerNumber + "%", optionsSetup.outerNumber + "%"],
      clockwise: optionsSetup.clockwise,
      startAngle: optionsSetup.startAngle,
      minAngle: optionsSetup.minAngle,
      minShowLabelAngle: optionsSetup.minShowLabelAngle,
      percentPrecision: optionsSetup.percentPrecision,
      // echarts v5.0.0开始支持
      /*        itemStyle: {
                  borderRadius: [optionsSetup.borderRadius + "%", optionsSetup.borderRadius + "%"],
                },*/
      // 高亮的扇区
      emphasis: {
        label: {
          show: optionsSetup.isShowEmphasisLabel,
          color:
            optionsSetup.emphasisLabelFontColor == ""
              ? null
              : optionsSetup.EmphasisLabelFontColor,
          fontSize: optionsSetup.emphasisLabelFontSize,
          fontWeight: optionsSetup.emphasisLabelFontWeight,
          fontStyle: optionsSetup.emphasisLabelFontStyle,
          fontFamily: optionsSetup.emphasisLabelFontFamily,
        },
        // 视觉引导线
        labelLine: {
          show: false,
        },
        // 色块描边
        itemStyle: {
          borderColor:
            optionsSetup.borderColor == "" ? null : optionsSetup.borderColor,
          borderWidth: optionsSetup.borderWidth,
          borderType: optionsSetup.borderType,
          shadowBlur: optionsSetup.shadowBlur,
          shadowColor: optionsSetup.shadowColor,
        },
      },
      label: {
        show: optionsSetup.isShow,
        position: optionsSetup.position,
        rotate: optionsSetup.rotate,
        formatter: `{b}${numberValue}${percentage}`,
        padding: optionsSetup.padding,
        fontSize: optionsSetup.fontSize,
        color: optionsSetup.fontColor == "" ? null : optionsSetup.fontColor,
        fontWeight: optionsSetup.fontWeight,
        fontStyle: optionsSetup.fontStyle,
        fontFamily: optionsSetup.fontFamily,
      },
      // 引导线
      labelLine: {
        show: optionsSetup.isShowLabelLine,
        length: optionsSetup.labelLineLength,
        length2: optionsSetup.labelLineLength2,
        smooth: optionsSetup.labelLineSmooth,
        lineStyle: {
          color:
            optionsSetup.lineStyleColor == ""
              ? null
              : optionsSetup.lineStyleColor,
          width: optionsSetup.lineStyleWidth,
          type: optionsSetup.lineStyleType,
        },
      },
      data: staticData,
    };
    this.options.series[0] = series;
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
};

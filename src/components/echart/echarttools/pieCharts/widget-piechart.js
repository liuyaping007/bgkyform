import {
  setWidgetConfigValue,
  setOptionsTooltip,
  setOptionsLegend,
} from "../comm.js";
export const widgetPiechart = {
  title: {
    text: "",
    left: "center",
    textStyle: {
      color: "#fff",
    },
  },
  legend: {
    orient: "vertical",
    left: "left",
    textStyle: {
      color: "#fff",
    },
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
export const widgetPiechartAnalysisfun = {
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
    this.setOptionsTitle();
    this.options.tooltip = setOptionsTooltip(this.optionsSetup);
    this.options.legend = setOptionsLegend(this.optionsSetup);
    this.setOptionsColor();
    this.staticDataFn();
    return this.options;
  },
  // 标题设置
  setOptionsTitle() {
    const optionsSetup = this.optionsSetup;
    const title = {
      text: optionsSetup.text,
      show: optionsSetup.isShowTitle,
      left: optionsSetup.titleLeft,
      top: optionsSetup.titleTop + "%",
      itemGap: optionsSetup.titleItemGap,
      textStyle: {
        color: optionsSetup.textColor,
        fontSize: optionsSetup.textFontSize,
        fontWeight: optionsSetup.textFontWeight,
        fontStyle: optionsSetup.textFontStyle,
        fontFamily: optionsSetup.textFontFamily,
      },
      subtext: optionsSetup.subtext,
      subtextStyle: {
        color: optionsSetup.subtextColor,
        fontWeight: optionsSetup.subtextFontWeight,
        fontSize: optionsSetup.subtextFontSize,
        fontStyle: optionsSetup.subtextFontStyle,
        fontFamily: optionsSetup.subtextFontFamily,
      },
    };
    this.options.title = title;
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
      radius: [optionsSetup.innerNumber + "%", optionsSetup.outerNumber + "%"],
      clockwise: optionsSetup.clockwise,
      startAngle: optionsSetup.startAngle,
      minAngle: optionsSetup.minAngle,
      minShowLabelAngle: optionsSetup.minShowLabelAngle,
      percentPrecision: optionsSetup.percentPrecision,
      // echarts v5.0.0开始支持
      itemStyle: {
        borderRadius: [
          optionsSetup.borderRadius + "%",
          optionsSetup.borderRadius + "%",
        ],
      },
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
            optionsSetup.borderColor == ""
              ? "inherit"
              : optionsSetup.borderColor,
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
        color:
          optionsSetup.fontColor == "" ? "inherit" : optionsSetup.fontColor,
        fontWeight: optionsSetup.fontWeight,
        fontStyle: optionsSetup.fontStyle,
        fontFamily: optionsSetup.fontFamily,
      },
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
};

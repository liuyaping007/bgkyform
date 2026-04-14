import {
  setWidgetConfigValue,
  setOptionsTitle,
  setOptionsTooltip,
  setOptionsLegend,
} from "../comm.js";
export const widgetFunnel = {
  color: [],
  title: {
    text: "",
    textStyle: {
      color: "#fff",
    },
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c}",
  },
  legend: {
    x: "center",
    y: "92%",
    textStyle: {
      color: "#fff",
    },
  },
  series: [
    {
      name: "",
      type: "funnel",
      left: "center",
      width: "80%",
      //maxSize: '80%',
      sort: "descending",
      label: {
        normal: {
          show: true,
          position: "inside",
          formatter: "{c}",
          textStyle: {
            color: "#fff",
            fontSize: 14,
          },
        },
        emphasis: {
          position: "inside",
          formatter: "{b}: {c}",
        },
      },
      itemStyle: {
        normal: {
          opacity: 0.8,
          borderColor: "rgba(12, 13, 43, .9)",
          borderWidth: 1,
          shadowBlur: 4,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: "rgba(0, 0, 0, .6)",
        },
      },
      data: [],
    },
  ],
};

export const widgetFunnelAnalysisfun = {
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
    this.setEnding();
    this.setOptionsText();
    this.setOptionsColor();
    this.staticDataFn();
    return this.options;
  },

  staticDataFn() {
    let val = this.val;
    const staticData = typeof val == "string" ? JSON.parse(val) : val;
    for (const key in this.options.series) {
      if (this.options.series[key].type == "funnel") {
        this.options.series[key].data = staticData;
      }
    }
  }, // 翻转
  setEnding() {
    const optionsSetup = this.optionsSetup;
    const series = this.options.series;
    if (optionsSetup.ending) {
      series[0].sort = "ascending";
    } else {
      series[0].sort = "descending";
    }
  },
  // 数值设置
  setOptionsText() {
    const optionsSetup = this.optionsSetup;
    const normal = {
      show: optionsSetup.isShow,
      position: optionsSetup.fontPosition,
      distance: optionsSetup.fontDistance,
      formatter: !!optionsSetup.percentSign ? "{c}%" : "{c}",
      textStyle: {
        color: optionsSetup.fontColor,
        fontSize: optionsSetup.fontSize,
        fontWeight: optionsSetup.fontWeight,
        fontStyle: optionsSetup.fontStyle,
        fontFamily: optionsSetup.fontFamily,
      },
    };
    this.options.series[0].label["normal"] = normal;
  }, // 图例颜色修改
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

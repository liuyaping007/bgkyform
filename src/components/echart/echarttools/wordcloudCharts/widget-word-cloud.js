import {
  setWidgetConfigValue,
  setOptionsTitle,
  setOptionsTooltip,
  // setOptionsLegend,
} from "../comm.js";
export const widgetWordCloud = {
  tooltip: {
    show: true,
  },
  series: [
    {
      type: "wordCloud",
      size: ["9%", "99%"],
      sizeRange: [6, 30],
      textRotation: [0, 45, 90, -45],
      rotationRange: [-45, 90],
      shape: "circle",
      textPadding: 0,
      autoSize: {
        enable: true,
        minSize: 6,
      },
      textStyle: {
        normal: {
          color: function() {
            return (
              "rgb(" +
              [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
              ].join(",") +
              ")"
            );
          },
        },
      },
      data: [],
    },
  ],
};

export const widgetWordCloudAnalysisfun = {
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
    this.setOptionsSizeRange();
    this.setOptionsRotationRange();
    this.staticDataFn();
    return this.options;
  },
  staticDataFn() {
    let val = this.val;
    const staticData = typeof val == "string" ? JSON.parse(val) : val;
    for (const key in this.options.series) {
      this.options.series[key].data = staticData;
    }
  },
  // 词云字体范围
  setOptionsSizeRange() {
    const optionsSetup = this.optionsSetup;
    this.options.series[0].sizeRange = [
      optionsSetup.minRangeSize,
      optionsSetup.maxRangeSize,
    ];
  },
  // 文字角度
  setOptionsRotationRange() {
    const optionsSetup = this.optionsSetup;
    this.options.series[0].rotationRange = [
      optionsSetup.minRotationRange,
      optionsSetup.maxRotationRange,
    ];
  },
};

import {
  setWidgetConfigValue,
  // setOptionsTooltip,
} from "../comm.js";
let per = 60;
export const widgetPiePercentage = {
  title: {
    text: "{nums|" + per + "}{percent|%}",
    x: "center",
    y: "center",
    textStyle: {
      rich: {
        nums: {
          fontSize: 60,
          color: "#29EEF3",
        },
        percent: {
          fontSize: 30,
          color: "#29EEF3",
        },
      },
    },
  },
  legend: {
    type: "plain",
    orient: "vertical",
    right: 0,
    top: "10%",
    align: "auto",
    data: [
      {
        name: "1",
        icon: "circle",
      },
      {
        name: "2",
        icon: "circle",
      },
      {
        name: "3",
        icon: "circle",
      },
      {
        name: "4",
        icon: "circle",
      },
    ],
    textStyle: {
      color: "white",
      fontSize: 16,
      padding: [10, 1, 10, 0],
    },
    selectedMode: false,
  },
  series: [
    {
      //name: '圆环',
      type: "pie",
      radius: ["80%", "65%"],
      silent: true,
      clockwise: true,
      startAngle: 90,
      z: 0,
      label: {
        normal: {
          position: "center",
        },
      },
      data: [
        {
          value: per,
          name: "",
          itemStyle: {
            normal: {
              color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: "#4FADFD", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#28E8FA", // 100% 处的颜色
                  },
                ],
              },
            },
          },
        },
        {
          value: 100 - per,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
          //剩余圆环颜色
          itemStyle: {
            normal: {
              color: "#173164",
            },
          },
        },
      ],
    },
    {
      name: "percent",
      type: "gauge",
      radius: "80%",
      center: ["50%", "50%"],
      startAngle: 0,
      endAngle: 360,
      hoverAnimation: true,
      splitNumber: 12,
      axisTick: {
        show: false,
      },
      splitLine: {
        length: 15,
        distance: -10,
        lineStyle: {
          width: 2,
          color: "#061740",
        },
      },
      axisLabel: {
        show: false,
      },
      pointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          opacity: 0,
        },
      },
      detail: {
        show: false,
      },
      data: [
        {
          value: 0,
          name: "",
        },
      ],
    },
  ],
};

export const widgetPiePercentageAnalysisfun = {
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

    this.setOptionsColor();
    this.staticDataFn();
    this.setOptionLine();
    this.setOptionRadius();
    this.setOptionSurplusColor();
    return this.options;
  },
  setOptionRadius() {
    const optionsSetup = this.optionsSetup;
    this.options.series[0].radius = [
      optionsSetup.innerNumber + "%",
      optionsSetup.outerNumber + "%",
    ];
    this.options.series[1].radius = optionsSetup.outerNumber + "%";
  },
  staticDataFn() {
    let val = this.val;
    const title = this.options.title;
    const num = val[0]["num"];
    title.text = "{nums|" + num + "}{percent|%}";
    this.options.series[0]["data"][0]["value"] = num;
    this.options.series[0]["data"][1]["value"] = 100 - num;
  },
  setOptionsTitle() {
    const optionsSetup = this.optionsSetup;
    const title = this.options.title;
    title.x = "center";
    title.y = "center";
    const rich = {
      nums: {
        color: optionsSetup.textNumColor,
        fontSize: optionsSetup.textNumFontSize,
        fontWeight: optionsSetup.textNumFontWeight,
        fontStyle: optionsSetup.textNumFontStyle,
        fontFamily: optionsSetup.textNumFontFamily,
      },
      percent: {
        color: optionsSetup.textPerColor,
        fontSize: optionsSetup.textPerFontSize,
        fontWeight: optionsSetup.textPerFontWeight,
        fontStyle: optionsSetup.textPerFontStyle,
        fontFamily: optionsSetup.textPerFontFamily,
      },
    };
    title.textStyle["rich"] = rich;
    this.options.title = title;
  },

  //圆环0-100%颜色
  setOptionsColor() {
    const optionsSetup = this.optionsSetup;
    const itemStyle = this.options.series[0]["data"][0]["itemStyle"];
    const normal = {
      color: {
        // 完成的圆环的颜色
        colorStops: [
          {
            offset: 0,
            color: optionsSetup.color0Start, // 0% 处的颜色
          },
          {
            offset: 1,
            color: optionsSetup.color100End, // 100% 处的颜色
          },
        ],
      },
    };
    itemStyle["normal"] = normal;
  },
  setOptionSurplusColor() {
    const itemStyle = this.options.series[0]["data"][1]["itemStyle"];
    const normal = {
      color: this.optionsSetup.colorsurplus,
    };
    itemStyle["normal"] = normal;
  },
  setOptionLine() {
    const optionsSetup = this.optionsSetup;
    const line = this.options.series[1]["splitLine"];
    const num = this.options.series[1];
    num.splitNumber = optionsSetup.lineNumber;
    line.length = optionsSetup.lineLength;
    const lineStyle = {
      width: optionsSetup.lineWidth,
      color: optionsSetup.lineColor,
    };
    line["lineStyle"] = lineStyle;
  },
};

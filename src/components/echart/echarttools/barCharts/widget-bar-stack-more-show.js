import {
  setOptionsLegend,
  setOptionsTitle,
  setOptionsTooltip,
  setOptionsX,
  setOptionsY,
  setOptionsMargin,
} from "../comm.js";
export const widgetBarStackMoreShow = {
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
      itemStyle: {
        // barBorderRadius: null,
      },
    },
  ],
};

export const widgetBarStackMoreShowAnalysisfun = {
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
    this.options.yAxis = setOptionsY(this.optionsSetup);
    this.options.grid = setOptionsMargin(this.optionsSetup);
    this.staticDataFn();
    return this.options;
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
    const legendName = [];
    const axisList = Array.from(new Set(val.map((item) => item.axis)));
    const names = Array.from(new Set(val.map((item) => item.name)));
    const dataValue = [];
    for (let i = 0; i < names.length; i++) {
      const list = [];
      const name = names[i];
      for (let j = 0; j < axisList.length; j++) {
        const date = axisList[j];
        const find = val.find((item) => item.axis == date && item.name == name);
        if (find) {
          list.push({
            data: find.data,
            plan: find.plan,
            real: find.real,
          });
        } else {
          list.push({});
        }
      }
      legendName.push(name);
      dataValue.push({ prod: name, list: list });
    }
    let fontDataName = ["计划", "实际", "占比"];
    if (optionsSetup.fontDataName !== "") {
      fontDataName = optionsSetup.fontDataName.split("|");
    }
    const series = dataValue.map((item, index) => {
      return {
        name: item.name,
        type: "bar",
        param: { list: item.list },
        stack: this.getStackStyle(),
        data: item.list.map((item) => item.data),
        barGap: optionsSetup.barGap + "%",
        barMinHeight: optionsSetup.minHeight,
        barWidth: optionsSetup.maxWidth,
        label: {
          show: optionsSetup.isShow,
          position: optionsSetup.fontPosition,
          distance: optionsSetup.fontDistance,
          fontSize: optionsSetup.fontSize,
          color: optionsSetup.fontColor,
          fontWeight: optionsSetup.fontWeight,
          // formatter: (row) => {
          //   console.log(this);
          //   console.log(row);
          //   // let fontDataName = this.options.param.fontDataName;
          //   const dataIndex = row.dataIndex;

          //   return `${fontDataName[0]}:${item.list[dataIndex].plan}\n${fontDataName[1]}:${item.list[dataIndex].real}\n${fontDataName[2]}:${item.list[dataIndex].data}%`;
          // },
          fontStyle: optionsSetup.fontStyle,
          fontFamily: optionsSetup.fontFamily,
        },
        //颜色，圆角属性
        itemStyle: {
          normal: {
            color: arrColor[index],
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
      };
    });
    this.options.param = {};
    this.options.param.fontDataName = fontDataName;

    this.options.series = series;
    // 根据图表的宽度 x轴的字体大小、长度来估算X轴的label能展示多少个字
    const rowsNum =
      optionsSetup.textRowsNum !== ""
        ? optionsSetup.textRowsNum
        : parseInt(
            this.optionsStyle.width /
              axisList.length /
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
    this.options.xAxis.data = axisList;
    this.options.legend["data"] = legendName;
    this.setOptionsLegendName(legendName);
  },
  // 图例名称设置
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
  //获取堆叠样式
  getStackStyle() {
    const optionsSetup = this.optionsSetup;
    let style = "";
    if (optionsSetup.stackStyle == "upDown") {
      style = "total";
    }
    return style;
  },
};

export function setWidgetConfigValue(config, configValue) {
  function isArrayFn(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    } else {
      return Object.prototype.toString.call(value) === "[object Array]";
    }
  }
  function isObjectFn(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  // 循环遍历前非空判断
  if (config) {
    config.forEach((item) => {
      if (isObjectFn(item)) {
        configValue[item.name] = item.value;
      }
      if (isArrayFn(item)) {
        item.forEach((itemChild) => {
          itemChild.list.forEach((ev) => {
            configValue[ev.name] = ev.value;
          });
        });
      }
    });
  }
}

// 标题修改
export function setOptionsTitle(optionsSetup) {
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
  return title;
}

// 图例操作
export function setOptionsLegend(optionsSetup) {
  const legend = {
    show: optionsSetup.isShowLegend,
    left: optionsSetup.lateralPosition,
    //right: optionsSetup.lateralPosition,
    top: optionsSetup.longitudinalPosition,
    //bottom: optionsSetup.longitudinalPosition,
    orient: optionsSetup.layoutFront,
    textStyle: {
      color: optionsSetup.legendColor,
      fontSize: optionsSetup.legendFontSize,
      fontWeight: optionsSetup.legendFontWeight,
      fontStyle: optionsSetup.legendFontStyle,
      fontFamily: optionsSetup.legendFontFamily,
    },
    itemHeight: optionsSetup.legendHeight,
    itemWidth: optionsSetup.legendWidth,
  };
  return legend;
}

// tooltip 设置
export function setOptionsTooltip(optionsSetup) {
  const tooltip = {
    show: optionsSetup.isShowTooltip,
    trigger: optionsSetup.tooltipTrigger,
    axisPointer: {
      type: optionsSetup.tooltipAxisPointerType,
    },
    textStyle: {
      color: optionsSetup.tooltipColor,
      fontSize: optionsSetup.tooltipFontSize,
      fontWeight: optionsSetup.tooltipFontWeight,
      fontStyle: optionsSetup.tooltipFontStyle,
      fontFamily: optionsSetup.tooltipFontFamily,
    },
  };
  return tooltip;
}

// 边距设置
export function setOptionsMargin(optionsSetup) {
  const grid = {
    left: optionsSetup.marginLeft,
    right: optionsSetup.marginRight,
    bottom: optionsSetup.marginBottom,
    top: optionsSetup.marginTop,
    containLabel: true,
  };
  return grid;
}

// X轴设置
export function setOptionsX(optionsSetup) {
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
  return xAxis;
}
// Y轴设置
export function setOptionsY(optionsSetup) {
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
  if (yAxis.max == null) {
    delete yAxis.max;
  }
  return yAxis;
}

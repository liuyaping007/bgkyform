import {
  widgetBarchart,
  widgetBarchartAnalysisfun,
} from "./barCharts/widget-barchart";
import {
  widgetGradientBarchart,
  widgetGradientBarchartAnalysisfun,
} from "./barCharts/widget-gradient-barchart";
import {
  widgetLinechart,
  widgetLinechartAnalysisfun,
} from "./lineCharts/widget-linechart";
import {
  widgetBarlinechart,
  widgetBarlinechartAnalysisfun,
} from "./barlineCharts/widget-barlinechart";
import {
  widgetPiechart,
  widgetPiechartAnalysisfun,
} from "./pieCharts/widget-piechart";
import {
  widgetFunnel,
  widgetFunnelAnalysisfun,
} from "./funnelCharts/widget-funnel";
import {
  widgetGauge,
  widgetGaugeAnalysisfun,
} from "./percentCharts/widget-gauge";
import {
  widgetLineMap,
  widgetLineMapAnalysisfun,
} from "./mapCharts/widget-line-map";
import {
  widgetPieNightingale,
  widgetPieNightingaleAnalysisfun,
} from "./pieCharts/widget-pie-nightingale";
import {
  widgetPiePercentage,
  widgetPiePercentageAnalysisfun,
} from "./percentCharts/widget-pie-percentage";
import {
  widgetAirbubbleMap,
  widgetAirbubbleMapAnalysisfun,
} from "./mapCharts/widget-airbubble-map";
import {
  widgetBarStack,
  widgetBarStackAnalysisfun,
} from "./barCharts/widget-bar-stack";
import {
  widgetLineStack,
  widgetLineStackAnalysisfun,
} from "./lineCharts/widget-line-stack";
import {
  widgetBarCompare,
  widgetBarCompareAnalysisfun,
} from "./barCharts/widget-bar-compare";
import {
  widgetLineCompare,
  widgetLineCompareAnalysisfun,
} from "./lineCharts/widget-line-compare";
import {
  widgetMoreBarLine,
  widgetMoreBarLineAnalysisfun,
} from "./barlineCharts/widget-more-bar-line";
import {
  widgetWordCloud,
  widgetWordCloudAnalysisfun,
} from "./wordcloudCharts/widget-word-cloud";
import {
  widgetHeatmap,
  widgetHeatmapAnalysisfun,
} from "./heatmap/widget-heatmap";
import {
  widgetRadar,
  widgetRadarAnalysisfun,
} from "./radarCharts/widget-radar";
import {
  widgetBarLineStack,
  widgetBarLineStackAnalysisfun,
} from "./barlineCharts/widget-bar-line-stack";
import {
  widgetScaleVertical,
  widgetScaleVerticalAnalysisfun,
} from "./scaleCharts/widget-scale-vertical";
import {
  widgetScaleHorizontal,
  widgetScaleHorizontalAnalysisfun,
} from "./scaleCharts/widget-scale-horizontal";
import {
  widgetScatter,
  widgetScatterAnalysisfun,
} from "./scatterCharts/widget-scatter";
import {
  widgetBarDoubleYaxis,
  widgetBarDoubleYaxisAnalysisfun,
} from "./barCharts/widget-bar-double-yaxis-chart";
import {
  widgetBarMap,
  widgetBarMapAnalysisfun,
} from "./mapCharts/widget-bar-map";
import {
  widgetChinaMap,
  widgetChinaMapAnalysisfun,
} from "./mapCharts/widget-china-map";
import {
  widgetGlobalMap,
  widgetGlobalMapAnalysisfun,
} from "./mapCharts/widget-global-map";
import {
  widgetBarStackMoreShow,
  widgetBarStackMoreShowAnalysisfun,
} from "./barCharts/widget-bar-stack-more-show";

export const widgetTool = {
  barCharts: [
    widgetBarchart,
    widgetGradientBarchart,
    widgetBarStack,
    widgetBarCompare,
    widgetBarDoubleYaxis,
    widgetBarStackMoreShow,
  ],
  lineCharts: [widgetLinechart, widgetLineStack, widgetLineCompare],
  barlineCharts: [widgetBarlinechart, widgetMoreBarLine, widgetBarLineStack],
  pieCharts: [widgetPiechart, widgetPieNightingale],
  funnelCharts: [widgetFunnel],
  percentCharts: [widgetPiePercentage, widgetGauge],
  mapCharts: [
    widgetAirbubbleMap,
    widgetBarMap,
    widgetChinaMap,
    widgetGlobalMap,
    widgetLineMap,
  ],
  wordcloudCharts: [widgetWordCloud],
  heatmap: [widgetHeatmap],
  radarCharts: [widgetRadar],
  scaleCharts: [widgetScaleHorizontal, widgetScaleVertical],
  scatterCharts: [widgetScatter],
};

export const widgetToolEchart = {
  widgetBarchart,
  widgetGradientBarchart,
  widgetBarStack,
  widgetBarCompare,
  widgetBarDoubleYaxis,
  widgetBarStackMoreShow,
  widgetLinechart,
  widgetLineStack,
  widgetLineCompare,
  widgetBarlinechart,
  widgetMoreBarLine,
  widgetBarLineStack,
  widgetPiechart,
  widgetPieNightingale,
  widgetFunnel,
  widgetPiePercentage,
  widgetGauge,
  widgetAirbubbleMap,
  widgetBarMap,
  widgetChinaMap,
  widgetGlobalMap,
  widgetLineMap,
  widgetWordCloud,
  widgetHeatmap,
  widgetRadar,
  widgetScaleHorizontal,
  widgetScaleVertical,
  widgetScatter,
};
export const analysisEchart = {
  widgetBarchart: widgetBarchartAnalysisfun,
  widgetGradientBarchart: widgetGradientBarchartAnalysisfun,
  widgetBarStack: widgetBarStackAnalysisfun,
  widgetBarCompare: widgetBarCompareAnalysisfun,
  widgetBarDoubleYaxis: widgetBarDoubleYaxisAnalysisfun,
  widgetBarStackMoreShow: widgetBarStackMoreShowAnalysisfun,
  widgetLinechart: widgetLinechartAnalysisfun,
  widgetLineStack: widgetLineStackAnalysisfun,
  widgetLineCompare: widgetLineCompareAnalysisfun,
  widgetBarlinechart: widgetBarlinechartAnalysisfun,
  widgetMoreBarLine: widgetMoreBarLineAnalysisfun,
  widgetBarLineStack: widgetBarLineStackAnalysisfun,
  widgetPiechart: widgetPiechartAnalysisfun,
  widgetPieNightingale: widgetPieNightingaleAnalysisfun,
  widgetFunnel: widgetFunnelAnalysisfun,
  widgetPiePercentage: widgetPiePercentageAnalysisfun,
  widgetGauge: widgetGaugeAnalysisfun,
  widgetAirbubbleMap: widgetAirbubbleMapAnalysisfun,
  widgetBarMap: widgetBarMapAnalysisfun,
  widgetChinaMap: widgetChinaMapAnalysisfun,
  widgetGlobalMap: widgetGlobalMapAnalysisfun,
  widgetLineMap: widgetLineMapAnalysisfun,
  widgetWordCloud: widgetWordCloudAnalysisfun,
  widgetHeatmap: widgetHeatmapAnalysisfun,
  widgetRadar: widgetRadarAnalysisfun,
  widgetScaleHorizontal: widgetScaleHorizontalAnalysisfun,
  widgetScaleVertical: widgetScaleVerticalAnalysisfun,
  widgetScatter: widgetScatterAnalysisfun,
};

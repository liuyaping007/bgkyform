<template>
  <myechart :options="chartoption" :mapcity="mapcity" :mapcode="mapcode" v-on="$listeners" :echartroll="echartroll"
    :maxechartrollnum="maxechartrollnum" :echartrolltime="echartrolltime" :orienttype="orienttype"></myechart>
</template>
<script>
import myechart from "./index.vue";
import { widgetToolEchart, analysisEchart } from "./echarttools/main.js";
export default {
  props: [
    "w",
    "h",
    "configechart",
    "echartcode",
    "val",
    "echartroll",
    "maxechartrollnum",
    "echartrolltime",
    "orienttype",
  ],
  components: { myechart },
  data() {
    return { chartoption: {}, mapcode: null, mapcity: "" };
  },
  created() {
    this.loaddata();
  },
  methods: {
    loaddata() {
      if (this.configechart == null) {
        return;
      }
      this.chartoption = JSON.parse(
        JSON.stringify(widgetToolEchart[this.echartcode])
      );

      analysisEchart[this.echartcode].setOptions(
        this.chartoption,
        this.configechart,
        this,
        this.val
      );
    },
  },
  watch: {
    configechart: {
      handler() {
        this.loaddata();
      },
      deep: true,
    },
    val: {
      handler() {
        this.loaddata();
      },
      deep: true,
    },
  },
};
</script>
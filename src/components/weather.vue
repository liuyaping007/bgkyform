<template>
  <div class="weather">
    <span :style="gettext3fontsize" class="cityname">{{ weatherobj.city }}</span>
    <nxnsvgicon :class-name="weatherobj.dayweather + '-icon'" :icon-class="weatherobj.dayweather"
      :class="weatherobj.dayweather" :style="geticonfontsize"></nxnsvgicon>

    <span :style="gettext1fontsize">{{ weatherobj.nighttemp }}~{{ weatherobj.daytemp }}</span><span
      :style="gettext2fontsize">℃</span>
    <slot :weatherobj="weatherobj"></slot>
  </div>
</template>
<script>
import { commAxiosRequest } from "@/api/index.js";
import nxnsvgicon from "@/icons/index.vue";
export default {
  name: "weather",
  props: ["citycode", "fontsize", "stylecss", "amapkey"],

  data() {
    return {
      weatherobj: {
        date: "2024-10-17",
        week: "4",
        dayweather: "小雨",
        nightweather: "阴",
        daytemp: "26",
        nighttemp: "21",
        daywind: "东",
        nightwind: "东",
        daypower: "1-3",
        nightpower: "1-3",
        daytemp_float: "26.0",
        nighttemp_float: "21.0",
        city: "长沙市",
      },
      isloading: false,
    };
  },
  computed: {
    geticonfontsize() {
      if (this.fontsize != null) {
        return "font-size:" + (this.fontsize * 41) / 26 + "px";
      } else {
        return "font-size:" + 41 + "px";
      }
    },
    gettext1fontsize() {
      let css = this.stylecss == null ? "" : this.stylecss;
      if (this.fontsize != null) {
        return css + "font-size:" + (this.fontsize * 30) / 26 + "px";
      } else {
        return css + "font-size:" + 30 + "px";
      }
    },
    gettext3fontsize() {
      let css = this.stylecss == null ? "" : this.stylecss;
      if (this.fontsize != null) {
        return css + "font-size:" + (this.fontsize * 26) / 26 + "px";
      } else {
        return css + "font-size:" + 26 + "px";
      }
    },
    gettext2fontsize() {
      let css = this.stylecss == null ? "" : this.stylecss;
      if (this.fontsize != null) {
        return (
          css + "padding-top: 4px;font-size:" + (this.fontsize * 26) / 26 + "px"
        );
      } else {
        return css + "padding-top: 4px;font-size:" + 26 + "px";
      }
    },
  },
  components: { nxnsvgicon },
  created() {
    this.loadInit();
  },
  methods: {
    loadInit() {
      if (this.isloading == false) {
        this.isloading = true;
        let citycode = this.citycode == null ? "430100" : this.citycode;
        if (typeof citycode != "string") {
          citycode = citycode[citycode.length - 1];
        }
        let amapkey =
          this.amapkey == null || this.amapkey == ""
            ? "00d883bc11c3a5aef92c522a3710aba4"
            : this.amapkey;
        commAxiosRequest(
          {
            ajaxType: "get",
            apiurl:
              "https://restapi.amap.com/v3/weather/weatherInfo?extensions=all&key=" +
              amapkey +
              "&city=" +
              citycode,
          },
          true
        ).then((res) => {
          debugger;
          this.isloading = false;
          if (
            res.data.forecasts != null &&
            res.data.forecasts[0] != null &&
            res.data.forecasts[0].casts != null &&
            res.data.forecasts[0].casts[0] != null
          ) {
            this.weatherobj = res.data.forecasts[0].casts[0];
            this.weatherobj.city = res.data.forecasts[0].city;
          }
        });
      }
    },
  },
  watch: {
    citycode() {
      if (this.timer != null) {
        // 清除已经设置的定时器
        clearTimeout(this.timer);
      }
      // 设置新的定时器
      this.timer = setTimeout(() => {
        // 在这里处理实际的输入事件
        this.loadInit();
      }, 1000); // 延迟500毫
    },
  },
};
</script>
<style lang="css" scoped>
.weather {
  display: flex;
}

.cityname {
  padding-left: 4px;
  padding-right: 4px;
}
</style>
<template>
  <div id="mapBox" :style="getcss" v-loading="loading" v-on="$listeners"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
export default {
  props: {
    w: {
      type: Number,
      default: 500,
    },
    h: {
      type: Number,
      default: 500,
    },
    center: {
      type: String,
      default() {
        return '114.298572, 30.584355'
      },
    },
    pitch: {
      type: Number,
      default: 0,
    },
    defaultzoom: {
      type: Number,
      default: 14,
    },
    mapurl: {
      type: String,
      default:
        'https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}?token=Your%20apiKey',
    },
    isreadonly: {
      type: Boolean,
      default: false,
    },
    isload3d: {
      type: Boolean,
      default: false,
    },

    isaggregation: {
      type: Boolean,
      default: false,
    },
    markerdatalist: {
      type: Array,
      default() {
        return []
      },
    },
    textdatalist: {
      type: Array,
      default() {
        return []
      },
    },
    linedata: {
      type: Array,
      default() {
        return []
      },
    },
    regionlist: {
      type: Array,
      default() {
        return []
      },
    },
    pedestalinfo: {
      type: Object,
      default() {
        return {}
      },
    },
    maxzoom: {
      type: Number || String,
      default() {
        return 22
      },
    },
    minzoom: {
      type: Number || String,
      default() {
        return 0
      },
    },
  },
  computed: {
    getcss() {
      if (this.map != null) {
        this.$nextTick(() => {
          this.map.resize()
        })
      }
      return `width:${this.w}px;height:${this.h}px; `
    },
  },
  data() {
    return {
      loading: false,
      layers: [],
      sources: [],
      map: {},
      markerPopuplist: [],
      titlePopuplist: [],
      mapcenter: [114.298572, 30.584355],
      polygondeckglLayer: null,
      // buildingobj: {},
      timer: null,
      isloadbuilding: false,
      oldbbox: null,
      buildinggeojson: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      },
    }
  },
  mounted() {
    if (this.center.indexOf(',') > 0) {
      this.mapcenter = this.center.split(',')
    }
    this.loadMap()
  },
  methods: {
    loadMap() {
      mapboxgl.accessToken =
        'pk.eyJ1IjoieGlhb3poYW5naiIsImEiOiJjbDVwNm9zN2owdTgxM2RuemVobm51Nzd3In0.8qLyL04Wpoir1_YutPa7kw'
      var attribution = ''
      var map = new mapboxgl.Map({
        container: document.getElementById('mapBox'), // 容器必须有明确的宽和高
        style: {
          version: 8,
          sources: {
            'raster-tiles': {
              attribution: attribution,
              type: 'raster',
              tiles: [this.mapurl],
              tileSize: 256,
            },
          },
          glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf', // 设置字体资源链接
          layers: [
            {
              id: 'simple-tiles',
              type: 'raster',
              source: 'raster-tiles',
              minzoom: 0,
              maxzoom: 22,
            },
          ],
        },
        center: this.mapcenter,
        zoom: this.defaultzoom,
        pitch: this.pitch,
        bearing: 0,
        renderingMode: '3d',
        minZoom: typeof this.minZoom == "string" ? Number.parseInt(this.minZoom) : this.minZoom, // 最小缩放级别
        maxZoom: typeof this.maxzoom == "string" ? Number.parseInt(this.maxzoom) : this.maxzoom, // 最大缩放级别
      })
      this.map = map
      var nav = new mapboxgl.NavigationControl()
      this.map.addControl(nav, 'bottom-right')
      let $this = this
      $this.loadCity3D()
      map.on('style.load', function () {
        $this.loadMapPedestalLayer();
        $this.loadText()
        $this.loadMarker()
        $this.loadline()
        $this.reloadRegion()

      })
      ///点击聚合点 时
      map.on('click', 'cluster', (e) => {
        if (e.features[0].properties.point_count !== undefined) {
          // 放大地图
          map.flyTo({
            center: e.lngLat,
            zoom: map.getZoom() + 2.5,
          })
        }
      })
      ///点击区域时
      map.on('click', 'queryDatas', (e) => {
        debugger
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['queryDatas']
        });

        if (features.length > 0) {
          // 获取第一个匹配的连线要素
          const lineFeature = features[0];
          $this.$emit('clickmapregion', lineFeature, e)
          // 访问要素的几何数据和属性

        }
      })

      ///点击聚合点 时
      map.on('click', 'shopping-route11', (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['shopping-route11']
        });

        if (features.length > 0) {
          // 获取第一个匹配的连线要素
          const lineFeature = features[0];
          $this.$emit('clickmapline', lineFeature, e)
          // 访问要素的几何数据和属性

        }
      })
      map.on('moveend', function (e) {
        console.log(e.originalEvent)
        $this.loadBuilding3D()
      })
      map.on('click', function (e) {

        // if (!features.length) {
        //   // 用户点击的位置不包含标记点，可以执行相应的操作
        //   // 在这里添加你想要执行的逻辑
        // }
        $this.$emit('clickmapbox', e)
      })
      this.setReadOnly()
    },
    switchMapimg() {
      this.map.setStyle({
        version: 8,
        sources: {
          'raster-tiles': {
            attribution: '',
            type: 'raster',
            tiles: [this.mapurl],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
            minzoom: 0,
            maxzoom: 22,
          },
        ],
      })
      this.loadMapPedestalLayer()
    },
    loadMapPedestalLayer() {
      if (
        this.pedestalinfo == null ||
        this.pedestalinfo.pedestal == null ||
        this.pedestalinfo.pedestal == '' ||
        this.pedestalinfo.pedestalurl == ''
      ) {
        return
      }
      if (this.map.getLayer('景区边界线')) {
        this.map.removeLayer('景区边界线')
      }
      if (this.map.getLayer('卡通地图层')) {
        this.map.removeLayer('卡通地图层')
      }
      if (this.map.getSource('景区边界')) {
        this.map.removeSource('景区边界')
      }
      if (this.map.getSource('卡通地图')) {
        this.map.removeSource('卡通地图')
      }

      // 卡通地图四角的地理坐标 - 必须与实际图片对应
      const imageCorners = this.pedestalinfo.pedestal.slice(0, -1) //
      // 顺序：[左上角, 右上角, 右下角, 左下角]
      const quyuCorners = this.pedestalinfo.pedestal
      let pedestalurl = this.pedestalinfo.pedestalurl
      // 1. 添加景区边界数据源
      // this.map.addSource('景区边界', {
      //   type: 'geojson',
      //   data: {
      //     type: 'Feature',
      //     geometry: {
      //       type: 'Polygon',
      //       coordinates: [quyuCorners],
      //     },
      //   },
      // })

      // 2. 添加单张卡通地图图片作为数据源
      this.map.addSource('卡通地图', {
        type: 'image',
        url: pedestalurl, // 替换为您的卡通地图图片URL
        coordinates: imageCorners,
      })

      // 3. 先添加卡通地图图层（全屏显示）
      this.map.addLayer({
        id: '卡通地图层',
        type: 'raster',
        source: '卡通地图',
        paint: {
          'raster-opacity': 1,
        },
      })

      // 5. 创建反向遮罩层 - 覆盖景区外的区域，显示卫星地图
      // 这是修复报错的关键：使用fill层覆盖景区外区域，遮挡卡通地图

      // 6. 添加景区边界线，便于查看边界
      // this.map.addLayer({
      //   id: '景区边界线',
      //   type: 'line',
      //   source: '景区边界',
      //   layout: {},
      //   paint: {
      //     'line-color': '#ff0000',
      //     'line-width': 3,
      //     'line-dasharray': [5, 5],
      //   },
      // })
    },
    loadCity3D() {
      if (this.isload3d) {
        for (let i = 1; i <= 30; i++) {
          this.map.loadImage('/images/' + i + '.jpg', (error, image) => {
            if (error) throw error
            this.map.addImage('win' + i, image)
          })
        }
      }
    },
    setReadOnly() {
      if (this.isreadonly === false) {
        this.map.dragPan._inertiaOptions = true
        this.map.dragPan._mousePan._enabled = true
        this.map.dragPan._touchPan._enabled = true
        this.map.dragRotate._pitchWithRotate = true
        this.map.dragRotate._mouseRotate._enabled = true
        this.map.dragRotate._mousePitch._enabled = true
        this.map.scrollZoom._enabled = true
      } else {
        this.map.dragPan._inertiaOptions = false
        this.map.dragPan._mousePan._enabled = false
        this.map.dragPan._touchPan._enabled = false
        this.map.dragRotate._pitchWithRotate = false
        this.map.dragRotate._mouseRotate._enabled = false
        this.map.dragRotate._mousePitch._enabled = false
        this.map.scrollZoom._enabled = false
      }
    },
    loadBuilding3D() {
      let currentZoom = this.map.getZoom()
      if (currentZoom >= 15.5 && this.isload3d) {
        let bbox = this.map.getBounds().toArray() // 获取当前地图视窗的边界框经纬度
        if (this.timer != null) {
          clearTimeout(this.timer) // 清除之前的定时器
        }
        let $this = this ///如果第一次加载3D地图 就不需要等待 直接加载
        // if ($this.buildinggeojson.data.features.length == 0) {
        //   $this.load3DModel(bbox)
        // } else {
        //   this.timer = setTimeout(() => {
        //     $this.load3DModel(bbox)
        //   }, 2000) // 设置一个500毫秒的延迟，避免频繁请求
        // }
        // 处理在边界框范围内的要素
      }
    },
    load3DModel(bbox) {
      this.buildinggeojson = {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      }
      let isbox = false
      if (this.oldbbox != null) {
        if (
          this.oldbbox[0][0] > bbox[0][0] ||
          this.oldbbox[1][0] < bbox[1][0] ||
          this.oldbbox[0][1] > bbox[0][1] ||
          this.oldbbox[1][1] < bbox[1][1]
        ) {
          isbox = true
        }
        // // 创建两个矩形
        // let rect1 = turf.bboxPolygon([$this.oldbbox[0][0], $this.oldbbox[0][1], $this.oldbbox[1][0], $this.oldbbox[1][1]]);
        // let rect2 = turf.bboxPolygon([bbox[0][0], bbox[0][1], bbox[1][0], bbox[1][1]]);
        // if (!turf.booleanContains(rect1, rect2)) {
        //   isbox = true
        // }
      }
      // 判断矩形2是否完全包含在矩形1中

      if (this.isloadbuilding == false && (this.oldbbox == null || isbox)) {
        this.oldbbox = bbox
        this.isloadbuilding = true
        queryBuilding({
          startlng: bbox[0][0],
          endlng: bbox[1][0],
          startlat: bbox[0][1],
          endlat: bbox[1][1],
        }).then((res) => {
          this.isloadbuilding = false
          if (res.code == 0) {
            if (res.data != null && res.data.length > 0) {
              res.data.forEach((item) => {
                // if ($this.buildingobj[item.buildingId] == null) {
                // $this.buildingobj[item.buildingId] = ""
                let buildingitem = JSON.parse(item)
                let he = '' //默认建筑物高度
                if (
                  buildingitem.properties.height == null ||
                  buildingitem.properties.height == ''
                ) {
                  if (buildingitem.properties.Floor != null) {
                    he = buildingitem.properties.Floor * 3.1
                  } else {
                    he = 5
                  }
                } else {
                  he = buildingitem.properties.height
                }
                //模拟数据
                buildingitem.properties.pkid = parseInt(buildingitem.properties.FID)
                buildingitem.properties.height = parseInt(he)
                buildingitem.properties.base_height = parseInt(0)
                buildingitem.properties.topheigth = parseInt(he)
                buildingitem.properties.x = buildingitem.geometry.coordinates[0][0][0]
                buildingitem.properties.y = buildingitem.geometry.coordinates[0][0][1]
                this.buildinggeojson.data.features.push(buildingitem)
                // }
              })
              this.addBoxLayer()
            }
          }
        })
      }
    },
    addBoxLayer() {
      let that = this
      if (this.map.getLayer('entity_layer')) {
        this.map.removeLayer('entity_layer')
      }
      if (this.map.getLayer('building-top')) {
        this.map.removeLayer('building-top')
      }
      if (this.map.getSource('states')) {
        this.map.removeSource('states')
        this.map.addSource('states', this.buildinggeojson)
        // this.map.getSource("states").setData(this.buildinggeojson);
      } else {
        this.map.addSource('states', this.buildinggeojson)
      }
      let patternlist = ['case']
      // patternlist.push([">", ["get", "height"], 100])
      // patternlist.push("win6") // 高度大于100时使用'high-texture'
      for (let i = 30; i > 0; i--) {
        patternlist.push(['>', ['get', 'height'], i * 7])
        patternlist.push('win' + i) // 高度大于100时使用'high-texture'
      }
      patternlist.push('win1')
      if (!this.map.getLayer('building-top')) {
        this.map.addLayer({
          id: 'entity_layer',
          source: 'states',
          type: 'fill-extrusion',
          layout: {},

          minzoom: 15,
          paint: {
            'fill-extrusion-pattern': patternlist,
            // "fill-extrusion-color": "#ccc",

            // 使用名为'building-wall-texture'的纹理图片
            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            // 'fill-extrusion-height': ['get', 'height'],
            // 'fill-extrusion-base': ['get', 'base_height'],
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height'],
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'base_height'],
            ],
            'fill-extrusion-opacity': 1,
            // 'fill-extrusion-pattern': 'catcat',
          },
          callback: {},
        })
        let colorlist = [
          '#CBC5BC',
          '#B39D7F',
          '#A5A6A4',
          '#83A9C8',
          '#43BDFF',
          '#028CEC',
          '#1457B4',
          '#002E62',
          '#C9F8FF',
          '#B9EDF8',
          '#A2E6EA',
          '#6CFAFE',
          '#43E7FF',
          '#02C2EE',
          '#016B9D',
          '#004861',
          '#E2E4FE',
          '#CAD1FF',
          '#B7BFF5',
          '#9FAEE8',
          '#6C89FD',
          '#A5D4F7',
          '#7BCEFE',
          '#52B5F6',
          '#99FAFF',
          '#A4B5FF',
          '#C9EBFF',
          '#B7E0F6',
          '#9ED6E9',
          '#6CD8FF',
        ]
        let toppatternlist = ['case']

        // patternlist.push([">", ["get", "height"], 100])
        // patternlist.push("win6") // 高度大于100时使用'high-texture'
        for (let i = 30; i > 0; i--) {
          toppatternlist.push(['>', ['get', 'height'], i * 7])
          toppatternlist.push(colorlist[i - 1]) // 高度大于100时使用'high-texture'
        }
        toppatternlist.push(colorlist[1])

        this.map.addLayer({
          id: 'building-top',
          type: 'fill-extrusion',
          source: 'states',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': toppatternlist,
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height'],
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'topheigth'],
            ],
            'fill-extrusion-opacity': 1,
          },
        })
      }
      // let popups = new mapboxgl.Popup({
      //   closeButton: false,
      //   closeOnClick: false,
      // });

      this.map.on('mousemove', 'entity_layer', function (e) {
        that.map.getCanvas().style.cursor = 'pointer'
        // let feature = e.features[0];
        // //建筑物弹窗信息
        // let xmmc = "";
        // if (
        //   feature.properties.XMMC !== undefined &&
        //   feature.properties.XMMC.length > 35
        // ) {
        //   let a1 = feature.properties.XMMC.substring(0, 35);
        //   let a2 = feature.properties.XMMC.substring(
        //     35,
        //     feature.properties.XMMC.length
        //   );
        //   xmmc =
        //     "<h1 style='color: white'><a style='color: orange'>" +
        //     a1 +
        //     "<br>" +
        //     a2 +
        //     " (" +
        //     feature.properties.JZWMC +
        //     ")</a></h1>";
        // } else {
        //   xmmc =
        //     "<h1 style='color: white'><a style='color: orange'>" +
        //     feature.properties.XMMC +
        //     " (" +
        //     feature.properties.JZWMC +
        //     ")</a></h1>";
        // }
        // //建筑物弹窗信息
        // let html =
        //   xmmc +
        //   "<h2 style='color: white'> 建筑物用途：<a style='color: orange'>" +
        //   feature.properties.JZWJBYT +
        //   "</a> </h2>" +
        //   "<h2 style='color: white'> 建筑物高度：<a style='color: orange'>" +
        //   feature.properties.JZWGD +
        //   " 米</a></h2>" +
        //   "<h2 style='color: white'> 维修单位：<a style='color: orange'>" +
        //   feature.properties.WXDW +
        //   "</a> </h2>" +
        //   "<h2 style='color: white'> 物业公司：<a style='color: orange'>" +
        //   feature.properties.WYGSMC +
        //   "</a></h2>" +
        //   "<h2 style='color: white'> 坐落：<a style='color: orange'>" +
        //   feature.properties.ZL +
        //   "</a> </h2>";

        // popups
        //   .setLngLat([feature.properties.x, feature.properties.y])
        //   .setHTML(html)
        //   .addTo(that.map);
      })

      that.map.on('mouseleave', 'entity_layer', function () {
        that.map.getCanvas().style.cursor = ''
        // that.map.setFilter('entity_borders', ['in', 'pkid', ''])
        // that.map.remove();
      })
    },
    loadMarker() {
      let $this = this;
      if (this.isaggregation != true) {
        this.markerAllRemove()
        this.markerdatalist.forEach((dataitem) => {
          if (dataitem.Coords == null) {
            dataitem.Coords = []
            dataitem.Coords.push(dataitem.lng)
            dataitem.Coords.push(dataitem.lat)
          }

          if (
            dataitem.Coords != null &&
            dataitem.Coords instanceof Array &&
            dataitem.Coords.length > 1
          ) {
            let arrowIcon = new Image(25, 41)
            if (dataitem.icons == null || dataitem.icons == '') {
              arrowIcon.src = require('@/assets/marker.png')
            } else {
              arrowIcon.src = dataitem.icons
            }
            $(arrowIcon).attr('title', dataitem.name)
            $(arrowIcon).click((e) => {
              if (dataitem.callfun != null) {
                dataitem.callfun(dataitem)
              }
              $this.$emit('clickmapmarker', dataitem, e)
            })
            // arrowIcon.attributes.add("title", dataitem.name)
            let shoppingMall = new mapboxgl.Marker(arrowIcon, {
              x: -2,
              y: -4,
            })
              .setLngLat(dataitem.Coords)
              .addTo(this.map)
            // 调整 Marker 图标的锚点
            shoppingMall.setOffset([0, -20]) // 以图标中心为基准，向上微调 20px
            this.markerPopuplist.push(shoppingMall)
          }
        })
      } else {
        this.loadAggregation()
      }
    },
    loadAggregation() {
      if (this.map.getLayer('cluster')) {
        this.map.removeLayer('cluster')
      }

      let $this = this
      function addImageSource() {
        let icons = window.kylinjson.kylinjson({
          path: '$..icons',
          json: $this.markerdatalist,
        })
        const images = [...new Set(icons)]
        images.push('/temp/shiyongyou.png')
        images.forEach((item, index) => {
          if (item == null || item == '') {
            item = '/assets/marker.png'
          }
          $this.map.loadImage(item, (error, image) => {
            if (error) throw error
            if (index == images.length - 1) {
              $this.map.addImage('greenMarker', image)
            } else {
              $this.map.addImage(item, image)
            }
          })
        })
      }
      addImageSource()
      // 随机造数据
      const geojson = {
        type: 'FeatureCollection',
        features: [],
      }
      for (let i = 0; i < this.markerdatalist.length; i++) {
        let dataitem = this.markerdatalist[i]
        if (dataitem.Coords != null) {
          dataitem.lng = dataitem.Coords[0]
          dataitem.lat = dataitem.Coords[1]
        }
        geojson.features.push({
          type: 'Feature',
          properties: {
            ...dataitem,
          },
          geometry: {
            type: 'Point',
            coordinates: [dataitem.lng, dataitem.lat],
          },
        })
      }
      if (this.map.getSource('cluster')) {
        this.map.removeSource('cluster')
        // 添加source
        this.map.addSource('cluster', {
          type: 'geojson',
          data: geojson,
          cluster: true,
          clusterRadius: 30,
        })
        // this.map.getSource("states").setData(this.buildinggeojson);
      } else {
        // 添加source
        this.map.addSource('cluster', {
          type: 'geojson',
          data: geojson,
          cluster: true,
          clusterRadius: 30,
        })
      }

      // 添加layer
      this.map.addLayer({
        id: 'cluster',
        type: 'symbol',
        source: 'cluster',
        layout: {
          'icon-size': ['case', ['has', 'point_count'], 1, 1],
          'icon-image': ['case', ['has', 'point_count'], 'greenMarker', ['get', 'icons']],
          'text-field': ['to-string', ['get', 'point_count']], // 使用表达式动态计算并显示聚合数量
          'text-offset': [0, 0],
          'text-size': 20,
          'icon-ignore-placement': true,
        },
        paint: {
          'text-color': '#F0F0F0',
          'text-halo-width': 0.5,
          'text-halo-color': '#F0F0F0',
        },
      })
    },
    loadText() {
      let $this = this;
      this.textAllRemove()
      this.textdatalist.forEach((dataitem) => {
        if (dataitem.lat != null && dataitem.lng != null) {
          dataitem.Coords = [dataitem.lng, dataitem.lat]
        }
        if (
          dataitem.Coords != null &&
          dataitem.Coords instanceof Array &&
          dataitem.Coords.length > 1
        ) {
          let titlePopup = new mapboxgl.Popup({
            anchor: 'bottom',
            closeButton: false,
            closeOnClick: false,
            className: 'quyu-text',
            minzoom: 12,
            offset: {
              bottom: [-10, 0],
            },
            obj: dataitem,
          })
          // titlePopup.attr('style', 'pointer-events: none')
          if (dataitem.temphtml != null && dataitem.temphtml != '') {
            titlePopup.setHTML(dataitem.temphtml)
          } else {
            titlePopup.setHTML(
              `<div style="font-size: 12px;line-height:20px;">${dataitem.name}</div><div style="font-size: font-size: 12px;line-height:20px;line-height:20px;font-weight: bold;">${dataitem.num}</div>                `
            )
          }
          titlePopup.setLngLat(dataitem.Coords)
          titlePopup.addTo(this.map)
          $(titlePopup.getElement()).click((e) => {
            debugger
            if (dataitem.callfun != null) {
              dataitem.callfun(dataitem)
            }
            $this.$emit('clickmapmarker', dataitem, e)
          })
          this.titlePopuplist.push(titlePopup)
        }
      })
    },
    loadline() {
      if (this.linedata == null || this.linedata.length == 0) {
        return
      }
      if (this.linedeckglLayer != null) {
        this.map.removeLayer('shopping-route11')
        this.map.removeSource('shopping-route11')
        this.linedeckglLayer = null
      }
      if (this.linedata[0].name == null) {
        let newline = {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: JSON.parse(JSON.stringify(this.linedata)),
          },
        }
        for (let key in this.linedata[0]) {
          if (key != 'path' && key != "color") {
            newline.properties[key] = this.linedata[0][key]
          }
        }
        this.deckglLayer = this.map.addLayer({
          id: 'shopping-route11',
          type: 'line',
          source: {
            type: 'geojson',
            data: newline,
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-width': this.linedata[0]["linewidth"] == null ? 5 : this.linedata[0]["linewidth"],
            'line-opacity': 1,
            'line-color': '#009EFF',
          },
        })

      } else {
        let lineData = []
        this.linedata.forEach((ee) => {
          let newline = {
            type: 'Feature',
            properties: { color: ee.color },
            geometry: {
              type: 'LineString',
              coordinates: ee.path,
            },
          }
          for (let key in ee) {
            if (key != 'path' && key != "color") {
              newline.properties[key] = ee[key]
            }
          }
          lineData.push(newline)
        })

        this.linedeckglLayer = this.map.addLayer({
          id: 'shopping-route11',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: lineData,
            },
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-width': 3,
            'line-opacity': 1,
            'line-color': ['get', 'color'],
          },
        })
      }
    },
    //重新加载区域
    reloadRegion() {
      if (this.regionlist == null || this.regionlist.length == 0) {
        return
      }
      if (this.regionlist[0].name == null) {
        let queryDatas = this.map.getSource('queryDatas')
        if (queryDatas !== undefined && queryDatas !== null) {
          let polygonitemData = {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: this.regionlist, //轨迹geojson格式数据
              },
            },
          }
          for (let key in this.regionlist[0]) {
            polygonitemData.properties[key] = this.regionlist[0][key]
          }
          queryDatas.setData(polygonitemData)
        } else {
          this.loadRegion(this.regionlist)
        }
      } else {
        if (this.polygondeckglLayer != null) {
          this.map.removeLayer('queryDatas')
          this.map.removeSource('queryDatas')
          this.polygondeckglLayer = null
        }
        let polygonData = []
        this.regionlist.forEach((ee) => {
          let polygonitemData = {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [ee.path],
            },
            properties: {
              id: 1,
              distance: new Array(),
              angle: new Array(),
              color: ee.color,
            },
          }
          for (let key in ee) {
            if (key != 'path' && key != "color") {
              polygonitemData.properties[key] = ee[key]
            }
          }
          polygonData.push(polygonitemData)
        })
        this.polygondeckglLayer = this.map.addLayer({
          id: 'queryDatas',
          type: 'fill',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: polygonData,
            },
          },
          paint: {
            'fill-color': ['get', 'color'],
            'fill-opacity': 0.5,
          },
        })
      }
    },
    loadRegion(regionlist) {
      this.map.addLayer({
        id: 'queryDatas',
        type: 'fill',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: regionlist, //轨迹geojson格式数据
            },
          },
        },
        paint: {
          'fill-color': 'rgba(0, 168, 0, 1)',
          // 'fill-opacity': 0.4,
        },
        filter: ['==', '$type', 'Polygon'],
      })
    },
    textAllRemove() {
      this.titlePopuplist.forEach((ee) => {
        ee.remove()
      })
    },
    markerAllRemove() {
      this.markerPopuplist.forEach((ee) => {
        ee.remove()
      })
    },
  },
  watch: {
    isreadonly() {
      this.setReadOnly()
    },
    textdatalist() {
      this.loadText()
    },
    markerdatalist() {
      this.loadMarker()
    },
    isload3d() {
      // this.loadCity3D();
    },
    pitch() {
      this.map.flyTo({ pitch: this.pitch })
    },
    mapurl() {
      this.switchMapimg()
    },
    center() {
      if (this.center.indexOf(',') > 0) {
        this.mapcenter = this.center.split(',')
        this.map.setCenter(this.mapcenter)
      }
    },
    regionlist() {
      this.reloadRegion()
    },
    linedata() {
      this.loadline()
    },
    'pedestalinfo.pedestalurl'() {
      this.loadMapPedestalLayer()
    },
    'pedestalinfo.pedestal'() {
      this.loadMapPedestalLayer()
    },
  },
  beforeDestroy() {
    // if (this.map != null) {
    //   this.map.remove();
    // }
  },
}
</script>

<style></style>

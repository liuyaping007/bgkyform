<template>
  <div class="mapbox-maps">
    <div id="map"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
export default {
  props: ['coordinate', 'mapurl', 'pedestalinfo'],
  data() {
    return {
      map: null,
      markers: null,
      markerCoordinates: {},
      showMenu: false,
      menuTop: 0,
      menuLeft: 0,
      selectedMarker: null,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (this.map != null) {
        this.map.remove()
      }
      let mapboxglurl =
        this.mapurl == null
          ? 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}?token=Your%20apiKey'
          : this.mapurl
      mapboxgl.accessToken =
        'pk.eyJ1IjoieGlhb3poYW5naiIsImEiOiJjbDVwNm9zN2owdTgxM2RuemVobm51Nzd3In0.8qLyL04Wpoir1_YutPa7kw'
      this.map = new mapboxgl.Map({
        container: 'map',
        style: {
          version: 8,
          sources: {
            'raster-tiles': {
              attribution: '',
              type: 'raster',
              tiles: [mapboxglurl],
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
        center: [113, 34],
        zoom: 14,
      })
      let that = this
      this.map.on('load', function() {
        if (that.coordinate != null && that.coordinate != '') {
          that.markerCoordinates = that.coordinate.split(',')
          that.marker = new mapboxgl.Marker()
            .setLngLat({
              lat: that.markerCoordinates[1],
              lng: that.markerCoordinates[0],
            })
            .addTo(that.map)
          that.map.setCenter([that.markerCoordinates[0], that.markerCoordinates[1]])
          that.loadMapPedestalLayer()
        }
        that.loadinit()
      })

      this.map.on('click', (e) => {
        if (this.marker != null) {
          this.marker.remove()
        }
        this.markerCoordinates = [e.lngLat.lng, e.lngLat.lat]
        this.marker = new mapboxgl.Marker().setLngLat(e.lngLat).addTo(this.map)
        this.$emit('selectmarker', this.markerCoordinates)
      })
    },
    loadinit() {
      let $this = this
      function addImageSource() {
        const images = [
          '/temp/cheliang.png',
          '/temp/chukunum.png',
          '/temp/churuku.png',
          '/temp/dadou.png',
          '/temp/dami.png',
          '/temp/qita.png',
          '/temp/shiyongyou.png',
        ]
        const imageNames = ['1', '2', '3', '4', '5', '6', 'greenMarker']
        images.forEach((item, index) => {
          $this.map.loadImage(item, (error, image) => {
            if (error) throw error
            $this.map.addImage(imageNames[index], image)
          })
        })
      }
      addImageSource()
    },
    loadMapPedestalLayer() {
      debugger
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
    },
  },
}
</script>
<style>
/* 隐藏mapbox商标 */
.mapboxgl-ctrl-logo {
  display: none !important;
}
</style>
<style scoped>
.mapbox-maps {
  width: 100%;
  height: calc(100vh - 170px);
  position: relative;
}

#map {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.mapboxgl-canvas {
  outline: none;
}
</style>

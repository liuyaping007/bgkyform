<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() { },
};
</script>

<style>
@charset "utf-8";

#app {
  font-family: Helvetica, sans-serif;

  transform: scale(1);
}

body {
  display: block;
  margin: 0px;
  width: 100%;
  height: 100vh;
}

.n-icon {
  height: 1em;
  width: 1em;
  line-height: 1em;
  text-align: center;
  display: inline-block;
  position: relative;
  fill: currentColor;
  transform: translateZ(0);
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.v-modal {
  display: none;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: rgb(73, 72, 72);
  margin-right: 3px;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 3px rgb(3, 240, 248, 0.1);
  background-color: rgb(3, 240, 248, 0.4);
}
</style>

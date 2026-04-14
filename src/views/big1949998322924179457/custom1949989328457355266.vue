<template><div><iframe scrolling="no" unselectable="on" :src="getnewiframeurl" :width="w" :height="h" style="pointer-events: none;border: none;"></iframe></div></template><script> export default {
    props: ["color", "detail", "particleSizeMax", "particleSizeMin", "w", "h"],
    data() {
        return {}
    },
    computed: {
        getnewiframeurl() {
            let newcolor1 = this.color != null && this.color != '' ? this.color : "rgba(16,26,136,1)";
            let newdetail = this.detail != null && this.detail != '' ? this.detail : "1";
            let newparticleSizeMax = this.particleSizeMax != null && this.particleSizeMax != '' ? this.particleSizeMax : "0.1";
            let newparticleSizeMin = this.particleSizeMin != null && this.particleSizeMin != '' ? this.particleSizeMin : "0.05";
            return "/htmltemp/dynamicball.html?color=" + newcolor1 + "&detail=" + newdetail + "&particleSizeMax=" + newparticleSizeMax + "&particleSizeMin=" + newparticleSizeMin

        }
    },
    created() {},
    methods: {}
}</script><style scoped></style>
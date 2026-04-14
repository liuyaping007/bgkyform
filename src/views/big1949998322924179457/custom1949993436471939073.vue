<template><div><iframe scrolling="no" unselectable="on" :src="getnewiframeurl" :width="w" :height="h" style="pointer-events: none;border: none;"></iframe></div></template><script> export default {
    props: ["w", "h"],
    data() {
        return {
            "getnewiframeurl": "/htmltemp/particlewave.html"
        }
    },
    created() {},
    methods: {}
}</script><style scoped></style>
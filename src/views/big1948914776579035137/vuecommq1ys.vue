<template>
    <div>
        <div class="plane" style='width: 229px;
    height: 280px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;
    background-image: linear-gradient(rgba(0, 206, 209, 0.15), rgba(29, 174, 184, 0.3));
    border-radius: 0px;
    border: 0px solid rgb(255, 255, 255);'><svg width="228" height="269" class="dv-border-svg-container">
                <path fill="rgba(40, 44, 52,0)" d="
        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
        L 208 10 L 223 25
        L 223 264 L 20 264
        L 5 249 L 5 20
      " stroke="rgba(0, 206, 209, 1)"></path>
                <path fill="transparent" stroke-width="3" stroke-linecap="round" stroke-dasharray="10, 5" d="M 16 9 L 61 9" stroke="rgba(0, 206, 209, 1)"></path>
                <path fill="transparent" d="M 5 20 L 5 10 L 12 3  L 60 3 L 68 10" stroke="#2cf7fe"></path>
                <path fill="transparent" d="M 223 239 L 223 264 L 198 264" stroke="#2cf7fe"></path>
            </svg>
            <div class="content">项目：集团长沙生产中<br />
                生产线：18条<br />
                员工：1822人<br />
                园区面积：1690亩<br />
                库存：8600吨<br />
                车辆：60辆<br />
                成立时间：2008年5月<br /></div>
        </div>
    </div>
</template>
<script>
    export default {
        props: [],
        data() {
            return {}
        },
        created() {},
        methods: {}
    }
</script>
<style scoped>
    .plane {
        position: relative;
    }

    .content {
        color: rgb(255, 255, 255);
        height: 37px;
        font-size: 18px;
        text-align: left;
        background: rgba(40, 44, 52, 0);
        font-family: YiPing;
        font-weight: bold;
        line-height: 35px;
        position: absolute;
        padding: 8px;
        z-index: 1;
        left: 0px;
        top: 0px;
    }
</style>
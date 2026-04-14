<template>
    <div style="width:110px">
        <el-row style="display: flex; align-items: center;">
            <el-col :span="12">
                <span>{{detailsObj.name}}</span>
            </el-col>
            <el-col :span="12">
                <el-button
                 type="text"  
                 @click="mapClickEvent">详情</el-button>
            </el-col>
        </el-row>
        <el-row style="display: flex; align-items: center;">
            <el-col :span="12" style="color:#ff2000">异常数</el-col>
            <el-col :span="12" style="color:#ff2000">{{detailsObj.value}}</el-col>
        </el-row>

    </div>    
</template>
<script>

export default{
    name: 'MapPop',
    data(){
        return{
            detailsObj:{
                name:'北京',
                value:0
            },
            obj: { },

        }
    },
    props: ["objes"],
    mounted() {
        
         this.obj = this.objes
         console.log(this.obj)
    },
    methods: {
        /**
         * 点击地图触发事件
         *
         */
        mapClickEvent() {
            
            let _this = this;
            // this.obj.that.$router.push({
            //     path: "/gridExceptionDetials",
            //     name: 'exceptionDetails',
            //     params: {
            //         id: 1,
            //         name: "异常信息",
            //     },
            // });
            console.log(_this)
        },
    },
}

</script>
<style >

</style>
<template>
<div class=''>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div
        v-for="(item,index) in silderList" class="swiper-slide banner"
        :key="index">
            <img :src="item.picUrl" alt="">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
</div>
12332
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from 'swiper'
import '@/assets/css/swiper.min.css'
export default {

//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    BANNER_URL:'/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1',
    silderList:[]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getViewpager(){
        this.$axios.post('/api'+this.BANNER_URL)
        .then(({data})=>{
            console.log(data.slider)
            this.silderList = data.slider; 
            this.$nextTick(()=>{
                this.initSwiper();
            })
        })
    },
    initSwiper(){
        new Swiper('.swiper-container',{
            autoplay:true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getViewpager();

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style scoped lang="less">
/*@import url(); 引入公共css类*/

.swiper-container{
    width:100%;
    & img{
        width:100%;
    }
}
</style>
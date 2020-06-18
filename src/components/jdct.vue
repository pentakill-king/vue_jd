<template>
<div>
    <swiper :src='"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/139133/39/786/90879/5ee89c80Ee902cb4e/2ee3c1f469939506.jpg!q70.jpg.dpg"'/>
    <!-- 第一轮播图 -->
    <tops :src='"https://m.360buyimg.com/n1/s120x120_jfs/t1/120690/38/4814/163758/5ee4e3e9Eebc4352b/fe180cee064e35c7.jpg!q70.jpg.dpg"'/>
    <!-- 抢购物品推荐 -->
    <nav1 :src='"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/149052/12/778/7485/5ee85851E64793e06/ee4b0ef78ac74468.png.webp"' />
    <!-- 首页中部导航条 -->
    <sku :price=5958 :src='"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/104590/35/16521/681491/5e7cbd9dEb498e6c9/74fc97f30684ac10.png.webp"' />
    <!-- 秒杀 -->
    <floor :src='"https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg"' />
    <!-- 新人 -->
    <swiper :src='"https://m.360buyimg.com/mobilecms/s244x187_jfs/t1/149758/15/879/98663/5ee9b034E1dad011c/53c928f7836d5cf9.png!q70.jpg.dpg"' />
    <!-- 最后轮播图 -->

    <!-- 推荐  -->
    <floor :title='"推荐"' :type=1 :src='"https://m.360buyimg.com/mobilecms/s184x242_jfs/t1/118105/17/7671/6607/5ec51adcEecc38818/efb859522f035697.png!q70.jpg.dpg"' />  
    <!-- 会场 -->
    <floor :title='"会场"' :type=1 :src='"https://m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg"'/> 
    <!-- 小院 -->
    <floor :title='"小院"' :type=1 :img='"img60"' :src='"https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/65586/1/16433/58955/5ddd2dfdE84479b8f/2e782796eca0d703.jpg!q70.jpg.dpg"'/> 
    <!-- 每日逛 -->
    <floor :title='"每日"' :type=1 :img='"img60"' :src='"https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/65586/1/16433/58955/5ddd2dfdE84479b8f/2e782796eca0d703.jpg!q70.jpg.dpg"'/> 
    <!-- 为你推荐 -->
    <floor :title='"为你推荐"' :type=1 :img='"img194"' :src='"https://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/107528/31/11347/288336/5e86b18fEca21eb31/90561451ca51efe3.jpg!q70.dpg.webp"'/> 

</div>
</template>

<script>
import swiper from '@/components/swiper'
import tops from '@/components/tops'
import nav1 from '@/components/nav1'
import sku from '@/components/sku'
import floor from '@/components/floor'
export default 
{
    components: {
    swiper,
    tops,
    nav1,
    sku,
    floor
    


  }
 }
</script>

 <style lang="less" scoped>
 </style>
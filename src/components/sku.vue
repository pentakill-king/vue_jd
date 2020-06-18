<template>
<div class="sku col">

    <div class="flex">
        <div>秒杀</div>
        <div>更多秒杀</div>
    </div>

    <div class="flex width100">
        <div class="col"> <img :src=src alt=""> <div>{{price}}</div> </div>
        <div><img :src=src alt=""></div>
        <div><img :src=src alt=""></div>
        <div><img :src=src alt=""></div>
    </div>

</div>
</template>

<script>
export default 
{
    props:{
        src:String,
        price:Number
    }
 }
</script>

 <style lang="less" scoped>
 img{
     max-height: 70px;
 }
 .sku{
     max-height: 200px;
     width: 100%;
 }
 .width100{
     width: 100%;
 }
 </style>
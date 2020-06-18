<template>
<div class="floor col">
    <div>{{title}}</div>
    <div>
        <img  :class=img :src=src alt="">
    </div>

</div>
</template>

<script>
export default 
{
    name:'floor',
    props:{
        title:String,
        src:String,
        img:String,
        bg:String,
        src1:String
    }
 }
</script>

 <style lang="less" scoped>

 .floor{
     width: 100%;
 }

 img{
     max-height: 120px;

 }
 
 .img60{
     max-height: 60px;
 }

 .img194{
     max-height: 194px;
 }

 </style>
<template>
<div>
    <img  :class=img :src=src alt="">
</div>
</template>

<script>
export default 
{
    props:{
        src:String,
        img:String
    }
 }
</script>

 <style lang="less" scoped>
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
<template>
<div >
    <div v-if="type==1"  >
<img  :class=img :src=src alt="">
<img  :class=img :src=src alt="">
    </div>
    
</div>
</template>

<script>
export default 
{
    props:{
        src:String,
        img:String,
        type:Number
    }
 }
</script>

 <style lang="less" scoped>
 .img120{
     max-height: 120px;

 }
 
 .img60{
     max-height: 60px;
 }

 .img194{
     max-height: 194px;
 }
 </style>
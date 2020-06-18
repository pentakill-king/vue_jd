<template>
<div class="nav1 col">

    <div class="flex">
    <div><img :src=src alt=""></div>
    <div><img :src=src alt=""></div>
    <div><img :src=src alt=""></div>
    <div><img :src=src alt=""></div>
    <div><img :src=src alt=""></div>
    </div>


<div class="flex">
    <div><img :src=src alt=""></div>
    <div><img :src=src alt=""></div>
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
        src:String
    }
 }
</script>

 <style lang="less" scoped>
 .nav1{
     max-height: 200px;
     width: 100%;
     div{width: 100%;}
 }
 img{
     max-height: 60px;
 }
 </style>
<template>
<div class="floor col">
    <div>{{title}}</div>
    <div>
        <supers :img=img :type="type" :src=src />
    </div>

</div>
</template>

<script>
import supers from '@/components/super'

export default 
{
    name:'floor',
    props:{
        title:String,
        src:String,
        img:String,
        bg:String,
        src1:String,
        type:Number
    },
    components: {
    supers,
    
    


  }
   
 }
</script>

 <style lang="less" scoped>

 .floor{
     width: 100%;
 }

 

 </style>
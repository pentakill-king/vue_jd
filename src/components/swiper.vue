<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
        <img :src="src" alt="">
        </swiper-slide>
    <swiper-slide>
        <img :src=src alt="">
        </swiper-slide>
        
    <swiper-slide>
        <img :src=src alt="">
        </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
  export default {
      props:{
          src:String
      },
    name: 'carrousel',
    data() {
      return {
           swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, true)
    }
  }
</script> 
<style lang="less" scoped>
img{
    max-height: 200px;
    width: 100%;
}

</style>
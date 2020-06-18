<template>
  <swiper ref="mySwiper" :options="swiperOptions">
   

        <div class="swiper-slide" :key="src" v-for="src in srcs">
        <img :src="src">
      </div>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
  export default {
      props:{
          srcs:Array,
          srcn:Number
      },
    name: 'carrousel',
    data() {
      return {
           swiperOptions: {
               slidesPerView: this.srcn,
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
      this.swiper.slideTo(4, 1000, true)
    }
  }
</script> 
<style lang="less" scoped>
img{
    max-height: 200px;
    width: 100%;
}

</style>
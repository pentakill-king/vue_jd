<template>
  <div class="home">
    <jdheader class="fixtop"/>
    <jdct class="ct"/>
    <jdnav class="fixnav"/>
  </div>
</template>

<script>
import jdheader from '@/components/jdheader'
import jdct from '@/components/jdct'
import jdnav from '@/components/jdnav'

export default {
  name: 'Home',
  components: {
    jdheader,
    jdct,
    jdnav


  }
}
</script>

<style lang="less" scoped>

.fixtop{
  position: fixed;
  top: 0 ;
  height: 44px;
  width: 100%;
}

.ct{
  margin: 5vh auto;
  width: 100%;
}

.fixnav{
  position: fixed;
  bottom :0;
  height: 55px;width: 100%;
}

</style>

<template>
  <div class="tops flex">
      <!-- left -->
    <div class="col">
      <div><img
          :src=src
         
        ></div>
      <div><img
          :src=src
        ></div>

    </div>
    <!-- mid -->
    <div class="col">
      <div>24点</div>
      <div class="flex">
        <div><img
            :src=src
          ></div>
        <div><img
            :src=src
          ></div>
      </div>
      <div>5折</div>

    </div>

    <!-- right -->
    <div class="col">
      <div><img
          :src=src
        ></div>
      <div><img
          :src=src
        ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String
  },
  data() {
    return {};
  }
};
</script>

 <style lang="less" scoped>
.tops {
  width: 100%;
  max-height: 200px;
  box-sizing: border-box;
}
img {
  max-height: 80px;
}
</style>
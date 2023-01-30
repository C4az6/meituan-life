<template>
  <div class="back-ward" @click="onRouteBack">
    <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>

<script>
export default {
  name: 'BackWard',
  data() {
    return {}
  },
  methods: {
    onRouteBack() {
      console.log("this: ", this);
      // 返回上一页
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~style/mixins.scss";
@import "~style/variables.scss";

.back-ward {
  position: absolute;
  top: 0;
  left: 0;
  width: $headerHeight;
  height: $headerHeight;
  @include vh-center;
  .iconfont {
    font-size: 0.2rem;
  }
}
</style>
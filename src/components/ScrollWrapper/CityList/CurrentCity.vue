<template>
  <div class="current-city">
    <span>当前城市： </span>
    <router-link :to="{name: path}">
      <span class="iconfont icon-positioning"></span>
      <span class="city">{{cityName}}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'CurrentCity',
  components: {},
  data() {
    return {
      path: "Index"
    }
  },
  computed: {
    ...mapState(['cityName'])
  }
}
</script>

<style lang="scss" scoped>
@import "~style/mixins.scss";
@import "~style/variables.scss";
.current-city {
  @include flex-row;
  align-items: center;
  height: 0.5rem;
  padding-left: 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  font-size: 0.16rem;

  .iconfont {
    color: $defaultBgColor;
    vertical-align: 0.005rem;
    margin-right: 0.04rem;
  }

  .city {
    line-height: 1rem;
  }
}
</style>
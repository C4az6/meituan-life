<template>
  <div class="false-input">
    <router-link to="search">
      <div class="input">
        <p class="placeholder">
          <span class="iconfont icon-header-search"></span>
          <span class="placeholder-text">{{placeholderText}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholderText: '美食 / 景点 / 酒店 / 按摩 / KTV'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~style/mixins.scss";
@import "~style/variables.scss";

.false-input {
  flex: 1;
  padding: 0.06rem 0.1rem 0.06rem 0;
  box-sizing: border-box;
  .input {
    @include flex-row;
    @include vh-center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    .placeholder {
      font-size: 0.14rem;
      color: #999;
      .iconfont {
        font-size: 0.18rem;
        vertical-align: -0.02rem;
        margin-right: 0.05rem;
      }
    }
  }
}
</style>
<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <h1>{{title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '列表页面'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~style/mixins.scss";
@import "~style/variables.scss";

.wrapper {
  .header {
    @include vh-center;
    height: $headerHeight;
    background-color: $defaultBgColor;
    h1 {
      font-size: 0.18rem;
    }
  }
}
</style>
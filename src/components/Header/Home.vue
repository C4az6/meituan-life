<template>
  <header class="header">

  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "~style/mixins.scss";
@import "~style/variables.scss";
.header {
  @include flex-row;
  height: $headerHeight;
  background-color: $defaultBgColor;
}
</style>
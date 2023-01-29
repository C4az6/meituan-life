<template>
  <div id="app">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: '一线生活通'
    }
  }
}
</script>

<style lang="scss" scoped>
html,
body,
#app,
.container {
  height: 100%;
}
</style>
<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
import CommonHeader from '@/components/Header/Common'
export default {
  name: 'Detail',
  components: {
    CommonHeader
  },
  data() {
    return {
      title: '详情页面'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
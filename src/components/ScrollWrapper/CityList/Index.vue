<template>
  <div class="list-wrapper">
    <city-list-sub v-for="(item, index) in cityList" :key="index" :cityInfo="item"></city-list-sub>
  </div>
</template>

<script>
import CityListSub from './Sub.vue'
import cityListData from '@/assets/data/cities.js'
export default {
  name: 'CityList',
  components: {
    CityListSub
  },
  data() {
    return {
      cityList: cityListData
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
</style>
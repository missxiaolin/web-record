<template>
  <div class="home">
    <TopView />
    <SaleView />
    <BottomView />
    <MapView />
  </div>
</template>

<script>
import TopView from '../components/TopView'
import SaleView from '../components/SaleView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'

export default {
  name: 'Home',
  data() {
    return {
      wordCloud: 'ceshi'
    }
  },
  components: {
    TopView,
    SaleView,
    BottomView,
    MapView
  },
  provide() { // 向子组件传参，子组件可以再inject接收
    return {
      getWordCloud: this.getWordCloud
    }
  },
  mounted() {
    // console.log(this.getWordCloud())
  },
  methods: {
    getWordCloud() {
      return this.wordCloud
    }
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>

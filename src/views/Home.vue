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
  components: {
    TopView,
    SaleView,
    BottomView,
    MapView
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

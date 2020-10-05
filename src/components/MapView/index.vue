<template>
  <div id="container"></div>
</template>

<script>
export default {
  mounted() {
    var map = new BMap.Map("container"); 
    var point = new BMap.Point(116.404, 39.915); 
    map.centerAndZoom(point, 15);  
  }
};
</script>

<style lang="scss">
#container {
  width: 100%;
  height: 500px;
}
</style>
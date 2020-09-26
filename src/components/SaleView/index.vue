<template>
  <v-chart :options="data" />
</template>

<script>
export default {
  data() {
    return {
      data: {
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [
          {
            type: 'line',
            data: [100, 200, 399]
          }
        ]
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100vh;
}
</style>
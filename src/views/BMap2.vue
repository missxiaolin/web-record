<template>
    <div>
        <ve-map :data="chartData"></ve-map>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                colimns: []
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.b-map {
  width: 100%;
  height: 100vh;
}
.echarts {
  width: 100%;
  height: 100vh;
}
</style>
<template>
  <div id="container"></div>
</template>

<script>
import "echarts-liquidfill";

export default {
  mounted() {
    const data = [0.68, 0.4, 0.2];
    const chart = this.$echarts.init(document.getElementById("container"));
    chart.setOption({
      series: [
        {
          type: "liquidFill",
          data,
          color: ["red", "blue", "yellow"], // 颜色控制
          itemStyle: {
            opacity: 0.6, // 透明度
          },
          emphasis: {
            itemStyle: {
              opacity: 0.9, // 选中透明度
            },
          },
        },
      ],
    });
  },
};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100vh;
}
</style>

<template>
  <div>
    <CommonCard title="累计订单量" value="2,157,420">
      <template>
        <div id="total-orders-chart"></div>
      </template>
      <template v-slot:footer>
        <span>昨日订单量</span>
        <span class="emphasis">2,157,420</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
    name: 'total-order',
    mixins: [commonCardMixin],
    mounted() {
      const charDom = document.getElementById('total-orders-chart')
      const chart = this.$echarts.init(charDom)
      chart.setOption({
        xAxis: {
          type: 'category',
          show: false, // 是否显示x轴
          boundaryGap: false, // x 两侧有边距
        },
        yAxis: {
          show: false
        },
        series: [{
          type: "line",
          data: [620, 432, 220, 121, 342, 333, 555, 660, 121, 342, 333, 555, 660, 342, 333, 555, 660],
          areaStyle: {
            color: 'purple'
          },
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        // 设置图片间距
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      })
    
    }
};
</script>

<style lang="scss" scoped>
#total-orders-chart {
  width: 100%;
  height: 100%;
}
</style>
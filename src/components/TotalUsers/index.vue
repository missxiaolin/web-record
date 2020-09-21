<template>
  <div>
      <CommonCard title="累积用户数" value="81,014">
        <template>
          <div id="total-users-chart">

          </div>
        </template>
        <template v-slot:footer>
          <div class="total-users-footer">
            <span>日同比 </span>
            <span class="emphasis">8.73%</span>
            <div class="increase"></div>
            <span class="month">月同比 </span>
            <span class="emphasis">3.73%</span>
            <div class="decrease"></div>
          </div>
        </template>
      </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
    name: 'total-users',
    mixins: [commonCardMixin],
    mounted() {
      const charDom = document.getElementById('total-users-chart')
      const chart = this.$echarts.init(charDom)
      chart.setOption({
        xAxis: {
          type: 'value',
          show: false, // 是否显示x轴
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          type: "bar",
          stack: '总量',
          data: [200],
          barWidth: 10,
          itemStyle: { // 颜色 
            color: '#45c946'
          }
        }, {
          type: "bar",
          stack: '总量',
          data: [270],
          barWidth: 10,
          itemStyle: {
            color: '#eee'
          }
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
#total-users-chart {
  width: 100%;
  height: 100%;
}
.total-users-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
.increase {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}
.decrease {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}
</style>
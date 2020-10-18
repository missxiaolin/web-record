<template>
  <div>
    <CommonCard title="累积用户数" value="81,014">
      <template>
        <div id="total-users-chart"></div>
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
import commonCardMixin from "../../mixins/commonCardMixin";
export default {
  name: "total-users",
  mixins: [commonCardMixin],
  mounted() {
    const charDom = document.getElementById("total-users-chart");
    const chart = this.$echarts.init(charDom);
    chart.setOption({
      xAxis: {
        type: "value",
        show: false, // 是否显示x轴
      },
      yAxis: {
        type: "category",
        show: false,
      },
      series: [
        {
          type: "bar",
          stack: "总量", // 合并
          data: [200],
          barWidth: 10,
          itemStyle: {
            // 颜色
            color: "#45c946",
          },
        },
        {
          type: "bar",
          stack: "总量",
          data: [270],
          barWidth: 10,
          itemStyle: {
            color: "#eee",
          },
        },
        {
          // 自定义图形
          type: "custom",
          data: [200],
          stack: "总量",
          renderItem: (params, api) => {
            const value = api.value(0); // 获取一号元素
            const endPoint = api.coord([value, 0]);

            return {
              type: "group", // 线段
              position: endPoint, // 绘图坐标系
              children: [
                {
                  type: "path",
                  shape: {
                    // 形状
                    d:
                      "M273.6 593l212.9-212.9c14.1-14.1 36.9-14.1 50.9 0l213 212.9c22.7 22.7 6.6 61.5-25.5 61.5H299.1c-32.1 0-48.1-38.8-25.5-61.5z",
                    x: -10,
                    y: 3,
                    width: 20,
                    height: 20,
                    // layout: 'cover', // 填充
                  },
                  style: {
                    fill: "#45c946",
                  },
                },
                {
                  type: "path",
                  shape: {
                    // 形状
                    d:
                      "M273.6 431l212.9 212.9c14.1 14.1 36.9 14.1 50.9 0l213-212.9c22.7-22.7 6.6-61.5-25.5-61.5H299.1c-32.1 0-48.1 38.8-25.5 61.5z",
                    x: -10,
                    y: -23,
                    width: 20,
                    height: 20,
                    // layout: 'cover'
                  },
                  style: {
                    fill: "#45c946",
                  },
                },
              ],
            };
          },
        },
      ],
      // 设置图片间距
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    });
  },
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
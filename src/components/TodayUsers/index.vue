<template>
  <div>
    <CommonCard title="进入交易用户数" value="81,014">
      <template>
        <v-chart :options="getOptions()" />
      </template>
      <template v-slot:footer>
        <span>退货率 </span>
        <span class="emphasis">5%</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from "../../mixins/commonCardMixin";
export default {
  name: "today-users",
  mixins: [commonCardMixin],
  mounted() {},
  methods: {
    getOptions() {
      return {
        color: ["#3398DB"],
        xAxis: {
          type: "category",
          data: [
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "11:00",
            "12:00",
          ],
          show: false, // 是否显示x轴
          barWidth: "60%",
        },
        yAxis: {
          show: false, // 是否显示y轴
        },
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        series: [
          {
            type: "bar",
            data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134],
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
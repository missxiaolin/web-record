<template>
  <ve-line :data="data" />
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['日期', '销售额'],
        rows: [
          { '日期': '1月1日', '销售额': 131 },
          { '日期': '1月12日', '销售额': 500 },
          { '日期': '1月13日', '销售额': 50 }
        ]
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100 vh;
}
</style>
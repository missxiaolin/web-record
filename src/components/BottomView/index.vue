<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">93,635</div>
                <v-chart :options="searchUserOption"></v-chart>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">91,635</div>
                <v-chart :options="searchNumberOption"></v-chart>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" width="180" />
                <el-table-column prop="keyword" label="关键词" width="180" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="user" label="搜索用户数" />
              </el-table>
              <el-pagination
              layout="prev, pager, next"
              :total="100"
              :page-size="4"
              @current-change="onPageChange"
               />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <v-chart :options="categoryOtion" />
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 300 
        },
        series: [{
          type: 'line',
          data: [100, 200, 44, 33, 55, 77],
          areaStyle: {
            color: 'rgba(95, 187, 255, .5)'
          },
          lineStyle: {
            color: 'rgba(95, 187, 255)'
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true, // 平滑
        }],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      },
      searchNumberOption: {},
      tableData: [
        {
          id: 1,
          rank: 1,
          keyword: '北京',
          count: 100,
          user: 90,
          range: 90
        }, {
          id: 2,
          rank: 1,
          keyword: '北京',
          count: 100,
          user: 90,
          range: 90
        }, {
          id: 3,
          rank: 1,
          keyword: '北京',
          count: 100,
          user: 90,
          range: 90
        }
      ],
      radioSelect: "品类",
      categoryOtion: {},
    };
  },
  methods: {
    onPageChange(page) {

    }
  }
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 50px;
}
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
  }
  .chart-wrapper {
    display: flex;
    flex-direction: column;
    height: 452px;
    .chart-inner {
      display: flex;
      padding: 0 10px;
      margin-top: 20px;
      .chart {
        width: 50%;
        flex: 1;
        padding: 0 10px;
        .chart-title {
          color: #999;
          font-size: 14px;
        }
        .chart-data {
          font-size: 22px;
          color: #333;
          font-weight: 500;
          letter-spacing: 2px;
        }
      }
    }
    .table-wrapper {
      flex: 1;
      margin-top: 20px;
      padding: 0 20px 20px;
      .el-pagination {
        display: flex;
        justify-content: flex-end;
        margin-top: 15px;
      }
    }
  }
}
</style>
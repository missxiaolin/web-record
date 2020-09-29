<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalSales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalOrder />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TodayUsers />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalUsers />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from "../TotalSales";
import TotalOrder from "../TotalOrder";
import TotalUsers from "../TotalUsers";
import TodayUsers from "../TodayUsers";
export default {
  name: "top-view",
  components: {
    TotalSales,
    TotalOrder,
    TotalUsers,
    TodayUsers,
  },
};
</script>

<style lang="scss">
</style>
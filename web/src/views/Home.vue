<template>
  <div class="home">
    <container v-if="isLoading" :options="{ width: 3840, height: 2160 }">
      <div class="header">
        <top-header></top-header>
      </div>
      <div class="separator"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :today-user="todayUser"
              :growth-last-day="growthLastDay"
              :growth-last-month="growthLastMonth"
            ></total-user>
          </div>
          <div class="left2">
            <average-age :data="ageData" :avg-age="averageAge"></average-age>
          </div>
          <div class="left3">
            <total-device :data="deviceData"></total-device>
          </div>
          <div class="left4">
            <total-gender :data="genderData"></total-gender>
          </div>
          <div class="left5">
            <total-rider :data="riderData"></total-rider>
          </div>
          <div class="left6">
            <hot-category :data="hotCategoryData"></hot-category>
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            <center-header :data="headerData"></center-header>
          </div>
          <div class="right-top2">
            <transform-category :data="categoryData"></transform-category>
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">
                <order-map></order-map>
              </div>
              <div class="right-left2">
                <transform-category
                  :data="categoryDataTwo"
                  :color="['rgb(178, 209, 126)', 'rgb(116, 166, 49)']"
                ></transform-category>
              </div>
              <div class="right-left3">
                <fly-box startColor="rgb(251, 253, 142)">
                  <real-time-order :data="realTimeOrderData"></real-time-order>
                </fly-box>
              </div>
              <div class="right-left4">
                <schedule-view :data="scheduleViewData"></schedule-view>
              </div>
            </div>
            <div class="right-right">
              <div class="right-right1">
                <sale-list :data="salesListData"></sale-list>
              </div>
              <div class="right-right2">
                <sales-rank :data="salesRankData"></sales-rank>
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import totalUserData from "../hooks/totalUser";
import SaleList from "../components/SaleList";
import GdbTimelineChart from "../components/GdpTimelineChart/index";

export default {
  name: "Home",
  components: {
    SaleList,
    GdbTimelineChart,
  },
  setup(props) {
    let isLoading = true;
    return {
      isLoading,
      ...totalUserData(),
    };
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(29, 29, 29);
  font-size: 20px;
  color: #ffffff;
}

#containerBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.header {
  width: 100%;
  height: 167px;
}

.separator {
  width: 100%;
  height: 10px;
}

.center {
  width: 100%;
  flex: 1;
  display: flex;
}

.center .left {
  flex: 0 0 860px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 860px;
  height: 100%;
  padding-bottom: 20px;
  box-sizing: border-box;
}

.center .left .left1 {
  height: 300px;
}

.center .left .left2 {
  height: 320px;
}

.center .left .left3 {
  height: 280px;
}

.center .left .left4 {
  height: 230px;
}

.center .left .left5 {
  height: 360px;
}

.center .left .left6 {
  height: 360px;
  background: mediumturquoise;
}

.center .right {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.center .right .right-top1 {
  width: 100%;
  height: 206px;
}

.center .right .right-top2 {
  width: 100%;
  height: 48px;
  margin: 10px 0;
}

.center .right .right-bottom {
  flex: 1;
  display: flex;
  padding-bottom: 20px;
}

.right-bottom .right-left {
  flex: 0 0 1917px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1917px;
}

.right-bottom .right-left .right-left1 {
  height: 999px;
}

.right-bottom .right-left .right-left2 {
  height: 80px;
}

.right-bottom .right-left .right-left3 {
  height: 350px;
}

.right-bottom .right-left .right-left4 {
  height: 224px;
}

.right-bottom .right-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  /* margin-right: 20px; */
}

.right-bottom .right-right .right-right1 {
  width: 100%;
  height: 999px;
}

.right-bottom .right-right .right-right2 {
  width: 100%;
  flex: 1;
  margin-top: 20px;
}
</style>
<template>
  <div>
    <CommonCard title="累计销售额" value="￥ 32,039,165">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">7.33%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">7.33%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额 </span>
        <span class="emphasis">￥ 32,039,165</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from "../../mixins/commonCardMixin";

export default {
  name: "total-sales",
  mixins: [commonCardMixin],
};
</script>

<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.compare {
  font-size: 12px;
  height: 50%;
  margin-top: 3px;
  color: #666;
  display: flex;
  flex-direction: row;
  align-items: center;
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
}
</style>
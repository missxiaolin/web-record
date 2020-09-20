<template>
  <div>
      <CommonCard 
      title="累计销售额"
      value="￥ 32,039,165"
      >
        <template>
          <div class="compare">测试</div>
        </template>
        <template v-slot:footer>
          <div>
            <span>昨日销售额</span>
            <span class="money">￥ 32,039,165</span>
          </div>
        </template>
      </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
    name: 'total-sales',
    mixins: [commonCardMixin]
};
</script>

<style lang="scss" scoped>
.compare {
  height: 100%;
  background: yellow;
}
span {
  font-size: 12px;
}
.money {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
</style>
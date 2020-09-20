<template>
  <div>
      <CommonCard title="累计销售额" />
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
    name: 'today-users',
    mixins: [commonCardMixin]
};
</script>

<style lang="scss">
</style>
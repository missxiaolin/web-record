<template>
  <div>
      <button @click="add">{{ state.count }}</button>
        double count: {{doubleCount}}
        <button @click="gotoAbout">测试跳转</button>
  </div>
</template>
<script>
import useTest from './useTest'

export default {
    setup() {
        const { add, state, doubleCount, gotoAbout } = useTest()
        return {
            add,
            state,
            doubleCount,
            gotoAbout
        }
    }
}
</script>
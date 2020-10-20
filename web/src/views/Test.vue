<template>
  <div>
      <button @click="add">{{ state.count }}</button>
        double count: {{doubleCount}}
        <button @click="gotoAbout">测试跳转</button>
        <button @click="updateNumber">vuex 测试</button>
        <div>{{number}}</div>
  </div>
</template>
<script>
import useTest from './useTest'

export default {
    setup() {
        const { add, state, doubleCount, gotoAbout, number, updateNumber } = useTest()
        return {
            add,
            state,
            doubleCount,
            gotoAbout,
            number,
            updateNumber
        }
    }
}
</script>
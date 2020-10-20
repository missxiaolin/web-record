<template>
  <div>
      <button @click="add">{{ state.count }}</button>
        double count: {{doubleCount}}
  </div>
</template>
<script>
import useTest from './useTest'

export default {
    setup() {
        const { add, state, doubleCount } = useTest()
        return {
            add,
            state,
            doubleCount
        }
    }
}
</script>
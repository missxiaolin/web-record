<template>
  <div class="box">
    <GdbTimelineChart />
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import GdbTimelineChart from '../components/GdpTimelineChart/index'

export default {
  components: {
    GdbTimelineChart
  },
  setup() {

    onMounted(() => {
    });
    return {
    };
  },
};
</script>

<style>
#app {
  align-items: flex-start;
  justify-content: flex-start;
}
.box {
  width: 100%;
  height: 100%;
}
</style>
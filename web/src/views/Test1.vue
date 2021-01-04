<template>
  <div class="box">
    <!-- <js-map-warning></js-map-warning> -->
    <!-- <rotaing-earth></rotaing-earth> -->
    <order-map></order-map>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";

export default {
  components: {
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
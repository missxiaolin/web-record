<template>
  <div class="box">
    <base-scroll-list :config="config"></base-scroll-list>
  </div>
</template>
<script>
import useTest from "./useTest";
import { ref } from "vue";

export default {
  setup() {
    const header = ref([]);
    const headerStyle = ref([]);
    const headerHeight = ref(40);
    const config = ref({});
    let data = [];
    for (let i = 0; i < 5; i++) {
      data.push([
        `同学${i}`,
        `年龄${Math.floor(Math.random() * 10 + 20)}`,
        `身高${Math.floor(Math.random() * 10 + 20)}`,
      ]);
    }
    config.value = {
      headerData: ["姓名", "年龄", "月薪"],
      headerStyle: [{ color: "red"}],
      headerHeight: 40,
      headerIndex: true,
      data,
    };

    return {
      header,
      headerStyle,
      headerHeight,
      config,
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
  width: 500px;
  height: 500px;
}
</style>
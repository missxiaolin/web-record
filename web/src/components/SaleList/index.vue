<template>
  <div class="box">
    <base-scroll-list :config="config"></base-scroll-list>
  </div>
</template>
<script>
import { ref, onMounted, watch } from "vue";

export default {
  name: "SaleList",
  props: {
    data: Array,
  },
  setup(props) {
    const config = ref({});
    const header = ref([]);
    const headerStyle = ref([]);
    const headerHeight = ref(40);

    const update = () => {
      
      let data = [];
      for (let i = 0; i < 60; i++) {
        data.push([
          `同学${i}`,
          `年龄${Math.floor(Math.random() * 10 + 20)}`,
          `身高${Math.floor(Math.random() * 10 + 20)}`,
        ]);
      }
      config.value = {
        headerData: ["姓名", "年龄", "月薪"],
        headerStyle: [{ color: "red" }],
        headerFontSize: 24,
        headerColor: "#fff",
        rowColor: "#000",
        rowFontSize: 20,
        rowStyle: [{ color: "blue" }],
        rowBg: ["rgb(40, 40, 40)", "rgb(55, 55, 55)"],
        aligns: ["center"],
        headerHeight: 40,
        headerIndex: true,
        data,
        rowNum: 10,
      };
    };

    onMounted(() => {
      update();
    });

    const stop = watch(
      () => props.data,
      () => {
        update();
        stop();
      }
    );

    return {
      header,
      headerStyle,
      headerHeight,
      config,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
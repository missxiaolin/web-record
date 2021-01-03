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
    const update = () => {
      let data = [];
      let aligns = [];
      let headerIndexData = [];
      for (let i = 0; i < props.data.length; i++) {
        data[i] = [];
        aligns[i] = "center";
        if (i % 2 === 0) {
          headerIndexData[
            i
          ] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background: rgb(40, 40, 40);">
            <div style="width:15px;height:15px;background:rgb(72,122,72);border-radius:50%;border:1px solid #fff;"/>
          </div>`;
        } else {
          headerIndexData[
            i
          ] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background: rgb(40, 40, 40);">
            <div style="width:15px;height:15px;background:rgb(38,88,104);border-radius:50%;border:1px solid #fff;"/>
          </div>`;
        }
        for (let j = 0; j < 5; j++) {
          let text = "";
          switch (j) {
            case 0:
              text = props.data[i].order;
              break;
            case 1:
              text = props.data[i].shop;
              break;
            case 2:
              text = props.data[i].rider;
              break;
            case 3:
              text = props.data[i].newShop;
              break;
            case 4:
              text = props.data[i].avgOrder;
              break;
            default:
          }
          if (j === 1 || j === 3) {
            data[i].push(`<div style="color:rgb(178,209,126)">${text}</div>`);
          } else {
            data[i].push(`<div>${text}</div>`);
          }
        }
      }
      config.value = {
        headerData: [
          "城市订单量",
          "店铺数",
          "接单人数",
          "新店铺数量",
          "人均订单量",
        ], // 表头
        headerStyle: [],
        headerFontSize: 24,
        headerHeight: 55,
        headerIndex: true,
        headerIndexData,
        headerIndexContent: "",
        headerBg: "rgb(80, 80, 80)",
        headerColor: "#fff",
        rowColor: "#fff",
        rowFontSize: 24,
        rowStyle: [],
        rowBg: ["rgb(40, 40, 40)", "rgb(55, 55, 55)"],
        aligns,
        data,
        rowNum: 12,
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
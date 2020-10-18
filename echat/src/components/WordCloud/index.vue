<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings" />
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ["name", "value"],
        rows: [
          {
            name: "一生",
            value: 100,
          },
          {
            name: "爱你",
            value: 150,
          },
        ],
      },
      chartSettings: {
        color: ["red", "yellow"],
      },
    };
  },
  mounted() {},
};
</script>
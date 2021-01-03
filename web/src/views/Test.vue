<template>
  <div class="box">
    <vue-echarts :options="options" />
  </div>
</template>
<script>
import { ref, onMounted } from "vue";

export default {
  components: {},
  setup() {
    const options = ref({});
    const update = () => {
      options.value = {
        baseOption: {
          timeline: {
            axisType: 'category',
            data: [
              {
                value: '2002-01-01',
                symbol: 'diamond',
                symbolSize: 20
              },
              '2003-01-01',
              '2004-01-01',
              '2005-01-01',
              '2006-01-01',
              '2007-01-01',
              '2008-01-01',
              '2009-01-01',
              '2010-01-01',
              '2011-01-01',
            ],
            label: {
              formatter(v) {
                return new Date(v).getFullYear()
              }
            }
          }
        },
        options: []
      };
    };

    onMounted(() => {
      update();
    });
    return {
      options,
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
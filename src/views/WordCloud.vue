<template>
    <div id="container"></div>
</template>

<script>
import 'echarts-wordcloud'
export default {
    mounted() {
        const data = [{
            name: '测试',
            value: 100
        }, {
            name: '数据可视化',
            value: 50
        }]
        const chart = this.$echarts.init(document.getElementById("container"));
        chart.setOption({
            series: [{
                type: 'wordCloud',
                data
            }]
        })
    }
}
</script>

<style lang="scss">
    #container {
        width: 100%;
        height: 100vh;
    }
</style>
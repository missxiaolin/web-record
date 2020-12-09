import { ref, onMounted, onUnmounted } from 'vue'
const ageMockData = [
    {
        startValue: 0,
        value: 131107,
        axis: '0-20',
        color: 'rgb(116, 116, 49)'
    }, {
        startValue: 0,
        value: 330831,
        axis: '20-30',
        color: 'rgb(190, 245, 99)'
    }, {
        startValue: 0,
        value: 551238,
        axis: '30-50',
        color: 'rgb(112026, 252, 137)'
    }, {
        startValue: 0,
        value: 31088,
        axis: '>50',
        color: 'rgb(251, 253, 142)'
    }
]
const deviceMockData = { "totalDevices": 1070909, "devices": [{ "key": "Android", "value": 423676 }, { "key": "iOS", "value": 373581 }, { "key": "PC", "value": 273652 }] }
const genderMockData = [{ "key": "male", "value": 1442542 }, { "key": "female", "value": 1442548 }]
const riderMockData = { "axisX": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], "orderData": { "legend1": "去年骑手月人均接单", "legend2": "今年骑手月人均接单", "data1": ["330", "420", "560", "450", "610", "890", "720", "610", "580", "750", "770", "600"], "data2": ["430", "510", "660", "550", "710", "990", "620", "550", "760", "810", "930", "720"] }, "rateData": { "legend1": "去年月新增骑手", "legend2": "今年月新增骑手", "data1": ["129", "223", "202", "197", "300", "112", "333", "249", "178", "322", "401", "167"], "data2": ["179", "263", "282", "297", "330", "344", "222", "299", "190", "455", "566", "233"] } }
const hotCategoryMockData = {"data1":{"axisX":["粉面粥店","简餐便当","汉堡披萨","香锅冒菜","小吃炸串","地方菜系","轻食简餐"],"data1":[50,29,46,88,99,69,97],"data2":[50,71,54,12,1,31,3]},"data2":{"axisX":["草莓","甘蔗","榴莲","菠萝","香蕉","梨","苹果"],"data1":[85,4,3,26,63,31,19],"data2":[15,96,97,74,37,69,81]}}

export default function () {
    let todayUser = ref(1000),
        growthLastDay = ref(10),
        growthLastMonth = ref(15),
        averageAge = ref(1),
        ageData = ref(ageMockData),
        deviceData = ref(deviceMockData),
        genderData = ref(genderMockData),
        riderData = ref(riderMockData),
        hotCategoryData = ref(hotCategoryMockData),
        task = '';

    onMounted(() => {
        task = setInterval(() => {
            todayUser.value = todayUser.value + 10;
            growthLastDay.value = growthLastDay.value + 1
            growthLastMonth.value = growthLastMonth.value + 1
            averageAge.value = averageAge.value + 2
            const _ageData = [...ageData.value]
            _ageData.forEach(item => {
                item.startValue = item.value
                item.value = item.value + 10
            })
            const _deviceData = { ...deviceData.value }
            _deviceData.totalDevices = _deviceData.totalDevices + 10
            _deviceData.devices.forEach(item => {
                item.value = item.value + 3
            })
            deviceData.value = _deviceData
            ageData.value = _ageData
        }, 3000);
    })

    onUnmounted(() => {
        clearInterval(task)
    })
    return {
        todayUser,
        growthLastDay,
        growthLastMonth,
        averageAge,
        ageData,
        deviceData,
        genderData,
        riderData,
        hotCategoryData
    }
}
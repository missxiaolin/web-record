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

export default function () {
    let todayUser = ref(1000),
        growthLastDay = ref(10),
        growthLastMonth = ref(15),
        averageAge = ref(1),
        ageData = ref(ageMockData),
        deviceData = ref(deviceMockData),
        genderData = ref(genderMockData),
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
        genderData
    }
}
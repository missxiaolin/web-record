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

export default function () {
    let todayUser = ref(1000),
        growthLastDay = ref(10),
        growthLastMonth = ref(15),
        averageAge = ref(1),
        ageData = ref(ageMockData),
        task = '';

    onMounted(() => {
        task = setInterval(() => {
            todayUser.value = todayUser.value + 10;
            growthLastDay.value = growthLastDay.value + 1
            growthLastMonth.value = growthLastMonth.value + 1
            averageAge.value = averageAge.value + 1
        }, 1000);
    })

    onUnmounted(() => {
        clearInterval(task)
    })
    return {
        todayUser,
        growthLastDay,
        growthLastMonth,
        averageAge,
        ageData
    }
}
import { ref, onMounted, onUnmounted } from 'vue'

export default function() {
    let todayUser = ref(1000),
      growthLastDay = ref(10),
      growthLastMonth = ref(15),
      task = '';
    
    onMounted(() => {
      task = setInterval(() => {
        todayUser.value = todayUser.value + 1;
        growthLastDay.value = growthLastDay.value + 1
        growthLastMonth.value = growthLastMonth.value + 1
      }, 1000);
    })

    onUnmounted(() => {
        clearInterval(task)
    })
    return {
        todayUser,
        growthLastDay,
        growthLastMonth
    }
}
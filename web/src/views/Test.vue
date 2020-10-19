<script>
import { reactive, watchEffect } from 'vue'

// 类似reacr 中的 useState
const state = reactive({
    count: 1
})

const add = () => {
    state.count++
}

// 类似 react hooks 中的 useEffect
watchEffect(() => {
    document.body.innerHTML = `测试${state.count}`
    document.body.addEventListener('click', add)
})
</script>
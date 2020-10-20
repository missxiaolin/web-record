import { ref, reactive, computed, watch, getCurrentInstance } from "vue";

export default function useTest() {
    const { ctx } = getCurrentInstance()
    console.log(ctx.$router)

    const a = ref(1)
    // 类似reacr 中的 useState
    const state = reactive({
        count: 1,
    });

    const add = () => {
        state.count++;
    };

    const gotoAbout = () => {
        ctx.$router.push('/about')
    }

    const doubleCount = computed(() => state.count * 2)

    watch(() => state.count, () =>{
        console.log('state.count changed:' + state.count)
    })

    return {
        state,
        add,
        doubleCount,
        a,
        gotoAbout
    }
}


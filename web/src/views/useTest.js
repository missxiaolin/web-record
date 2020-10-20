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

    const number = computed(() => ctx.$store.state.number)

    const updateNumber = () => {
        // ctx.$store.commit('SET_NUMBER', state.count * 100 + 1) // commit 方法1
        ctx.$store.dispatch('setNumber', state.count * 100 + 1) // 通过action 修改

    }

    const doubleCount = computed(() => state.count * 2)

    watch(() => state.count, () =>{
        console.log('state.count changed:' + state.count)
    })

    const aa = computed(() => ctx.$store.getters.aaValue)
    const updateAA = () => {
        ctx.$store.commit('SET_AA', ctx.$store.state.a.aa + 1)
    }

    return {
        state,
        add,
        doubleCount,
        a,
        aa,
        updateAA,
        gotoAbout,
        number,
        updateNumber
    }
}


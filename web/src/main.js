import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import datav from 'datav-libs'
import Svg from 'datav-libs/src/components/Svg/index'

createApp(App).use(store).use(datav).use(Svg).use(router).mount('#app')

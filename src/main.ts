import {createApp} from 'vue'
import App from './App.vue'
//全局样式
import './style.css'
//pinia
import {createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
//router4
import {router} from './router'
//element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// paina数据持久化插件
const store = createPinia()
store.use(piniaPluginPersist);
app.use(store)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
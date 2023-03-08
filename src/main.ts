import {createApp} from 'vue'
import App from './App.vue'
//全局样式
import './style.css'
import './assets/css/color.css'
import './assets/css/animation.css'

//router4
import {router} from './router'
//element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//pinia
import {createPinia} from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

const app = createApp(App)

const paina = createPinia()
paina.use(piniaPluginPersist)
app.use(paina)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
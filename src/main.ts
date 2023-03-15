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
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

const paina = createPinia()
paina.use(piniaPluginPersist)
app.use(paina)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
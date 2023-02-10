import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import {router} from './router'

const app = createApp(App)

// paina数据持久化插件
const store = createPinia()
store.use(piniaPluginPersist);
app.use(store)




app.use(router)

app.mount('#app')
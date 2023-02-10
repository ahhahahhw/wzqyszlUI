import {createRouter, createWebHashHistory} from 'vue-router'
import routes from './routes'


export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    next()
})

router.beforeResolve(async to => {

})

router.afterEach((to, from, failure) => {

})
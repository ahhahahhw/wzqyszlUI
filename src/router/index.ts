import {createRouter, createWebHashHistory} from 'vue-router'
import routes from './routes'
import {useStore} from "@/store";


export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

//红名单
const redList = ['/Manage', "/Manage/ImageManage", "/Manage/UserManage", "/Manage/BlogManage"]
router.beforeEach((to, from, next) => {
    let store: any = useStore()
    // 没有用户信息的情况下，不可以进入红名单
    if (redList.indexOf(to.path) > -1) {
        if (store.userInfo && store.userInfo.token) {
            next()
        } else {
            next({
                path: '/Login',
            })
        }
    } else {
        next()
    }
})

router.beforeResolve(async to => {

})

router.afterEach((to, from, failure) => {

})
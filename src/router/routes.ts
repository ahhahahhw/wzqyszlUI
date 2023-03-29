export default [
    {
        path: '/',
        redirect: '/Welcome',
    },
    {
        path: '/Welcome',
        component: () => import('@/components/welcome/Welcome.vue'),
    },
    {
        path: '/Login',
        component: () => import('@/components/login/Login.vue'),
    },
    {
        path: '/Home',
        component: () => import('@/components/home/Home.vue'),
        redirect: '/Home/BlogListView',
        children: [
            {
                path: 'BlogListView'
                , component: () => import('@/components/home/component/BlogListView.vue')
            },
            {
                path: 'BlogView'
                , component: () => import('@/components/home/component/BlogView.vue')
            },
            {
                path: 'BlogEditView'
                , component: () => import('@/components/home/component/BlogEditView.vue')
            },
        ]
    },
    {
        path: '/Manage',
        component: () => import('@/components/manage/Manage.vue'),
        redirect: '/Manage/ImageManage',
        children: [
            {
                path: 'ImageManage'
                , component: () => import('@/components/manage/components/ImageManage.vue')
            },
            {
                path: 'UserManage'
                , component: () => import('@/components/manage/components/UserManage.vue')
            },
            {
                path: 'BlogManage'
                , component: () => import('@/components/manage/components/BlogManage.vue')
            },
        ]
    },
]
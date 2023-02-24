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
        path: '/Home',
        component: () => import('@/components/home/Home.vue'),
    },
    {
        path: '/Test',
        component: () => import('@/components/test/Test.vue'),
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
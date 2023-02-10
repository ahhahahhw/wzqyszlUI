export default [
    {
        path: '/',
        redirect: '/Welcome',
    },
    {
        path: '/Welcome',
        component: () => import('@/views/Welcome.vue'),
    },
    {
        path: '/Home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/Test',
        component: () => import('@/views/Test.vue'),
    },
    {
        path: '/Manage',
        component: () => import('@/views/manage/Manage.vue'),
        redirect: '/manage/ImageManage',
        children: [
            {
                path: 'ImageManage'
                , component: () => import('@/views/manage/components/ImageManage.vue')
            },
            {
                path: 'UserManage'
                , component: () => import('@/views/manage/components/UserManage.vue')
            },
            {
                path: 'BlogManage'
                , component: () => import('@/views/manage/components/BlogManage.vue')
            },
        ]
    },
]
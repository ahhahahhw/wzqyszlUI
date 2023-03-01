export default [
    {
        path: '/',
        redirect: '/Home',
    },
    {
        path: '/Test',
        component: () => import('@/components/test/Test.vue'),
    },
    {
        path: '/Home',
        component: () => import('@/components/home/Home.vue'),
        redirect: '/Home/BlogList',
        children: [
            {
                path: 'BlogList'
                , component: () => import('@/components/home/component/BlogList.vue')
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
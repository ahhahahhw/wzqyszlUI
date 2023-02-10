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
]
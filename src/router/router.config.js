import index from '@/views/index.vue'
/**
 * 静态路由
 */
export const constantRouterMap = [
    {
        path: '/',
        name: 'index',
        component: index,
        meta: { title: '测试连接数据库' },
    },
]
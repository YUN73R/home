import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/index.vue'

const routes =  [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        path: '/:path(.*)*',
        redirect: '/'
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})
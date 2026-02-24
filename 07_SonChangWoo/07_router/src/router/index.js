import {createRouter, createWebHistory} from "vue-router";

import test1 from "@/router/test1.js";
import test2 from "@/router/test2.js";

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'home',
            component : () => import('@/views/01_router/HomeView.vue')
        },
        ...test1, // ...[{}, {}] -> {}, {} (전개 문법을 이용해 배열 기호 삭제)
        ...test2,
        {
            path : '/:pathMatch(.*)*', // Catch - All(모든 요청 주소 잡기)
            component : () => import('@/views/NotFound.vue')
        }
    ]
});

export default router;
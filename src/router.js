import { createRouter, createWebHistory } from 'vue-router';

import AppMan from './pages/AppMan.vue';
import AppWoman from './pages/AppWoman.vue';
import AppChildren from './pages/AppChildren.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/uomo',
            name: 'uomo',
            component: AppMan
        },
        {
            path: '/donna',
            name: 'donna',
            component: AppWoman
        },
        {
            path: '/bambini',
            name: 'bambini',
            component: AppChildren
        }
    ]
});

export { router };

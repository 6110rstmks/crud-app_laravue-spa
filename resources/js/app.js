
// import {createApp} from 'vue'
// import './bootstrap';
import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import { createApp } from 'vue/dist/vue.esm-bundler';

import App from './App.vue'

import * as VueRouter from 'vue-router'

import HeaderComponent from "./components/HeaderComponent.vue";

import TaskListComponent from "./components/TaskListComponent.vue";

import TaskShowComponent from "./components/TaskShowComponent.vue";

import TaskCreateComponent from "./components/TaskCreateComponent.vue";

import TaskEditComponent from "./components/TaskEditComponent.vue";


const routes = [
    // {
    //     path: '/',
    //     component: ExampleComponent
    // },
    // {
    //     path: '/about',
    //     component: AboutComponent
    // },
    {
        path: '/tasks',
        name: 'task.list',
        component: TaskListComponent
    },
    {
        path: '/tasks/:taskId',
        name: 'task.show',
        component: TaskShowComponent,
        props: true
    },
    {
        path: '/tasks/create',
        name: 'task.create',
        component: TaskCreateComponent
    },
    {
        path: '/tasks/:taskId/edit',
        name: 'task.edit',
        component: TaskEditComponent,
        props: true
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

const app = createApp({})

app.use(router)

// app.component('example-component', ExampleComponent)
// app.component('about-component', AboutComponent)
app.component('header-component', HeaderComponent)


app.mount('#app')

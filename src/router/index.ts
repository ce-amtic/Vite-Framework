import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "~/view/Home.vue"
import About from "~/view/About.vue"
import Layout from "~/view/Layout.vue"
import Worship from "~/view/Worship.vue"

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/About', name: 'About', component: About},
    {path: '/layout', name: 'Layout', component: Layout},
    {path: '/worship', name: 'Worship', component: Worship},
  ]

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes
})

export default router
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "~/view/Home.vue"
import Examples from "~/view/Examples.vue"
import Layout from "~/view/Layout.vue"
import Worship from "~/view/Worship.vue"

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/examples', name: 'Examples', component: Examples},
    {path: '/layout', name: 'Layout', component: Layout},
    {path: '/worship', name: 'Worship', component: Worship},
  ]

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes
})

export default router
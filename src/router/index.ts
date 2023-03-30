import { createRouter, createWebHistory } from "vue-router";
import Home from "~/view/Home.vue"
import Instance from "~/view/Instance.vue"
import Worship from "~/view/Worship.vue"

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/instance', name: 'Instance', component: Instance},
    {path: '/worship', name: 'Worship', component: Worship}
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
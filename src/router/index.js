import { createRouter, createWebHashHistory } from "vue-router"
import home from "../views/home.vue"
import toyApp from "../views/toy-app.vue"
import toyDetails from "../views/toy-details.vue"
import toyEdit from "../views/toy-edit.vue"
import toyChart from "../views/toy-chart.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/toy",
      name: "toy-app",
      component: toyApp,
    },
    {
      path: "/toy/:toyId",
      name: "toy-details",
      component: toyDetails,
    },
    {
      path: "/toy/edit/:toyId?",
      name: "toy-edit",
      component: toyEdit,
    },
    {
      path: "/toy/chart",
      name: "toy-chart",
      component: toyChart,
    },
  ],
})

export default router

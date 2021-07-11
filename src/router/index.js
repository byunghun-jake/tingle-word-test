import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"
// import Test from "@/views/Test.vue"
import TestDetail from "@/views/TestDetail.vue"
import TestResult from "@/views/TestResult.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/tests/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tests/:id",
    name: "TestDetail",
    component: TestDetail,
  },
  {
    path: "/results/:resultId",
    name: "TestResult",
    component: TestResult,
    props: true,
  },
  {
    path: "/",
    redirect: { name: "Home" },
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router

import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/IndexView.vue"),
  },
  {
    path: "/me",
    name: "me",
    component: () => import("@/views/MeView.vue"),
  },
  {
    path: "/produce",
    name: "produce",
    component: () => import("@/views/ProduceView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: () => import("@/views/ShopCartView.vue"),
  },
  {
    path: "/order",
    name: "order",
    component: () => import("@/views/OrderView.vue"),
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import("@/views/PayView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

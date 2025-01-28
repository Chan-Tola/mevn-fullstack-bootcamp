import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/home",
    component: () => import("../pages/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // use history mode,
  routes,
});

export default router;

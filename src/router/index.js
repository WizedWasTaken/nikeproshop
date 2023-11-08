import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/FrontPage.vue"),
    },
    {
      path: "/contact",
      component: () => import("../components/ContactPage.vue"),
    },
    {
      path: "/history",
      component: () => import("../components/HistoryPage.vue"),
    },
    {
      path: "/about",
      component: () => import("../components/AboutPage.vue"),
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/MainPage.vue"),
  },
  {
    path: "/tasks",
    component: () => import("../pages/TaskPage.vue"),
  },
  {
    path: "/friends",
    component: () => import("../pages/FriendsPage.vue"),
  },
  {
    path: "/earnings",
    component: () => import("../pages/EarnPage.vue"),
  },
  {
    path: "/rating",
    component: () => import("../pages/RatingPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

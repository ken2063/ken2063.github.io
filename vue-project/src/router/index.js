// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";
// import { createRouter, createWebHistory} from 'vue-router'
const routes = [
  {
    path: "/",
    name: "/",
    component: () => import("@/views/indexGuide.vue"),
  },

  //   최석
  {
    path: "/comaLab01",
    name: "/comaLab01",
    component: () => import("@/views/layout/comaLab01/index.vue"),
  },
  {
    path: "/comaLab01/HelloWorld",
    name: "/comaLab01/HelloWorld",
    component: () => import("@/views/layout/comaLab01/HelloWorld.vue"),
  },
  {
    path: "/comaLab01/CareerDescription",
    name: "/comaLab01/CareerDescription",
    component: () => import("@/views/layout/comaLab01/CareerDescription.vue"),
  },
  {
    path: "/comaLab01/CareerDescription_old",
    name: "/comaLab01/CareerDescription_old",
    component: () => import("@/views/layout/comaLab01/CareerDescription_old.vue"),
  },
  {
    path: "/comaLab01/portfolio",
    name: "/comaLab01/portfolio",
    component: () => import("@/views/layout/comaLab01/portfolio.vue"),
  },

  // not found
  // {
  //     path: "/notFound",
  //     name: "/notFound",
  //     component:()=>import('@/views/layout/notFound.vue')
  // },
  // {
  //     path: "/:pathMatch(.*)*",
  //     redirect: "/notFound"
  // },
  // not found
];
const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
});
export default router;

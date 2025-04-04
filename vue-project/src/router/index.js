// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";
// import { createRouter, createWebHistory} from 'vue-router'
const routes = [
  {
    path: "/",
    name: "/",
    component: () => import("@/views/indexGuide.vue"),
  },
  {
    path: "/indexGuide",
    name: "/indexGuide",
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
    path: "/comaLab01/Portfolio",
    name: "/comaLab01/Portfolio",
    component: () => import("@/views/layout/comaLab01/Portfolio.vue"),
  },
  {
    path: "/comaLab01/Home",
    name: "/comaLab01/Home",
    component: () => import("@/components/comaLab01/contents/home.vue"),
  },
  {
    path: "/comaLab01/About",
    name: "/comaLab01/About",
    component: () => import("@/components/comaLab01/contents/about.vue"),
  },
  {
    path: "/comaLab01/Skill",
    name: "/comaLab01/Skill",
    component: () => import("@/components/comaLab01/contents/skill.vue"),
  },
  // {
  //   path: "/comaLab01/Portfolio",
  //   name: "/comaLab01/Portfolio",
  //   component: () => import("@/components/comaLab01/contents/portfolio.vue"),
  // },
  {
    path: "/comaLab01/Contact",
    name: "/comaLab01/Contact",
    component: () => import("@/components/comaLab01/contents/contact.vue"),
  },
  {
    path: "/comaLab01/Career",
    name: "/comaLab01/Career",
    component: () => import("@/components/comaLab01/contents/Career.vue"),
  },

  //   전태수
  {
    path: "/comaLab02",
    name: "/comaLab02",
    component: () => import("@/views/layout/comaLab02/index.vue"),
  },
  {
    path: "/comaLab02/HelloWorld",
    name: "/comaLab02/HelloWorld",
    component: () => import("@/views/layout/comaLab02/HelloWorld.vue"),
  },

  //   이찬용
  {
    path: "/comaLab03",
    name: "/comaLab03",
    component: () => import("@/views/layout/comaLab03/index.vue"),
  },
  {
    path: "/comaLab03/HelloWorld",
    name: "/comaLab03/HelloWorld",
    component: () => import("@/views/layout/comaLab03/HelloWorld.vue"),
  },

  //   최정규
  {
    path: "/comaLab04",
    name: "/comaLab04",
    component: () => import("@/views/layout/comaLab04/index.vue"),
  },
  {
    path: "/comaLab04/HelloWorld",
    name: "/comaLab04/HelloWorld",
    component: () => import("@/views/layout/comaLab04/HelloWorld.vue"),
  },

  //   김태리
  {
    path: "/comaLab05",
    name: "/comaLab05",
    component: () => import("@/views/layout/comaLab05/index.vue"),
  },
  {
    path: "/comaLab05/HelloWorld",
    name: "/comaLab05/HelloWorld",
    component: () => import("@/views/layout/comaLab05/HelloWorld.vue"),
  },
  {
    path: "/DArending",
    name: "/DArending",
    component: () => import("@/views/DArending.vue"),
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

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/bio",
    name: "bio",
    component: () => import("@/views/Bio.vue"),
  },
  {
    path: "/projects",
    name: "projects",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

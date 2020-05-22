import Vue from "vue";
import VueRouter from "vue-router";
import Bio from "@/views/Bio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/bio",
    name: "bio",
    component: Bio,
  },
  {
    path: "/projects",
    name: "projects",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

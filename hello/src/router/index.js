import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Projects from "@/views/Projects.vue";

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
    component: Projects,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

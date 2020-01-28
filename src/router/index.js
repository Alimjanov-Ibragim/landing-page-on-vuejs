import Vue from "vue";
import VueRouter from "vue-router";

import Main from "@/views/Main";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
  // linkActiveClass: "active"
});

export default router;

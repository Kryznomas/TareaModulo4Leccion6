import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Router1 from "../views/Router1.vue"
import Router2 from "../views/Router2.vue"
import Router3 from "../views/Router3.vue"
import Router4 from "../views/Router4.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/router1",
    name: "Router1",
    component: Router1
  },
  {
    path: "/Router2",
    name: "Router2",
    component: Router2
  },
  {
    path: "/Router3",
    name: "Router3",
    component: Router3
  },
  {
    path: "/Router4",
    name: "Router4",
    component: Router4
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

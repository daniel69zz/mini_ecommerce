import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Nosotros from "./Nosotros.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/nosotros", component: Nosotros },
  ],
});

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Nosotros from "../../pages/Nosotros.vue";
import CartPage from "../CartPage.vue";
import Productos from "@/pages/Productos.vue";
import Register from "@/pages/Register.vue";
import Login from "@/pages/Login.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/productos", component: Productos },
    { path: "/", component: Home },
    { path: "/nosotros", component: Nosotros },
    { path: "/cart", component: CartPage },
    { path: "/registro", component: Register },
    { path: "/login", component: Login },
  ],
});

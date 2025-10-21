import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Nosotros from "../pages/Nosotros.vue";
import CartPage from "./CartPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/nosotros", component: Nosotros },
        { path: "/cart", component: CartPage },
    ],
});

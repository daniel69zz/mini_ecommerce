<template>
  <div
    class="h-[60px] sticky top-0 z-50 gap-12 py-[8px] px-[16px] flex justify-between items-center bg-[#000]"
  >
    <!-- Logo -->
    <router-link
      to="/"
      class="flex justify-center items-center gap-[10px] w-[25%]"
    >
      <img
        src="@/assets/logo_v1_minimarket-removebg-preview.jpg"
        alt="LOGO"
        class="h-[40px]"
      />
      <h1 class="text-white font-bold">MiniMarket+</h1>
    </router-link>

    <!-- Navegación -->
    <nav class="flex justify-around items-center w-full">
      <router-link
        class="flex items-center gap-[8px] text-[#fff] no-underline"
        to="/Nosotros"
      >
        <span class="font-bold">SOBRE NOSOTROS</span>
      </router-link>

      <!-- Dropdown de Productos -->
      <div class="relative group">
        <router-link
          class="flex items-center gap-[8px] text-[#fff] no-underline"
          to="/productos"
        >
          <span class="font-bold">PRODUCTOS</span>
        </router-link>

        <!-- Lista desplegable de categorías -->
        <div
          class="absolute left-0 mt-2 w-48 bg-[#1a1a1a] border border-[#333] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
        >
          <ul class="py-2">
            <li>
              <router-link
                to="/productos?categoria=Abarrotes"
                class="block px-4 py-2 text-sm text-white hover:bg-[#009966] hover:text-white transition-colors no-underline"
              >
                Abarrotes
              </router-link>
            </li>
            <li>
              <router-link
                to="/productos?categoria=Bebidas"
                class="block px-4 py-2 text-sm text-white hover:bg-[#009966] hover:text-white transition-colors no-underline"
              >
                Bebidas
              </router-link>
            </li>
            <li>
              <router-link
                to="/productos?categoria=Lacteos"
                class="block px-4 py-2 text-sm text-white hover:bg-[#009966] hover:text-white transition-colors no-underline"
              >
                Lácteos
              </router-link>
            </li>
            <li>
              <router-link
                to="/productos?categoria=Carnes y Embutidos"
                class="block px-4 py-2 text-sm text-white hover:bg-[#009966] hover:text-white transition-colors no-underline"
              >
                Carnes y Embutidos
              </router-link>
            </li>
            <li>
              <router-link
                to="/productos?categoria=Frutas y Verduras"
                class="block px-4 py-2 text-sm text-white hover:bg-[#009966] hover:text-white transition-colors no-underline"
              >
                Frutas y Verduras
              </router-link>
            </li>
            <li>
              <router-link
                to="/productos?categoria=Limpieza e Higiene"
                class="block px-4 py-2 text-sm text-white hover:bg-[#009966] hover:text-white transition-colors no-underline"
              >
                Limpieza e Higiene
              </router-link>
            </li>
            <li>
              <router-link
                to="/productos?categoria=Snacks y Dulces"
                class="block px-4 py-2 text-sm text-white hover:bg-[#009966] hover:text-white transition-colors no-underline"
              >
                Snacks y Dulces
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Iconos (carrito y login) -->
    <div class="flex gap-[20px] items-center w-[30%] font-bold justify-end">
      <router-link to="/cart" class="text-[#fff] flex items-center">
        <svg
          viewBox="0 0 24 24"
          class="w-6 h-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <ShoppingCart />
        </svg>
        <span v-if="count > 0" class="text-[#fff] ml-[10px]">{{ count }}</span>
      </router-link>

      <!-- login -->
      <button
        @click="mostrarLogin = true"
        class="bg-[#009966] text-white p-[6px] rounded-[15px] hover:bg-[#00b377] transition"
      >
        Iniciar Sesión
      </button>
    </div>

    <LoginCard
      v-if="mostrarLogin"
      @cerrar="mostrarLogin = false"
      @abrir-register="mostrarRegister = true"
    />
    <RegisterCard v-if="mostrarRegister" @cerrar="mostrarRegister = false" />
  </div>
</template>

<script setup>
import RegisterCard from "./RegisterCard.vue";
import { computed, ref } from "vue";
import { ShoppingCart } from "lucide-vue-next";
import { useCartStore } from "@/components/utils/cart";
import LoginCard from "@/components/LoginCard.vue";

const cart = useCartStore();
const count = computed(() => cart.itemCount);
const mostrarLogin = ref(false);
const mostrarRegister = ref(false);
</script>

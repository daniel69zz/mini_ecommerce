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

      <router-link
        class="flex items-center gap-[8px] text-[#fff] no-underline"
        to="/productos"
      >
        <span class="font-bold">PRODUCTOS</span>
      </router-link>
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

      <!-- Botón para abrir login -->
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

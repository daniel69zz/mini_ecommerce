<template>
  <div
    class="h-[60px] sticky top-0 z-50 gap-12 py-[8px] px-[16px] flex justify-between items-center"
  >
    <router-link
      to="/"
      class="flex justify-center items-center gap-[10px] w-[25%]"
    >
      <div>
        <img
          src="@/assets/logo_v1_minimarket-removebg-preview.jpg"
          alt="LOGO"
        />
      </div>
      <h1>MiniMarket+</h1>
    </router-link>
    <!-- aqui entraria un arreglo de weas -->
    <nav class="flex justify-around items-center w-full">
      <router-link
        class="flex items-center gap-[8px] text-[#fff] no-underline"
        to="/Nosotros"
      >
        <span class="font-bold">SOBRE NOSOTROS</span>
      </router-link>

      <router-link
        class="flex items-center gap-[8px] text-[#fff] no-underline"
        to="/Productos"
      >
        <span class="font-bold">PRODUCTOS</span>
      </router-link>
    </nav>

    <!-- fin arreglo -->

    <div class="flex gap-[20px] items-center w-[30%] font-bold">
      <router-link to="/cart" class="text-[#fff] flex">
        <svg
          viewBox="0 0 24 24"
          class="w-6 h-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <ShoppingCart />
        </svg>
        <span v-if="count > 0" class="text-[#fff] ml-[10px]">
          {{ count }}
        </span>
      </router-link>
      <button class="bg-[#009966] p-[6px] rounded-[15px]">
        Iniciar Sesión
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { ShoppingCart } from "lucide-vue-next";
import { useCartStore } from "@/components/utils/cart";

const cart = useCartStore();
const count = computed(() => cart.itemCount);
</script>

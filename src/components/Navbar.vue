<template>
  <div
    class="h-[60px] sticky top-0 z-50 py-[8px] px-[16px] flex justify-between items-center bg-[#000]"
  >
    <!-- Logo -->
    <router-link
      to="/"
      class="flex justify-center items-center gap-[6px] sm:gap-[10px]"
    >
      <img
        src="@/assets/logo_v1_minimarket-removebg-preview.jpg"
        alt="LOGO"
        class="h-[35px] sm:h-[40px]"
      />
      <h1
        class="hidden sm:block text-white font-bold text-[16px] sm:text-[18px]"
      >
        MiniMarket+
      </h1>
    </router-link>

    <!-- Navegación Desktop (oculto en mobile) -->
    <nav class="hidden lg:flex justify-around items-center w-full gap-8">
      <router-link
        class="flex items-center gap-[8px] text-[#fff] no-underline hover:text-[#009966] transition"
        to="/Nosotros"
      >
        <span class="font-bold">SOBRE NOSOTROS</span>
      </router-link>

      <!-- Dropdown de Productos Desktop -->
      <div class="relative group">
        <router-link
          class="flex items-center gap-[8px] text-[#fff] no-underline hover:text-[#009966] transition"
          to="/productos"
        >
          <span class="font-bold">PRODUCTOS</span>
        </router-link>

        <!-- Lista desplegable de categorías Desktop -->
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

    <!-- Iconos Mobile y Desktop -->
    <div class="flex gap-[12px] sm:gap-[20px] items-center font-bold">
      <!-- Icono Info (Sobre Nosotros) - Solo Mobile -->
      <router-link
        to="/Nosotros"
        class="lg:hidden text-[#fff] flex items-center hover:text-[#009966] transition"
        title="Sobre Nosotros"
      >
        <Info class="w-6 h-6" />
      </router-link>

      <!-- Icono Productos con Dropdown - Solo Mobile -->
      <div class="relative lg:hidden group">
        <button
          class="text-[#fff] flex items-center hover:text-[#009966] transition"
          title="Productos"
        >
          <Package class="w-6 h-6" />
        </button>

        <!-- Lista desplegable de categorías Mobile -->
        <div
          class="absolute right-0 mt-2 w-48 bg-[#1a1a1a] border border-[#333] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
        >
          <ul class="py-2">
            <li>
              <router-link
                to="/productos"
                class="block px-4 py-2 text-sm text-white hover:bg-[#009966] hover:text-white transition-colors no-underline font-bold"
              >
                Ver Todos
              </router-link>
            </li>
            <li class="border-t border-[#333] my-1"></li>
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

      <!-- Icono Carrito -->
      <router-link
        to="/cart"
        class="text-[#fff] flex items-center hover:text-[#009966] transition"
      >
        <ShoppingCart class="w-6 h-6" />
        <span
          v-if="count > 0"
          class="text-[#fff] ml-[6px] sm:ml-[10px] text-sm sm:text-base"
        >
          {{ count }}
        </span>
      </router-link>

      <!-- Icono/Botón Login -->
      <button
        @click="mostrarLogin = true"
        class="text-white hover:text-[#009966] transition lg:bg-[#009966] lg:px-4 lg:py-2 lg:rounded-[15px] lg:hover:bg-[#00b377]"
        title="Iniciar Sesión"
      >
        <User class="w-6 h-6 lg:hidden" />
        <span class="hidden lg:inline">Iniciar Sesión</span>
      </button>
    </div>

    <!-- Modales -->
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
import { ShoppingCart, User, Info, Package } from "lucide-vue-next";
import { useCartStore } from "@/components/utils/cart";
import LoginCard from "@/components/LoginCard.vue";

const cart = useCartStore();
const count = computed(() => cart.itemCount);
const mostrarLogin = ref(false);
const mostrarRegister = ref(false);
</script>

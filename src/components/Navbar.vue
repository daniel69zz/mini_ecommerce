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

        <div class="flex gap-[20px] items-center w-[30%]">
            <!-- Icono carrito (SVG simple) -->
            <router-link to="/cart" class="text-[#fff]">
                <svg
                    viewBox="0 0 24 24"
                    class="w-6 h-6"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        d="M7 18a2 2 0 1 0 .001 3.999A2 2 0 0 0 7 18Zm10 0a2 2 0 1 0 .001 3.999A2 2 0 0 0 17 18ZM6.34 6l.94 5.62A3 3 0 0 0 10.22 14h5.9a3 3 0 0 0 2.96-2.47l.67-3.98A1 1 0 0 0 18.78 6H6.34ZM5 4h-.74a1 1 0 1 1 0-2H6a1 1 0 0 1 .98.8l.22 1.2H20a1 1 0 1 1 0 2H6.34L5.9 4.2A1 1 0 0 0 5 4Z"
                    />
                </svg>
                <!-- Badge contador -->
                <span
                    v-if="count > 0"
                    class="text-[#fff] absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full text-[12px] font-bold flex items-center justify-center"
                >
                    {{ count }}
                </span>
            </router-link>
            <button class="bg-[#009966] p-[6px] rounded-[15px] font-bold">
                Iniciar Sesión
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "@/components/cart";

const cart = useCartStore();
const count = computed(() => cart.itemCount);
</script>

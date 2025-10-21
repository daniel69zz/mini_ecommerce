<template>
    <div class="min-h-dvh flex flex-col bg-[#0b0809] text-white">
        <header>
            <Navbar />
        </header>

        <main class="flex-1">
            <RouterView />
        </main>

        <Footer />
    </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

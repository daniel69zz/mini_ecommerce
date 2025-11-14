<template>
  <div
    class="min-h-dvh flex flex-col bg-[#0b0809] text-white overflow-x-hidden"
  >
    <header>
      <Navbar />
    </header>

    <main class="flex-1 overflow-x-hidden">
      <RouterView />
    </main>

    <footer>
      <Lowinfo />
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Lowinfo from "./components/Lowinfo.vue";
</script>

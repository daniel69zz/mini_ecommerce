<template>
  <div class="px-8 py-10 bg-[#009966] min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">
      {{
        categoriaActual ? `Categoría: ${categoriaActual}` : "Nuestros Productos"
      }}
    </h1>

    <div
      class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <ProductoCard
        v-for="producto in productos"
        :key="producto.id"
        :producto="producto"
      />
    </div>
  </div>
</template>

<script setup>
import ProductoCard from "@/components/ProductoCard.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { data_prod } from "@/data/db";

const route = useRoute();
const productos = ref(data_prod);
const categoriaActual = ref(null);

const buscarPorCategoria = (categoria) => {
  if (!categoria) {
    productos.value = data_prod;
    categoriaActual.value = null;
  } else {
    // Filtrar productos por la categoría
    productos.value = data_prod.filter(
      (producto) => producto.categoria === categoria
    );
    categoriaActual.value = categoria;
  }
};

buscarPorCategoria(route.query.categoria);

// Vigilar cambios en la URL para actualizar el filtro
watch(
  () => route.query.categoria,
  (nuevaCategoria) => {
    buscarPorCategoria(nuevaCategoria);
  }
);
</script>

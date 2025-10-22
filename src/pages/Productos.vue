<template>
  <div class="px-8 py-10 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Nuestros Productos</h1>

    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductoCard
        v-for="(producto, index) in productos"
        :key="index"
        :producto="producto"
      />
    </div>
  </div>
</template>

<script setup>
import ProductoCard from '@/components/ProductoCard.vue';

const productos = [
  {
    nombre: 'Insecticida Baygon 300ml',
    descripcion: 'Elimina cucarachas y hormigas al instante.',
    precio: 42.5,
    imagen: 'https://cdn-icons-png.flaticon.com/512/1553/1553031.png',
  },
  {
    nombre: 'Aceite Fino 1L',
    descripcion: 'Aceite vegetal de primera calidad.',
    precio: 25.0,
    imagen: 'https://cdn-icons-png.flaticon.com/512/6978/6978182.png',
  },
  {
    nombre: 'Detergente Ariel 800g',
    descripcion: 'Limpieza profunda y aroma fresco.',
    precio: 38.9,
    imagen: 'https://cdn-icons-png.flaticon.com/512/992/992747.png',
  },
  // agrega más productos...
];
</script>

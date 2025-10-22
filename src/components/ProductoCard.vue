<template>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg hover:scale-105 duration-200">
    <a href="#">
      <img
        :src="producto.imagen"
        :alt="producto.nombre"
        class="w-full h-48 object-contain p-4"
      />
    </a>

    <div class="p-4 flex flex-col justify-between h-40">
      <a href="#">
        <h2 class="text-lg font-semibold text-gray-800 hover:text-green-600 line-clamp-2">
          {{ producto.nombre }}
        </h2>
      </a>
      <p class="text-sm text-gray-500 line-clamp-2">
        {{ producto.descripcion }}
      </p>

      <div class="flex justify-between items-center mt-3">
        <span class="text-lg font-bold text-green-600">Bs. {{ producto.precio }}</span>
        <button
          class="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
        >
          AGREGAR
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  producto: {
    type: Object,
    required: true
  }
})
</script>

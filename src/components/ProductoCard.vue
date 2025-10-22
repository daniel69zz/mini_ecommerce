<template>
  <div
    class="bg-gray-300 rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg hover:scale-105 duration-200"
  >
    <a href="#">
      <img
        :src="producto.imagen"
        :alt="producto.nombre"
        class="w-full h-48 object-contain p-4"
      />
    </a>

    <div class="p-4 flex flex-col justify-between h-52">
      <!-- Badge de categoría -->
      <div
        class="bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-full w-fit mb-1"
      >
        {{ producto.categoria }}
    </div>

      <a href="#">
        <h2
          class="text-lg font-semibold text-gray-800 hover:text-green-600 line-clamp-2"
        >
          {{ producto.nombre }}
        </h2>
      </a>

      <p class="text-sm text-gray-600 line-clamp-2">
        {{ producto.descripcion }}
      </p>

      <div class="flex justify-between items-center mt-3">
        <span class="text-lg font-bold text-green-600">
          Bs. {{ producto.precio }}
        </span>
        <!-- Contador -->
        <div class="flex items-center gap-2">
          <button
            @click="decrementar"
            class="bg-red-600 text-white px-2 py-1 rounded-lg text-sm font-semibold hover:bg-red-700 transition"
          >
            -
          </button>

          <span
            class="bg-white text-gray-800 font-semibold px-3 py-1 rounded-lg shadow-inner min-w-[40px] text-center"
          >
            {{ cantidad }}
          </span>

          <button
            @click="incrementar"
            class="bg-green-600 text-white px-2 py-1 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  producto: {
    type: Object,
    required: true
  }
})

// Estado local del contador
const cantidad = ref(0)

// Funciones
const incrementar = () => {
  cantidad.value++
}

const decrementar = () => {
  if (cantidad.value > 0) cantidad.value--
}
</script>

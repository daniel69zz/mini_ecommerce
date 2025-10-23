<template>
  <section
    class="mx-auto max-w-[1200px] px-4 py-6 bg-[#009966] my-[2%] rounded-[10px]"
  >
    <h2 class="text-2xl font-bold mb-4">Tu carrito</h2>

    <div v-if="items.length === 0" class="p-6 rounded-xl bg-white shadow">
      <p class="text-gray-700">Tu carrito está vacío.</p>
      <RouterLink
        to="/productos"
        class="inline-block mt-4 px-4 py-2 rounded-xl bg-black text-white no-underline"
      >
        Seguir comprando
      </RouterLink>
    </div>

    <div v-else class="grid gap-4">
      <div
        v-for="it in items"
        :key="it.id"
        class="flex items-center justify-between p-4 rounded-xl bg-white shadow"
      >
        <!-- CARD DE PRODUCTO -->
        <div class="flex items-center gap-4">
          <img
            v-if="it.imagen"
            :src="it.imagen"
            alt=""
            class="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 class="font-semibold text-black">
              {{ it.nombre }}
            </h3>
            <p class="text-sm text-gray-600">Bs {{ it.precio.toFixed(2) }}</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <label class="text-sm text-black">Cantidad</label>
          <input
            type="number"
            class="w-16 rounded-lg border px-2 py-1 text-gray-700"
            min="1"
            :value="it.qty"
            @input="onQty(it.id, $event.target.value)"
          />
          <button
            class="px-3 py-1 rounded-lg bg-red-600 text-white"
            @click="remove(it.id)"
          >
            Quitar
          </button>
        </div>
      </div>

      <div
        class="p-4 rounded-xl bg-white text-black shadow flex items-center justify-between"
      >
        <p class="text-lg font-semibold">Subtotal</p>
        <p class="text-lg font-bold">Bs {{ subtotal.toFixed(2) }}</p>
      </div>

      <div class="flex gap-3">
        <button class="px-4 py-2 rounded-xl bg-black" @click="clear">
          Vaciar carrito
        </button>
        <button class="px-4 py-2 rounded-xl bg-black text-white">
          Proceder al pago
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "./utils/cart";
import { RouterLink } from "vue-router";

const cart = useCartStore();
const items = computed(() => cart.items);
const subtotal = computed(() => cart.subtotal);

function onQty(id, value) {
  const n = Number(value) || 1;
  cart.setQty(id, n);
}
function remove(id) {
  cart.removeItem(id);
}
function clear() {
  cart.clear();
}

function flag() {
  console.log(cart.items);
}
</script>

<template>
  <section
    class="mx-auto max-w-[1200px] px-4 py-6 bg-[#009966] my-[2%] rounded-[10px]"
  >
    <h2 class="text-2xl font-bold mb-4">Tu carrito</h2>

    <!-- BANNER DE EXITO -->
    <div v-if="success && !showPayment" class="mb-4 p-4 rounded-lg bg-green-50 border border-green-200">
      <p class="font-semibold text-green-700">Compra realizada con éxito ✅</p>
      <p class="text-gray-700">
        Transacción: <span class="font-mono">{{ txId }}</span>
        — Fecha: {{ txDate }}
      </p>
    </div>

    <!-- CARRITO VACIO -->
    <div v-if="items.length === 0" class="p-6 rounded-xl bg-white shadow">
      <p class="text-gray-700">Tu carrito está vacío.</p>
      <RouterLink
        to="/productos"
        class="inline-block mt-4 px-4 py-2 rounded-xl bg-black text-white no-underline"
      >
        Seguir comprando
      </RouterLink>
    </div>

    <!-- CONTENIDO DEL CARRITO (cuando hay items) -->
    <div v-else class="grid gap-4">

      <!-- PANTALLA DE PAGO -->
      <div v-if="showPayment" class="p-4 rounded-xl bg-white text-black shadow">
        <h3 class="text-lg font-semibold mb-4">Proceso de pago</h3>

        <!-- TOTAL A PAGAR -->
        <div class="mb-4">
          <p class="font-semibold">Total a pagar</p>
          <p class="text-2xl font-bold">Bs {{ subtotal.toFixed(2) }}</p>
        </div>

        <!--  SELECCION DE METODO DE PAGO -->
        <div class="mb-4">
          <p class="font-semibold mb-2">Elige método de pago</p>
          <div class="flex gap-3 items-center">
            <label class="flex items-center gap-2">
              <input type="radio" value="card" v-model="method" />
              Tarjeta (Visa/Mastercard)
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" value="transfer" v-model="method" />
              Transferencia bancaria
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" value="movil" v-model="method" />
              Pago móvil / Referencia
            </label>
          </div>
        </div>

        <!--  FORMULARIO - TARJETA -->
        <div v-if="method === 'card'" class="mb-4">
          <label class="block text-sm">Nombre en la tarjeta</label>
          <input v-model="card.name" type="text" class="w-full rounded-lg border px-3 py-2 mb-2" placeholder="Como aparece en la tarjeta" />

          <label class="block text-sm">Número de tarjeta</label>
          <input v-model="card.number" type="text" maxlength="19" class="w-full rounded-lg border px-3 py-2 mb-2" placeholder="1111 2222 3333 4444" />

          <div class="flex gap-2">
            <div class="flex-1">
              <label class="block text-sm">Vencimiento (MM/AA)</label>
              <input v-model="card.exp" type="text" maxlength="5" class="w-full rounded-lg border px-3 py-2" placeholder="MM/AA" />
            </div>
            <div class="w-28">
              <label class="block text-sm">CVV</label>
              <input v-model="card.cvv" type="password" maxlength="4" class="w-full rounded-lg border px-3 py-2" placeholder="123" />
            </div>
          </div>
        </div>

        <!-- FORMULARIO - TRANSFERENCIA -->
        <div v-if="method === 'transfer'" class="mb-4">
          <p class="text-sm mb-2">Instrucciones de transferencia:</p>
          <ul class="text-sm list-disc pl-5 mb-2">
            <li>Banco: Banco Ejemplo S.A.</li>
            <li>Cuenta: 123456789</li>
            <li>Titular: Tienda Demo</li>
          </ul>
          <label class="block text-sm">Número de referencia de la transferencia</label>
          <input v-model="transfer.ref" type="text" class="w-full rounded-lg border px-3 py-2" placeholder="Ej: 202511140001" />
        </div>

        <!--  FORMULARIO - PAGO MOVIL -->
        <div v-if="method === 'movil'" class="mb-4">
          <p class="text-sm mb-2">Usa tu app de pago móvil y registra la referencia:</p>
          <label class="block text-sm">Teléfono / Cuenta</label>
          <input v-model="movil.phone" type="text" class="w-full rounded-lg border px-3 py-2 mb-2" placeholder="7XXXXXXXX" />
          <label class="block text-sm">Referencia</label>
          <input v-model="movil.ref" type="text" class="w-full rounded-lg border px-3 py-2" placeholder="Ej: MOV12345" />
        </div>

        <!-- BOTONES DE PAGO -->
        <div class="flex items-center gap-3">
          <button
            class="px-4 py-2 rounded-xl bg-black text-white"
            :disabled="processing"
            @click="submitPayment"
          >
            {{ processing ? 'Procesando...' : 'Simular pago' }}
          </button>
          <button class="px-4 py-2 rounded-xl bg-gray-200" @click="closePayment" :disabled="processing">Cancelar</button>
        </div>
      </div>

      <!-- LISTA DE PRODUCTOS EN EL CARRITO -->
      <div
        v-for="it in items"
        :key="it.id"
        class="flex items-center justify-between p-4 rounded-xl bg-white shadow"
      >
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

      <!-- SUBTOTAL -->
      <div
        class="p-4 rounded-xl bg-white text-black shadow flex items-center justify-between"
      >
        <p class="text-lg font-semibold">Subtotal</p>
        <p class="text-lg font-bold">Bs {{ subtotal.toFixed(2) }}</p>
      </div>

      <!-- BOTONES DE ACCION PRINCIPALES -->
      <div class="flex gap-3">
        <button class="px-4 py-2 rounded-xl bg-black" @click="clear">
          Vaciar carrito
        </button>
        <button class="px-4 py-2 rounded-xl bg-black text-white" @click="openPayment">
          Proceder al pago
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>

// IMPORTS Y ESTADO

import { ref, computed } from "vue";
import { useCartStore } from "./utils/cart";
import { RouterLink} from "vue-router";

const cart = useCartStore();
const items = computed(() => cart.items); 
const subtotal = computed(() => cart.subtotal); 


// ESTADOS LOCALES

const showPayment = ref(false); 
const method = ref("card"); 
const processing = ref(false); 
const success = ref(false); 
const txId = ref(""); 
const txDate = ref(""); 

// formularios de pago individuales
const card = ref({ name: "", number: "", exp: "", cvv: "" });
const transfer = ref({ ref: "" });
const movil = ref({ phone: "", ref: "" });


// FUNCIONES - CONTROL DEL CARRITO
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


// FUNCIONES - PAGO
function openPayment() {
  // resetea estados del formulario
  success.value = false;
  processing.value = false;
  method.value = "card";
  card.value = { name: "", number: "", exp: "", cvv: "" };
  transfer.value = { ref: "" };
  movil.value = { phone: "", ref: "" };
  showPayment.value = true;
}
function closePayment() {
  if (processing.value) return;
  showPayment.value = false;
}

function validate() {
  if (method.value === "card") {
    if (!card.value.name || !card.value.number || !card.value.exp || !card.value.cvv) {
      alert("Completa los datos de la tarjeta.");
      return false;
    }
  }
  if (method.value === "transfer") {
    if (!transfer.value.ref) {
      alert("Ingresa la referencia de la transferencia.");
      return false;
    }
  }
  if (method.value === "movil") {
    if (!movil.value.phone || !movil.value.ref) {
      alert("Completa el teléfono y la referencia del pago móvil.");
      return false;
    }
  }
  return true;
}

function submitPayment() {
  if (!validate()) return;

  processing.value = true;

  setTimeout(() => {
    processing.value = false;
    success.value = true;
    txId.value = generateTxId();
    txDate.value = new Date().toLocaleString("es-BO");

    cart.clear();
    showPayment.value = false;
  }, 900);
}

function generateTxId() {
  return (
    "TX" +
    Date.now().toString(36).toUpperCase() +
    Math.random().toString(36).slice(2, 6).toUpperCase()
  );
}
</script>

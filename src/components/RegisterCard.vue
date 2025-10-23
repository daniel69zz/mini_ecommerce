<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black/60 z-[999]"
    @click.self="$emit('cerrar')"
  >
    <div
      class="bg-[#009966] p-6 rounded-2xl shadow-2xl w-[350px] relative animate-fadeIn"
    >
      <div class="bg-white rounded-2xl border-[#066847] border-5 p-4">
        <h2 class="text-2xl font-bold mb-4 text-center text-[#009966]">
          Registrarse
        </h2>

        <form class="flex flex-col gap-3 p-[5px]">
          <input
            type="text"
            id="nombre"
            placeholder="Nombre Completo"
            class="rounded-lg p-2 focus:outline-[#000] border-gray-700 border-[2px]"
          />
          <input
            type="text"
            id="nombre"
            placeholder="Apellidos"
            class="rounded-lg p-2 focus:outline-[#000] border-gray-700 border-[2px]"
          />
          <input
            type="text"
            placeholder="Usuario"
            class="rounded-lg p-2 focus:outline-[#000] border-gray-700 border-[2px]"
          />

          <input
            type="text"
            id="nombre"
            placeholder="Correo Electronico"
            class="rounded-lg p-2 focus:outline-[#000] border-gray-700 border-[2px]"
          />
          <input
            type="password"
            placeholder="Contraseña"
            class="rounded-lg p-2 focus:outline-[#000] border-gray-700 border-[2px]"
          />
          <button
            type="submit"
            class="bg-[#009966] text-white py-2 rounded-lg hover:bg-[#00b377] transition"
          >
            Entrar
          </button>

          <div class="flex text-black items-center gap-[3px]">
            <hr class="w-full" />
            <span>O</span>
            <hr class="w-full" />
          </div>

          <button
            type="submit"
            class="bg-[#009966] text-white py-2 rounded-lg hover:bg-[#00b377] transition"
          >
            Registrarse?
          </button>
        </form>

        <!-- Botón cerrar -->
        <button
          @click="$emit('cerrar')"
          class="absolute top-2 right-3 text-black hover:text-[#f00] text-xl"
        >
          ✖
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.25s ease-out;
}
</style>

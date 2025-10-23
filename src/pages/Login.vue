<template>
  <div
    class="bg-[#009966] w-full min-h-screen flex items-center justify-center"
  >
    <div class="w-full">
      <h1 class="text-center text-white text-[40px] font-bold mb-6">
        Iniciar Sesión
      </h1>

      <form
        class="bg-[#0e573e] mx-auto max-w-md w-full p-6 rounded-3xl shadow-lg"
      >
        <label for="email" class="block text-white mb-1"
          >Correo Electrónico:</label
        >
        <input
          type="text"
          id="email"
          class="block bg-white text-black rounded-[10px] mb-3 w-full p-2"
        />

        <label for="password" class="block text-white mb-1">Contraseña:</label>
        <input
          type="password"
          id="password"
          class="block bg-white text-black rounded-[10px] mb-3 w-full p-2"
        />

        <div class="block mx-auto text-center text-[#fff]">
          <button
            class="font-semibold mt-2 px-6 py-2 mr-[3%] bg-[#009966] p-[6px] rounded-[15px] hover:cursor-pointer"
          >
            Ingresar
          </button>

          <router-link to="/registro">
            <button
              class="font-semibold mt-2 px-6 py-2 mr-[3%] bg-[#009966] p-[6px] rounded-[15px] hover:cursor-pointer"
            >
              Registrarse?
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

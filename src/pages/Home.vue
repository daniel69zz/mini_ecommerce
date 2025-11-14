<template>
  <main>
    <div class="flex flex-col">
      <!-- Sección 1: Hero con imagen de fondo -->
      <div
        class="relative w-full h-[50vh] sm:h-[70vh] lg:h-[80vh] ImgFondo bg-no-repeat bg-cover bg-center"
      >
        <div
          class="absolute top-[20%] sm:top-[22%] left-[79%] translate-x-[-50%] sm:left-auto sm:translate-x-0 sm:right-[1%] flex flex-col justify-center items-center text-center px-4 sm:px-0"
        >
          <span
            class="text-[20px] sm:text-[28px] lg:text-[34px] text-white font-bold leading-tight"
          >
            BIENVENIDOS A MINIMARKET+
          </span>
          <span
            class="text-[18px] sm:text-[24px] lg:text-[30px] text-white font-bold mt-2 sm:mt-4"
          >
            ¿QUIERES SABER MÁS SOBRE NOSOTROS?
          </span>
          <router-link to="/nosotros">
            <button
              class="bg-[#009966] text-[18px] sm:text-[24px] lg:text-[32px] mt-4 sm:mt-6 px-6 py-3 rounded-[15px] hover:bg-[#00b377] transition font-bold text-white"
            >
              VER MÁS
            </button>
          </router-link>
        </div>
      </div>

      <div class="bg-[#009966] py-8 sm:py-10">
        <h2
          class="text-[24px] sm:text-[32px] lg:text-[37px] mb-6 sm:mb-10 text-center font-bold text-white px-4"
        >
          CONOCE MÁS DE NOSOTROS
        </h2>
        <div class="mx-auto flex justify-center px-4">
          <iframe
            src="https://www.youtube.com/embed/497Wu8YvwUA"
            class="w-full max-w-[350px] h-[200px] sm:max-w-[600px] sm:h-[340px] lg:max-w-[1000px] lg:h-[450px] rounded-lg"
            title="Reproductor de video de YouTube"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>

      <div
        class="relative ImgFondo_2 h-[60vh] sm:h-[70vh] lg:h-[85vh] w-full bg-no-repeat bg-cover bg-center"
      >
        <div
          class="absolute top-[20%] sm:top-[30%] left-[79%] translate-x-[-50%] sm:left-auto sm:translate-x-0 sm:right-[1%] w-[90%] sm:w-[60%] lg:w-[40%] flex flex-col justify-center items-center px-4"
        >
          <span
            class="text-[20px] sm:text-[28px] lg:text-[37px] text-center font-bold text-white leading-tight"
          >
            El supermercado donde la calidad y el ahorro se encuentran
          </span>
          <router-link to="/productos">
            <button
              class="bg-[#009966] text-[18px] sm:text-[24px] lg:text-[32px] mt-4 sm:mt-6 px-6 py-3 rounded-[15px] hover:bg-[#00b377] transition font-bold text-white"
            >
              VER LAS OFERTAS
            </button>
          </router-link>
        </div>
      </div>

      <!-- Sección 4: Registro -->
      <div
        class="flex flex-col justify-center items-center bg-[#312b31] py-12 sm:py-16 px-4 text-center"
      >
        <span
          class="text-[20px] sm:text-[28px] lg:text-[37px] font-bold text-white mb-4"
        >
          Y tú ¿Ya eres parte de la MiniMarket+?
        </span>
        <button
          class="bg-[#009966] text-[18px] sm:text-[24px] lg:text-[32px] my-4 sm:my-6 px-6 py-3 rounded-[15px] hover:bg-[#00b377] transition font-bold text-white"
        >
          REGÍSTRATE
        </button>
        <span
          class="text-[18px] sm:text-[24px] lg:text-[32px] font-bold text-white"
        >
          Aprovecha los beneficios que tenemos para ti.
        </span>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
.ImgFondo {
  background-image: url("@/assets/personas_comprando.png");
}

.ImgFondo_2 {
  background-image: url("@/assets/carrito_compras.png");
}
</style>

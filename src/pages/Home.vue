<template>
    <main>
        <div class="grid grid-rows-4 text-[37px] text-[#fff] font-bold">
            <!-- <div class="grid grid-cols-1 sm:grid-cols-2">
        <img
          src="https://img.freepik.com/fotos-premium/feliz-hombre-mujer-negros-supermercado-familia-afroamericana-haciendo-comestibles-comprando-juntos-comprando-comida-caminando-empujando-carro-lo-largo-estantes-tiendas-consumismo-super-mercado-publicidad_568137-955.jpg"
          alt="personas comprando"
          class="w-full h-[85vh]"
        />

        <div class="flex flex-col justify-center items-center text-[34px]">
          <span>BIENVENIDOS A SUPERMERCADO DON OZIEL</span>
          <span>¿QUIERES SABER MAS SOBRE NOSOTROS?</span>
        </div>
      </div> -->

            <div
                class="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] ImgFondo bg-no-repeat bg-cover bg-center"
            >
                <div
                    class="absolute top-[15%] right-[1%] flex flex-col justify-center items-center text-[34px]"
                >
                    <span>BIENVENIDOS A SUPERMERCADO DON OZIEL</span>
                    <span>¿QUIERES SABER MAS SOBRE NOSOTROS?</span>
                    <button
                        class="bg-[#009966] text-[32px] mt-[20px] p-[6px] rounded-[15px]"
                    >
                        VER MAS
                    </button>
                </div>
            </div>

            <div class="bg-[#009966]">
                <h2 class="my-[10px] text-center font-bold">
                    CONOCE MAS DE NOSOTROS
                </h2>
                <div class="mx-[auto] flex justify-center">
                    <iframe
                        src="https://www.youtube.com/embed/497Wu8YvwUA"
                        width="1000"
                        height="450"
                        title="Reproductor de video de YouTube"
                    >
                    </iframe>
                </div>
            </div>

            <!-- <div class="grid grid-cols-1 sm:grid-cols-2">
        <img
          src="C:\Users\HP\Downloads\depositphotos_24701081-stock-photo-shopping-cart-in-a-supermarket.jpg"
          alt="carrito de compras"
          class="h-[85vh]"
        />
        <div class="flex flex-col justify-center items-center">
          <span class="text-center"
            >El supermercado donde la calidad y el ahorro se encuentran</span
          >
          <button>VER LAS OFERTAS</button>
        </div>
      </div> -->

            <div
                class="relative ImgFondo_2 h-[85vh] w-full bg-no-repeat bg-cover bg-center"
            >
                <div
                    class="absolute top-[30%] right-[5%] w-[40%] flex flex-col justify-center items-center"
                >
                    <span class="text-center"
                        >El supermercado donde la calidad y el ahorro se
                        encuentran</span
                    >
                    <button
                        class="bg-[#009966] text-[32px] my-[20px] p-[6px] rounded-[15px]"
                    >
                        VER LAS OFERTAS
                    </button>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center bg-[#312b31]">
                <span>Y tu ¿Ya eres parte de la Comunidad Oziel?</span>
                <button
                    class="bg-[#009966] text-[32px] my-[20px] p-[6px] rounded-[15px]"
                >
                    REGISTRATE
                </button>

                <span>Aprovecha los beneficios que tenemos para ti.</span>
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

<template>
  <footer
    class="text-[14px] bg-[#000] text-[#fff] min-h-[12svh] md:min-h-[10svh]"
  >
    <div
      class="max-w-[1200px] mx-auto py-[6px] px-[12px] grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-[12px]"
    >
      <div>
        <h3 class="font-bold mb-[15px]">MINIMARKET+</h3>
        <p>©2025 UCB Community. Todos los derechos reservados.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
        <div>
          <h4 class="font-bold mb-[20px]">Contacto</h4>
          <address class="not-italic flex flex-wrap gap-3">
            <div class="inline-flex items-center gap-[6px] whitespace-nowrap">
              <Mail :size="16" aria-hidden="true" />
              <span>luis.rojas.c1@ucb.edu.bo</span>
            </div>
            <div class="inline-flex items-center gap-[6px] whitespace-nowrap">
              <Phone :size="16" aria-hidden="true" />
              <span>+591 64831282</span>
            </div>
            <div class="inline-flex items-center gap-[6px] whitespace-nowrap">
              <MapPin :size="16" aria-hidden="true" />
              <span>La Paz, Bolivia</span>
            </div>
          </address>
        </div>

        <div class="hidden sm:block">
          <h4 class="font-bold mb-[20px]">Links</h4>
          <div class="flex items-center gap-[8px]">
            <a
              href="https://github.com/daniel69zz/mini_ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="inline-flex items-center justify-center w-[28px] h-[28px] rounded-full bg-transparent border border-white/10"
            >
              <Github :size="16" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              class="inline-flex items-center justify-center w-[28px] h-[28px] rounded-full bg-transparent border border-white/10"
            >
              <Twitter :size="16" />
            </a>

            <a
              href="https://www.linkedin.com/in/luis-daniel-rojas-caceres-132897274/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="inline-flex items-center justify-center w-[28px] h-[28px] rounded-full bg-transparent border border-white/10"
            >
              <Linkedin :size="16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-vue-next";
</script>

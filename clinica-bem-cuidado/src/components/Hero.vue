<template>
  <section id="inicio" class="relative py-20 overflow-hidden">
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-12 md:mb-0 z-10">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-slate-800">
          Cuidar da mente é cultivar o <span class="text-sky-500">bem-estar</span>.
        </h1>
        <p class="text-lg text-slate-600 mb-8 leading-relaxed">
          Um lugar acolhedor com profissionais especializados para atender crianças (TEA), adultos e terceira idade.
          Oferecemos o suporte necessário para cada etapa da vida.
        </p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://wa.me/5518997037388"
            class="bg-bem-cuidado text-white px-8 py-4 rounded-xl font-bold text-center shadow-lg hover:shadow-xl transition flex items-center justify-center"
          >
            <i class="fab fa-whatsapp mr-2 text-xl"></i> Agendar Agora
          </a>
          <a
            href="#especialidades"
            class="bg-white border-2 border-slate-200 text-slate-600 px-8 py-4 rounded-xl font-bold text-center hover:bg-slate-50 transition"
          >
            Ver Especialidades
          </a>
        </div>
      </div>

      <div class="md:w-1/2 flex justify-center">
        <div
          class="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-white shadow-2xl overflow-hidden accent-yellow"
        >
          <img
            :src="atendimentoAcolhedor"
            alt="Atendimento acolhedor"
            class="object-cover w-full h-full opacity-90"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import atendimentoAcolhedor from '@/assets/images/atendimento-acolhedor.png'

</script>

<style scoped>
.bg-bem-cuidado {
  background-color: #5fb9e6;
}
.accent-yellow {
  background-color: #ffcc00;
}
</style>
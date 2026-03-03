<template>
  <section id="especialidades" class="py-24 bg-white">
    <div class="container mx-auto px-6 text-center mb-16">
      <h2 class="text-4xl font-extrabold text-slate-800 mb-4">
        Nossas Especialidades
      </h2>
      <p class="text-slate-500 max-w-2xl mx-auto">
        Oferecemos um suporte completo e especializado para cada fase da vida, com um olhar atento e humanizado.
      </p>
      <div class="w-24 h-1.5 bg-bem-cuidado mx-auto mt-4 rounded-full"></div>
    </div>

    <div class="container mx-auto px-6 space-y-20">
      <!-- Desenvolvimento Infantil -->
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2">
          <div class="rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition duration-500">
            <img
              :src="criancaTea"
              alt="Criança brincando em terapia"
              class="w-full h-80 object-cover"
            />
          </div>
        </div>
        <div class="md:w-1/2 space-y-6 text-left">
          <span
            class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider"
          >
            Desenvolvimento Infantil
          </span>
          <h3 class="text-3xl font-bold text-slate-800">
            Suporte Especializado em TEA
          </h3>
          <p class="text-slate-600 leading-relaxed text-lg">
            Nosso atendimento infantil foca no
            <strong>Transtorno do Espectro Autista (TEA)</strong> e outras dificuldades de desenvolvimento.
            Utilizamos abordagens lúdicas e científicas para ajudar a criança a atingir seu potencial máximo,
            sempre envolvendo a família no processo.
          </p>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 font-medium">
            <li><i class="fas fa-puzzle-piece text-sky-500 mr-2"></i> Avaliação Neuropsicológica</li>
            <li><i class="fas fa-comments text-sky-500 mr-2"></i> Terapia Comportamental</li>
            <li><i class="fas fa-brain text-sky-500 mr-2"></i> Estimulação Cognitiva</li>
            <li><i class="fas fa-users text-sky-500 mr-2"></i> Orientação Parental</li>
          </ul>
        </div>
      </div>

      <!-- Saúde do Adulto -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-12">
        <div class="md:w-1/2">
          <div class="rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
            <img
              :src="adulto"
              alt="Adulto em conversa acolhedora"
              class="w-full h-80 object-cover"
            />
          </div>
        </div>
        <div class="md:w-1/2 space-y-6 text-left">
          <span
            class="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider"
          >
            Saúde do Adulto
          </span>
          <h3 class="text-3xl font-bold text-slate-800">Equilíbrio e Saúde Mental</h3>
          <p class="text-slate-600 leading-relaxed text-lg">
            A vida adulta traz desafios complexos. Oferecemos um espaço seguro para tratar questões como ansiedade,
            depressão, estresse ocupacional (Burnout) e crises existenciais, buscando sempre o autoconhecimento e a
            resiliência.
          </p>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 font-medium">
            <li><i class="fas fa-leaf text-green-500 mr-2"></i> Gestão de Ansiedade</li>
            <li><i class="fas fa-briefcase text-green-500 mr-2"></i> Stress Profissional</li>
            <li><i class="fas fa-heart text-green-500 mr-2"></i> Conflitos Amorosos</li>
            <li><i class="fas fa-sun text-green-500 mr-2"></i> Desenvolvimento Pessoal</li>
          </ul>
        </div>
      </div>

      <!-- Longevidade Ativa -->
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2">
          <div class="rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition duration-500">
            <img
              :src="idosoSorrindo"
              alt="Idoso sorrindo"
              class="w-full h-80 object-cover"
            />
          </div>
        </div>
        <div class="md:w-1/2 space-y-6 text-left">
          <span
            class="bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider"
          >
            Longevidade Ativa
          </span>
          <h3 class="text-3xl font-bold text-slate-800">Cuidado na Terceira Idade</h3>
          <p class="text-slate-600 leading-relaxed text-lg">
            Envelhecer com dignidade e saúde mental é fundamental. Nosso suporte foca na manutenção da memória,
            acolhimento de perdas, combate à solidão e estímulo à autonomia cognitiva e emocional.
          </p>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 font-medium">
            <li><i class="fas fa-hourglass-half text-yellow-500 mr-2"></i> Reabilitação Cognitiva</li>
            <li><i class="fas fa-smile-beam text-yellow-500 mr-2"></i> Prevenção à Depressão</li>
            <li><i class="fas fa-users-cog text-yellow-500 mr-2"></i> Suporte à Família</li>
            <li><i class="fas fa-medal text-yellow-500 mr-2"></i> Qualidade de Vida</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import idosoSorrindo from '@/assets/images/idoso-sorrindo.jpg'
import criancaTea from '@/assets/images/crianca-tea.jpg'
import adulto from '@/assets/images/adulto.jpg'
</script>

<style scoped>
.bg-bem-cuidado {
  background-color: #5fb9e6;
}
</style>
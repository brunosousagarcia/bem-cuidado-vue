<template>
  <footer class="bg-slate-900 text-white py-16">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6 italic">Clínica Bem Cuidado</h2>
          <p class="text-slate-400 mb-8 leading-relaxed">
            Nossa missão é servir com qualidade, oferecendo um porto seguro para a saúde mental de todas as gerações.
          </p>

          <div class="space-y-4">
            <div class="flex items-center">
              <i class="fab fa-whatsapp text-2xl text-green-400 mr-4"></i>
              <span class="text-xl font-semibold">18 99703-7388</span>
            </div>

            <div class="flex items-center">
              <i class="fas fa-map-marker-alt text-2xl text-sky-400 mr-4"></i>
              <span class="text-slate-300">
                Agende sua visita e conheça nosso espaço acolhedor.
              </span>
            </div>
          </div>
        </div>

        <div class="bg-slate-800 p-8 rounded-3xl">
          <h3 class="text-xl font-bold mb-4">Horário de Funcionamento</h3>
          <p class="text-slate-400 border-b border-slate-700 py-2 flex justify-between">
            <span>Segunda - Sexta</span> <span>08h - 19h</span>
          </p>
          <p class="text-slate-400 py-2 flex justify-between">
            <span>Sábado</span> <span>08h - 12h</span>
          </p>
        </div>
      </div>

      <div class="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Clínica Bem Cuidado. Todos os direitos reservados.
      </div>
    </div>
  </footer>
</template>

<script setup>
// Nenhuma lógica por enquanto
</script>
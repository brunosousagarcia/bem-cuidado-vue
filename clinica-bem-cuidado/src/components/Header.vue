<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <div class="p-2 bg-bem-cuidado rounded-lg text-white">
          <i class="fas fa-hand-holding-heart fa-lg"></i>
        </div>
        <span class="text-xl font-bold tracking-tight text-slate-700 uppercase">
          Clínica Bem Cuidado
        </span>
      </div>

      <nav class="hidden md:flex space-x-8 font-medium">
        <a href="#inicio" class="hover:text-sky-600 transition">Início</a>
        <a href="#especialidades" class="hover:text-sky-600 transition">Especialidades</a>
        <a href="#sobre" class="hover:text-sky-600 transition">Sobre Nós</a>
        <a
          href="https://wa.me/5518997037388"
          class="bg-bem-cuidado text-white px-5 py-2 rounded-full hover:bg-sky-500 transition shadow-md"
        >
          Agendar
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Nenhuma lógica ainda
</script>

<style scoped>
.bg-bem-cuidado {
  background-color: #5fb9e6;
}
</style>
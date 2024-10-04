<script setup></script>
<template>
  <footer class="bg-black text-white py-8 mt-32">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white pb-24 pt-16 px-24">
      <div>
        <h4 class="font-semibold mb-4 text-xl">Ajuda</h4>
        <ul>
          <li class="pb-2 hover:underline"><router-link to="/">Dúvidas Gerais</router-link></li>
          <li class="pb-2 hover:underline"><router-link to="/">Entregas</router-link></li>
          <li class="pb-2 hover:underline"><router-link to="/">Pedidos</router-link></li>
          <li class="pb-2 hover:underline"><router-link to="/">Trocas e Devoluções</router-link></li>
          <li class="pb-2 hover:underline"><router-link to="/">Pagamentos</router-link></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-4 text-xl">Menu</h4>
        <ul>
          <li class="pb-2 hover:underline"><router-link to="/">Página Inicial</router-link></li>
          <li class="pb-2 hover:underline"><router-link to="/category/men">Homem</router-link></li>
          <li class="pb-2 hover:underline"><router-link to="/category/women">Mulher</router-link></li>
          <li class="pb-2 hover:underline"><router-link to="/about">Sobre Nós</router-link></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-4 text-xl">Sobre Nós</h4>
        <p>Nasce a marca brasileira Tesla Footwear, criada para aqueles que realmente falam a língua do skate e que trariam todas as características icônicas dos produtos daquela época...</p>
      </div>
    </div>
    <div class="container mx-auto mt-8 text-center text-zinc-500">
      <img src="../assets/img/logo-white.png" alt="logo" class="w-44 mx-auto mb-8" />
      <p>©2009-2022 Todos os direitos Dreamlight</p>
    </div>
  </footer>
</template>

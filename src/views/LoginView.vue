    <script setup>
    </script>
<template>
    <main class="w-screen h-screen flex justify-center items-center">
        <div class="text-center max-w-sm md:max-w-lg">
        <router-link to="/">
            <img src="../assets/img/logo.png" alt="logo dream light" class="w-32 mx-auto mb-16">
        </router-link>
          <h2 class="text-xl font-semibold mb-4">CONTINUAR COM SEU ENDEREÇO DE E-MAIL</h2>
          <p class="text-sm text-gray-600 mb-8">Entre com seu e-mail e senha ou crie um perfil se você for novo</p>
          <form action="#" class="space-y-4">
            <div>
              <input type="email" placeholder="Email" class="border border-gray-400 w-full p-2 text-sm">
            </div>
            <div>
              <button type="submit" class="w-full bg-black text-white p-2 text-sm font-bold hover:bg-gray-800">Entrar</button>
            </div>
          </form>
          <div class="mt-4">
            <router-link to="/register" class="text-sm text-gray-600 hover:underline">Não tenho conta dream light</router-link>
        </div>
        </div>
    </main>
</template>

<style scoped>

</style>
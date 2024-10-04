<script setup>
</script>
<template>
<main class="w-screen h-screen flex justify-center items-center">
    <div class="text-center max-w-sm md:max-w-lg">
        <router-link to="/">
            <img src="../assets/img/logo.png" alt="logo dream light" class="w-32 mx-auto mb-16">
        </router-link>
        <h1 class="text-3xl font-bold mb-8">FAZENDO MINHA CONTA DREAM LIGHT</h1>
        <form action="#" class="space-y-4">
        <div>
            <label class="block text-left mb-1 text-sm font-semibold">Digite seu email:</label>
            <input type="email" placeholder="Email" class="border border-gray-400 w-full p-2 text-sm">
        </div>
        <div>
            <label class="block text-left mb-1 text-sm font-semibold">Digite sua senha:</label>
            <input type="password" placeholder="Senha" class="border border-gray-400 w-full p-2 text-sm">
        </div>
        <div>
            <label class="block text-left mb-1 text-sm font-semibold">Confirme sua senha:</label>
            <input type="password" placeholder="Confirma senha" class="border border-gray-400 w-full p-2 text-sm">
        </div>
        <div>
            <button type="submit" class="w-full bg-black text-white p-2 text-sm font-bold hover:bg-gray-800">Criar</button>
        </div>
        </form>
        <div class="mt-4">
            <router-link to="/login" class="text-sm text-gray-600 hover:underline">Já tenho uma conta dream light</router-link>
        </div>
    </div>
</main>
</template>

<style scoped>

</style>
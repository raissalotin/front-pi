<script setup>
import ContainerComp from '@/components/ContainerComp.vue'
</script>
<template>
  <ContainerComp margin class="my-32">
    <h2 class="text-xl uppercase font-semibold text-center">FEATURED</h2>
    <div class="mt-16">
      <div class="flex flex-col lg:flex-row justify-center items-center">
        <div class="flex justify-center lg:justify-end w-full lg:w-6/12">
            <img src="../assets/img/about.png" alt="featured1" class="w-8/12 h-full object-cover" />
        </div>
        <div class="flex justify-center lg:justify-start w-full lg:w-6/12">
            <div class="p-16 w-full lg:w-8/12 text-center flex flex-col gap-6">
                <h3 class="text-3xl">Introducing the Fall Winter 2024 Campaign</h3>
                <p class="text-sm mt -2">
                    Sabato De Sarno presents his vision of men's necklaces, where personality is the protagonist. Find out more!
                </p>
                <router-link to="/about" class="font-bold mx-auto hover:uppercase">
                    <span class="font-black">+</span> Discovery More
                </router-link>
            </div>
            </div>
      </div>
    </div>
  </ContainerComp>
</template>

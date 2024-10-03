<script setup>
import { ref } from 'vue'
import ContainerComp from '@/components/ContainerComp.vue'
import { useRoute } from 'vue-router';

const router = useRoute()
const nav = ref(false)
const contact = ref(false)
const empityBag = ref(false)
const bag = ref([])

const openBag = () => {
  if (bag.value.length === 0) {
    empityBag.value = !empityBag.value
  } else {
    router.push('/bag')
  }
}
</script>
<template>
  <ContainerComp navbar>
    <div class="hidden sm:block w-4/12">
      <p @click="contact = !contact" class="font-bold cursor-pointer"
        ><span class="font-black">+</span> Contact Us</p>
    </div>
    <div class="hidden w-4/12 sm:flex justify-center">
      <router-link to="/">
        <img src="../assets/img/logo.png" alt="logo" class="w-32 cursor-pointer" />
      </router-link>
    </div>
    <div class="flex gap-6 w-full sm:w-4/12 justify-end">
      <span @click="openBag()">
        <img src="../assets/img/bag.png" alt="bag" class="w-8 h-8 cursor-pointer" />
      </span>
      <router-link to="/login">
        <img src="../assets/img/user.png" alt="user" class="w-8 h-8 cursor-pointer" />
      </router-link>
      <span @click="nav = true">
        <img src="../assets/img/menu.png" alt="menu" class="w-8 h-8 cursor-pointer" />
      </span>
    </div>
  </ContainerComp>
  <div v-if="nav" class="bg-black text-white nav-animation fixed top-0 right-0 bottom-0 w-full md:w-4/12 h-screen z-50">
    <div class="flex flex-col gap-4 justify-between h-full pl-8">
      <div class="flex flex-col gap-4">
        <div class="flex justify-between pr-8 pt-8 items-center">
          <!-- <img src="../assets/img/logo-white.png" alt="logo" class="w-32 cursor-pointer" /> -->
           <h1 class="text-zinc-400">
            Welcome to our store
           </h1>
          <img @click="nav = false" src="../assets/img/x1.png" alt="close" class="w-8 h-8 cursor-pointer" />
        </div>
        <router-link to="/" class="font-normal mt-16 text-2xl py-2 link">Home</router-link>
        <router-link to="/category-men" class="font-normal text-2xl py-2 link">Men</router-link>
        <router-link to="/category-women" class="font-normal text-2xl py-2 link">Women</router-link>
        <router-link to="/category/new-collection" class="font-normal text-2xl py-2 link" >New Collection</router-link>
        <router-link to="/about" class="font-normal text-2xl py-2 link" >About Us</router-link>
      </div>
      <div class="flex flex-col gap-4 pb-8">
        <router-link to="/" class="text-xl py-2 link">Sign in</router-link>
        <router-link to="/" class="text-xl py-2 link">Contact Us</router-link>
      </div>
    </div>
  </div>
  <div v-if="contact" class="bg-black text-white nav-animation fixed top-0 right-0 bottom-0 w-full md:w-4/12 h-screen z-50">
    <div class="flex flex-col gap-4 justify-between h-full pl-8">
      <div class="flex flex-col gap-4">
        <div class="flex justify-between pr-8 pt-8 items-center">
          <!-- <img src="../assets/img/logo-white.png" alt="logo" class="w-32 cursor-pointer" /> -->
           <h1 class="text-zinc-400">
            Contact Us
           </h1>
          <img @click="contact = false" src="../assets/img/x1.png" alt="close" class="w-8 h-8 cursor-pointer" />
        </div>
        <h1 class="mt-16 text-xl">Call +35 0550622949</h1>
        <p class="font-normal py-2">
          Our online Customer Assistants are available Monday to Friday between 9am and 9pm, Saturday between 9am and 8pm and Sunday between 10am and 8pm (CET).
        </p>
        <h1 class="mt-16 text-xl">WHATSAPP</h1>
        <p class="font-normal py-2">
          Our online Customer Assistants are available Monday to Friday between 9am and 9pm, Saturday between 9am and 8pm and Sunday between 10am and 8pm (CET).
        </p>
      </div>
    </div>
  </div>
  <div v-if="empityBag" class="z-99 fadeRight fixed bottom-4 left-4 bg-black text-white p-4">
    A sacola está vazia
  </div>
</template>
<style scoped>
.nav-animation {
  animation: slide 0.3s forwards;
}

@keyframes slide {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}

.link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s;
}

.link:hover::after {
  width: 7%;
}

.fadeRight {
  animation: fadeRight 0.3s forwards, fadeOut 0.3s forwards 3s;
}

@keyframes fadeRight {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.z-99 {
  z-index: 99;
}

</style>

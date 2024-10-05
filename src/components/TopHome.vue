<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'men',
    },
})

const datas = {
    men: {
        title: 'Mens Collection',
        img: '../assets/img/men.png',
        color: 'bg-[#453C34]',
        value: 'men',
    },
}
</script>
<template>
    <div class="h-screen w-full">
        <img src="../assets/img/bg.png" alt="backgorund principal" class="h-full lg:w-full object-cover">
        <div class="absolute bottom-0 left-0 w-full flex justify-center py-8">
            <router-link :to="`/category/${datas[props.type].value}`">
            <button class="bg-white p-4 hover:bg-black hover:text-white transition-all">
                EXPLORE MEN’S COLLECTION
            </button>
            </router-link>
        </div>
    </div>
</template>
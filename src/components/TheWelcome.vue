<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => ({
            title: 'ABSOLUTE FLOW',
            price: '200',
            img: '../assets/img/product.jpg',
            desc: 'ELEGANT',
        }),
    },
})
</script>

<template>
    <div class="relative inline-block">
        <!-- <img :src="props.item.img" alt="Colar Absolute Flow" class="w-full"> -->
        <img src="@/assets/img/product.png" alt="Colar Absolute Flow" class="w-full">
        <div class="transform bg-white px-2 py-1 text-xs font-bold text-gray-800">
            <p class="text-lg">{{ props.item.title }}</p>
            <p class="py-4 text-gray-400">{{ props.item.desc }}</p>
            <p class="font-bold text-xl">R${{ props.item.price }}.00</p>
        </div>
    </div> 
</template>
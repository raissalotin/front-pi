<script setup>
import CardProduct from '@/components/CardProduct.vue'
import ContainerComp from '@/components/ContainerComp.vue'

const props = defineProps({
    type: {
        type: String,
        default: 'all',
    },
})

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, props.type] 
</script>
<template>
    <ContainerComp>
        <div class="mt-32 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-32">
            <CardProduct
            v-for="item in products" 
            :key="item.id"
            />
        </div>
    </ContainerComp>
</template>
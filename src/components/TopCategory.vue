<script setup>
const props = defineProps({
        type: {
            type: String,
            default: 'men', 
        },
        
    })
</script>
<template>
    <div class="w-full">
        <img v-if="props.type == 'women'" src="../assets/img/women-top.png" alt="background principal" class="h-44 object-cover md:w-full md:h-full">
        <img v-if="props.type == 'men'" src="../assets/img/men-top.png" alt="background principal" class="h-44 object-cover md:w-full md:h-full">
        <img v-if="props.type == 'new-collection'" src="../assets/img/new-top.png" alt="background principal" class="h-44 object-cover md:w-full md:h-full">
    </div>
</template>
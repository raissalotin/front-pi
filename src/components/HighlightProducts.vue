<script setup>
import ContainerComp from '@/components/ContainerComp.vue'
import ProductSpecial from '@/components/ProductSpecial.vue'
</script>
<template>
    <ContainerComp>
        <h2 class="text-xl uppercase font-semibold text-center">DREAM LIGHTS HIGHLIGHTS</h2>
        <div class="flex flex-col md:grid md:grid-cols-3 gap-16 md:gap-4 mt-16">
            <ProductSpecial title="ABSOLUTE FLOW" desc="A bold necklace that combines the intensity of obsidian with contemporary design" />
            <ProductSpecial title="TWILIGHT WHISPERS" desc="A bold necklace that combines the intensity of obsidian with contemporary design" />
            <ProductSpecial title="OBSIDIAN NIGHT" desc="A bold necklace that combines the intensity of obsidian with contemporary design" />
        </div>
    </ContainerComp>
</template>
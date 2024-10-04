<script setup>
import CategoryCard from '@/components/CategoryCard.vue';
import ContainerComp from '@/components/ContainerComp.vue'
</script>
<template>
    <ContainerComp margin>
        <div class="flex flex-col lg:grid lg:grid-cols-3 gap-16 lg:gap-4 mt-4">
            <CategoryCard type="men" />
            <CategoryCard type="women" />
            <CategoryCard type="new" />
        </div>
    </ContainerComp>
</template>
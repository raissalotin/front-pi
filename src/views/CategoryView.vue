<script setup>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import TopCategory from '@/components/TopCategory.vue'
import GroupProducts from '@/components/GroupProducts.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryId = route.params.id;
</script>

<template>
  <header>
    <NavbarComp />
  </header>
  <main>
    <TopCategory :type="categoryId" />
    <GroupProducts :type="categoryId" />
  </main>
  <footer>
    <FooterComp />
  </footer>
</template>

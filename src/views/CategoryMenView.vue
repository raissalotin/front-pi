<script setup>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import TopCategory from '@/components/TopCategory.vue'
import GroupProducts from '@/components/GroupProducts.vue'
</script>

<template>
  <header>
    <NavbarComp />
  </header>
  <main>
    <TopCategory />
    <GroupProducts />
  </main>
  <footer>
    <FooterComp />
  </footer>
</template>

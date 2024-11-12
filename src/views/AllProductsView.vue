<script setup>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import GroupProducts from '@/components/GroupProducts.vue'
import Products from '@/components/ProductsList.vue'
</script>

<template>
  <header>
    <NavbarComp />
  </header>
  <main>
    <GroupProducts />
    <Products />
  </main>
  <footer>
    <FooterComp />
  </footer>
</template>

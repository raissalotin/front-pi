<script setup>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import TopHome from '@/components/TopHome.vue'
import CategoriesComp from '@/components/CategoriesComp.vue'
import HighlightProducts from '@/components/HighlightProducts.vue'
import AboutSection from '@/components/AboutSection.vue'
</script>

<template>
  <header>
    <NavbarComp />
  </header>
  <main>
    <TopHome />
    <CategoriesComp />
    <AboutSection />
    <HighlightProducts />
  </main>
  <footer>
    <FooterComp />
  </footer>
</template>

<script setup>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
//import TopSection from '@/components/TopSection.vue'
//import CategoriesComp from '@/components/CategoriesComp.vue'
//import HighlightProducts from '@/components/HighlightProducts.vue'
//import AboutSection from '@/components/AboutSection.vue'
import ContainerComp from '@/components/ContainerComp.vue';
</script>

<template>
  <header>
    <NavbarComp />
  </header>
  <main>
    <ContainerComp class="mb-16 mt-8">
      <div class="w-8/12 mx-auto">
        <h1 class="text-4xl text-center pb-6">
          About Us
        </h1>
        <img src="../assets/img/store.png" alt="store" class="w-full h-full mx-auto object-cover mt-8" />
        <h2 class="text-xl mt-16 font-bold text-center">
          Our History
        </h2>
        <p class="text-center w-10/12 mx-auto pt-4">
          Dreamlight was born out of an unparalleled passion for jewelry and for creating pieces that transcend the ordinary. Founded by specialists with years of experience in the jewelry world, our company was built on the pillars of quality, creativity and exclusivity. Each necklace is carefully designed and produced to be a true work of art.
        </p>
        <h2 class="text-xl mt-16 font-bold text-center">
          Our Philosophy
        </h2>
        <p class="text-center w-10/12 mx-auto pt-4">
          We believe that a necklace is more than an accessory, it is an expression of personality and a symbol of precious moments. That's why each Dreamlight piece is made with the highest quality materials and a meticulous design that ensures you receive not just a necklace, but a piece of jewelry that will last for generations.
        </p>
        <h2 class="text-xl mt-16 font-bold text-center">
          Exclusivity and Quality
        </h2>
        <p class="text-center w-10/12 mx-auto pt-4">
          At Dreamlight, we understand that our customers deserve the best. Each necklace in our collection is exclusive, which means you'll get a one-of-a-kind piece that you won't find anywhere else. We work with talented designers and skilled craftsmen to ensure that every detail is perfect and that each piece of jewelry is a true representation of luxury and sophistication.
        </p>
        <h2 class="text-xl mt-16 font-bold text-center">
          Our Commitment
        </h2>
        <p class="text-center w-10/12 mx-auto pt-4">
          Our commitment is to provide an unparalleled shopping experience, from the moment you enter our store to the moment you put on your new piece of jewelry. We are dedicated to offering personalized service, helping you find the perfect necklace that complements your style and celebrates your special moments.
        </p>
      </div>
    </ContainerComp>
  </main>
  <footer>
    <FooterComp />
  </footer>
</template>

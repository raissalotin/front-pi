<script setup>
const props = defineProps({
    title: String,
    img: String,
    desc: String,
})
</script>
<template>
  <div class="card relative cursor-pointer">
        <!-- <img :src="img" alt="" class="w-full h-full object-cover" /> -->
        <img v-if="title == 'ABSOLUTE FLOW'" src='../assets/img/product-special1.png' alt="" class="w-11/12 mx-auto object-cover" />
        <img v-if="title == 'TWILIGHT WHISPERS'" src='../assets/img/product-special2.png' alt="" class="w-11/12 mx-auto object-cover" />
        <img v-if="title == 'OBSIDIAN NIGHT'" src='../assets/img/product-special3.png' alt="" class="w-11/12 mx-auto object-cover" />
        <div class="justify-center text-center w-full pt-4">
            
                <h2 class="text-lg p-4 font-bold link">
                    {{ props.title }}
                </h2>
                <p>
                    A bold necklace that combines the intensity of obsidian with contemporary design
                </p>
        </div>
    </div>
</template>

<style scoped>
.card {
    transition: all 0.3s;
}

.card:hover .link {
    text-decoration: underline;
}

</style>
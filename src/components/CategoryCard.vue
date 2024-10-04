<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'men',
    },
})

const datas = {
    men: {
        title: 'Mens Collection',
        img: '../assets/img/men.png',
        color: 'bg-[#453C34]',
        value: 'men',
    },
    women: {
        title: 'Womens Collection',
        img: '../assets/img/women.png',
        color: 'bg-[#2A221D]',
        value: 'women',
    },
    new: {
        title: 'New Collection',
        img: '../assets/img/new.png',
        color: 'bg-[#31221B]',
        value: 'new-collection',
    },
}
</script>
<template>
    <div class="bg-black card relative cursor-pointer">
        <router-link :to="`/category/${datas[props.type].value}`">
            <!-- <img :src="datas[props.type].img" alt="" class="w-full h-full object-cover" /> -->
            <img v-if="props.type === 'men'" src='../assets/img/men.png' alt="" class="w-full h-full object-cover" />
            <img v-if="props.type === 'women'" src='../assets/img/women.png' alt="" class="w-full h-full object-cover" />
            <img v-if="props.type === 'new'" src='../assets/img/new.png' alt="" class="w-full h-full object-cover" />
            <div class="absolute justify-center text-center w-full top-8 left-0">
                <button>
                    <h2 class="text-lg text-white p-4" :class="datas[props.type].color">
                        {{ datas[props.type].title }}
                    </h2>
                </button>
            </div>
            <div class="absolute justify-center text-center w-full bottom-8 left-0">
                <button>
                    <h2 class="btn text-lg text-white p-4" :class="datas[props.type].color">
                        EXPLORE THE COLLECTION
                    </h2>
                </button>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.btn {
    transition: all 0.3s;
}
.card:hover .btn {
    background: #000 !important;
}
</style>
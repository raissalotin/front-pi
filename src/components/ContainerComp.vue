<script setup>
const props = defineProps({
    margin: {
        type: Boolean,
        default: false
    },
    navbar: {
        type: Boolean,
        default: false
    }
})
</script>
<template>
    <section class="w-10/12 mx-auto" :class="[{'my-24': props.margin}, {'justify-between flex py-4': props.navbar}]">
        <slot></slot>
    </section>
</template>
<template>
<main>
    <h1>This will be for each cat details</h1>
    <router-link to="/" class="bg-black text-white p-4 inline-block">Go back home</router-link>
    <h1>{{id}}</h1>
</main>
</template>

<script setup>
const props = defineProps({
  id: { type: String },
});
</script>

<style>

</style>
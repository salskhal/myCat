<template>
  <main class="px-5 md:px-12 min-h-screen mon">
    <NavVue />
    <RouterView />
  </main>
</template>

<script setup>
import NavVue from "./components/Nav.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap");

.mon{
  font-family: "Montserrat", sans-serif;
}
</style>

<!-- <template>
  <main class="rounded-xl overflow-hidden grid grid-rows-mob h-130 md:grid-rows-2 lg:h-150">
    <div class="top py-4 px-8 lg:px-24 ">
      <div>
        <img src="../assets/CatwikiLogo.svg" alt="Landing Logo" class="w-52" />
      </div>
      <p>Get to know more about your cat breed</p>
    </div>
    <div class="bottom bg-discover px-8 lg:px-24 py-12">
      <div class="md:flex items-center  mb-10">
        <h2 class="font-bold text-2xl md:text-3xl lg:text-4xl">60+ Breeds For you to discover</h2>
        <div class="ml-auto">
          <router-link to="/" class="text-sm font-medium">SEE MORE</router-link>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10" >
        <router-link to="/" v-for="cat in filterd" :key="cat.id">
          <img :src="cat.image.url" alt="" class="w-full h-52 rounded-lg mb-4"/>
          <p class="t font-semibold">{{ cat.name }}</p>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";

const AllBreeds = ref([]);

onMounted(() => {
  fetch("https://api.thecatapi.com/v1/breeds")
    .then((res) => res.json())
    .then((fetched) => {
      AllBreeds.value = fetched;
    });
});

const filterd = computed(() => {
  let firstFilter = AllBreeds.value.filter((el) => el.image);
  return firstFilter.slice(0, 4);
});
</script>

<style>
.top {
  /* padding-inline: 80px; */
  background: url("../assets/HeroImagelg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}

.underline {
  border-bottom: 2px solid #4d270c;
}

/* .image-grid {
  grid-template-columns: repeat(4, 1fr);
} */
</style> -->

<template>
  <HomeLanding/>
  <HomeWhy/>
</template>

<script setup>
import HomeLanding from "../components/Home/HomeLanding.vue"
import HomeWhy from "../components/Home/HomeWhy.vue"
</script>

<style>

</style>
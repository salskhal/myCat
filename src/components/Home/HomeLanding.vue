<template>
  <main
    class="rounded-xl overflow-hidden grid grid-rows-mob h-130 md:grid-rows-2 lg:h-150"
  >
    <div class="top py-4 px-8 lg:px-24">
      <div class="mb-6">
        <img
          src="@/assets/CatwikiLogo.svg"
          alt="Landing Logo"
          class="w-60 text-gray-50"
        />
      </div>
      <p class="font text-24px md:w-96 mb-6">
        Get to know more about your cat breed
      </p>
      <router-link  to="/breed" class="bg-white text-black p-2 rounded-sm">Get Started</router-link>
    </div>
    <div
      class="bottom bg-discover px-8 lg:px-24 py-12 flex flex-col justify-center"
    >
      <div class="md:flex items-center mb-10">
        <h2 class="font-bold text-2xl md:text-3xl lg:text-4xl">
          60+ Breeds For you to discover
        </h2>
        <div class="ml-auto">
          <router-link to="/" class="flex items-center">
            <p class="text-sm font-medium mr-2">SEE MORE</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              data-v-a8baa566=""
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                data-v-a8baa566=""
              ></path>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10 xl:gap-16">
        <router-link
          :to="{ name: 'CatDetails', params: { id: cat.name } }"
          v-for="cat in filterd"
          :key="cat.id"
          :id="cat.name"
        >
          <img
            :src="cat.image.url"
            alt=""
            class="w-full h-32 md:h-52 rounded-lg mb-4"
          />
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
  background: url("@/assets/HeroImagelg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
}

.underline {
  border-bottom: 2px solid #4d270c;
}

/* .image-grid {
  grid-template-columns: repeat(4, 1fr);
} */
</style>

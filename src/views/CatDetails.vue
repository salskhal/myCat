<template>
  
    <Loader v-if="isLoading" />
    
    <div v-else class="grid lg:grid-cols-2/3 mt-10 gap-16 lg:px-11 ">
        
        <img
          :src="imgUrl + selected.reference_image_id + imageExtention"
          alt="Image not found"
          class="rounded-xl w-full h-96"
        />
      <div>
        <h2 class="font-semibold text-4xl leading-10 mb-6  ">{{ selected.name }}</h2>
        <p class="font-medium text-lg leading-6 mb-6">{{ selected.description }}</p>
        <div class="mb-4">
          <p class=" leading-4"><span class="font-bold">Temperament:</span> {{ selected.temperament }}</p>
        </div>
        <div class="mb-4">
          <p><span class="font-bold">Origin:</span> {{ selected.origin }}</p>
        </div>
        <div class="mb-4">
          <p><span class="font-bold">Life Span:</span> {{ selected.life_span }}</p>
        </div>
        <div class="mb-4">
          <p><span class="font-bold">Adaptability:</span> {{selected.adaptability}} / 5</p>
        </div>
        <div class="mb-4">
          <p><span class="font-bold">Affection Level:</span> {{selected.affection_level}} / 5</p>
        </div>
        <div class="mb-4">
          <p><span class="font-bold">Child Friendly:</span> {{selected.child_friendly}} / 5</p>
        </div>
        <div class="mb-4">
          <p><span class="font-bold">Energy Level:</span> {{selected.energy_level}} / 5</p>
        </div>
        <div class="mb-4">
          <p><span class="font-bold">Intelligence:</span> {{selected.intelligence}} / 5</p>
        </div>
        <div class="mb-4">
          <p><span class="font-bold">Health Issues:</span> {{selected.health_issues}} / 5</p>
        </div>
      </div>
    </div>
  
</template>

<script setup>
import { ref } from "@vue/reactivity";
import Loader from "../components/Loader.vue";
import Progress from "../components/Progress.vue"

const props = defineProps({
  id: { type: String },
});

const isLoading = ref(true);
let imgUrl = ref("https://cdn2.thecatapi.com/images/");
let imageExtention = ref(".jpg");
const selected = ref([]);

fetch(`https://api.thecatapi.com/v1/breeds/search?q=${props.id}`)
  .then((res) => res.json())
  .then((result) => {
    selected.value = result[0];
    isLoading.value = false;
  });
</script>

<style></style>

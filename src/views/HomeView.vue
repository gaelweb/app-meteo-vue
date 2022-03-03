<script setup lang="ts">
import SearchBarMeteo from "../components/searchbar-meteo.vue";
import CardMeteo from "../components/card-meteo.vue";
import { useMeteoStore } from "../stores/meteo.js";

const meteoStore = useMeteoStore();
</script>

<template>
  <main>
    <!-- METEO SEARCHBAR-->
    <SearchBarMeteo />
    <!-- METEO CARD -->
    <CardMeteo :meteo-data-api="{ meteoData }" />
    {{ meteoStore.getData }}
  </main>
</template>

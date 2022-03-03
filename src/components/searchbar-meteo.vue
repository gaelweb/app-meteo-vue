<script lang="ts">
import { defineComponent } from "vue";
import { useMeteoStore } from "../stores/meteo.js";

export default defineComponent({
  data() {
    return {
      querySearch: "",
      error: {
        isDisplay: false,
        message: "",
      },
      meteoStore: useMeteoStore(),
    };
  },
  methods: {
    handleChange(event) {
      if (event.target.value) {
        this.querySearch = event.target.value;
        this.error.isDisplay = false;
        this.meteoStore.sendDataMeteoApi(this.querySearch);
      }
    },
  },
});
</script>

<template>
  <div>
    <h1>component météo searchbar</h1>
    <input type="text" @change="handleChange" />
    <p v-if="querySearch">Votre recherche est : {{ querySearch }}</p>
    <p v-if="error.isDisplay">Une erreur est survenue !</p>
  </div>
</template>

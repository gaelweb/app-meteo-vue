<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    meteoDataApi: Object,
  },
  setup(props) {
    props.meteoDataApi;
  },
});
</script>

<template>
  <div>
    <h1>Meteo card</h1>
    <p v-if="{ meteoDataApi }">
      {{ meteoDataApi }}
    </p>
  </div>
</template>

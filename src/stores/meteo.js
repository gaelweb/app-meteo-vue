import { defineStore } from "pinia";
import axios from "axios";

export const useMeteoStore = defineStore("meteoStore", {
  state: () => {
    return {
      data: Object,
    };
  },
  actions: {
    /* FETCH API Open Weather Map - With Axios */
    async sendDataMeteoApi(userInput) {
      let api_key = import.meta.env.VITE_APP_API_KEY;
      let versionApi = import.meta.env.VITE_APP_API_METEO_VERSION;

      this.data = await axios
        .get(
          `https://api.openweathermap.org/data/${versionApi}/weather?q=${userInput}&appid=${api_key}`
        )
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error;
        });
    },
  },
  getters: {
    getData: (state) => state.data, // Retrieve data fetched in global application
  },
});

import { defineStore } from "pinia";
import axios from "axios";

export const useMeteoStore = defineStore("meteoStore", {
  state: () => {
    return {
      api_datas: Object,
      response_api_meteo: String,
    };
  },
  actions: {
    async sendDataMeteoApi(userInput) {
      let api_key = "c1f4f4e62654934e0f9dc9afec1c068e";
      let versionApi = "2.5";

      this.api_datas = await axios
        .get(
          `https://api.openweathermap.org/data/${versionApi}/weather?q=${userInput}&appid=${api_key}`
        )
        .then((response) => {
          this.response_api_meteo = "";
          return response.data;
        })
        .catch((error) => {
          console.log("error", error);
          this.response_api_meteo = error;
          return error;
        });
    },
  },
  getters: {
    getData: (state) => state.api_datas,
  },
});

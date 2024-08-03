import { defineStore } from "pinia";
import axios from "axios";

const url = import.meta.env.VITE_API_BASE_URL;

const headers = {
  Authorization: localStorage.getItem("token"),
};

export const useRatingStore = defineStore("rating", {
  state: () => ({ ratingInfoData: {} }),
  getters: { ratingInfo: (state) => state.ratingInfoData },
  actions: {
    async getRatingInfo() {
      const result = await axios.get(`${url}/stat/top`, { headers: headers });
      this.ratingInfoData = result.data;
      return result;
    },
  },
});

import { defineStore } from "pinia";
import axios from "axios";

const url = import.meta.env.VITE_API_BASE_URL;

const headers = {
  Authorization: localStorage.getItem("token"),
};

export const useUserStore = defineStore("uesr", {
  state: () => ({ userInfoData: {} }),
  getters: {
    userInfo: (state) => state.userInfoData,
  },
  actions: {
    async plusEnergy() {
      this.userInfoData.energy += 1;
      this.changeNutsCount({ energy: this.userInfoData.energy });
    },
    click() {
      this.userInfoData.energy -= 1;
      this.userInfoData.nuts += 1;
    },
    async changeNutsCount({ energy, lastSeen, nuts }) {
      const params = { energy, lastSeen, nuts };
      const result = await axios.patch(`${url}/user-profile/edit`, params, {
        headers: headers,
      });
    },
    async setUserData({ username, firstName, lastName, id }) {
      const params = { username, firstName, lastName, id };
      const result = await axios.post(`${url}/auth/init`, params);
      localStorage.setItem("token", result.data.token);
    },
    async getUserData() {
      const result = await axios.get(`${url}/user-profile`, {
        headers: headers,
      });
      this.userInfoData = result.data;
      return result.data;
    },
  },
});

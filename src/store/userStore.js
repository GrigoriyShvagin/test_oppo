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
      const date = new Date().toISOString();
      this.changeNutsCount({
        energy: this.userInfoData.energy,
        lastSeen: date,
      });
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
      return result.data;
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
      this.setnewEnergy(result);
      return result.data;
    },
    setnewEnergy(result) {
      const currentDate = new Date();

      const lastSeen = new Date(localStorage.getItem("lastSeen"));

      const diffMiliSec = currentDate - lastSeen;
      const diffMin = Math.floor(diffMiliSec / (1000 * 60));
      const newResult = {};
      let energy = 0;
      if (diffMin > 0) {
        result.data.energy + diffMin > 1000
          ? (energy = 1000)
          : (energy = result.data.energy + diffMin);
        newResult = this.changeNutsCount({
          energy: energy,
          nuts: result.data.nuts,
          lastSeen: currentDate.toISOString(),
        });
        this.userInfoData = newResult;
        localStorage.setItem("lastSeen", currentDate.toISOString());
      }
      return newResult;
    },
  },
});

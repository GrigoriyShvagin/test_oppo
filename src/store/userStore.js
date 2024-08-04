import { defineStore } from "pinia";
import axios from "axios";

const url = import.meta.env.VITE_API_BASE_URL;

const headers = {
  Authorization: localStorage.getItem("token"),
};

export const useUserStore = defineStore("uesr", {
  state: () => ({ userInfoData: {}, currentDateState: {} }),
  getters: {
    userInfo: (state) => state.userInfoData,
    currentDate: (state) => state.currentDateState,
  },
  actions: {
    async plusEnergy() {
      this.userInfoData.energy += 1;
      await this.getCurrentTime();
      const date = new Date(this.currentDateState).toISOString();
      this.changeNutsCount({
        energy: this.userInfoData.energy,
        lastSeen: date,
      });
    },
    click() {
      this.userInfoData.energy -= 1;
      this.userInfoData.nuts += 1;
    },
    async changeNutsCount({ energy, nuts }) {
      await this.getCurrentTime();
      let lastSeen = new Date(this.currentDateState).toISOString();
      const params = { energy, lastSeen, nuts };
      const result = await axios.patch(`${url}/user-profile/edit`, params, {
        headers: headers,
      });
      this.userInfoData.energy = energy;
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
    async getCurrentTime() {
      const result = await axios.get(
        `http://worldtimeapi.org/api/timezone/Europe/Moscow`
      );
      let date = new Date();
      let dateMinus = new Date(result.data.datetime);

      this.currentDateState = result.data.datetime;
      return result.data;
    },
    async setnewEnergy(result) {
      await this.getCurrentTime();
      let currentTime = new Date(this.currentDateState);

      const lastSeen = new Date(localStorage.getItem("lastSeen"));

      const diffMiliSec = currentTime - lastSeen;

      const diffMin = Math.floor(diffMiliSec / (1000 * 60));
      let energy = 0;
      if (diffMin >= 0) {
        result.data.energy + diffMin > 1000
          ? (energy = 1000)
          : (energy = result.data.energy + diffMin);
        this.changeNutsCount({
          energy: energy,
          nuts: result.data.nuts,
          lastSeen: currentTime.toISOString(),
        });
        localStorage.setItem("lastSeen", currentTime.toISOString());
      }
    },
  },
});

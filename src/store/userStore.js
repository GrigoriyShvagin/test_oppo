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
    async plusEnergy({ energyBonus }) {
      energyBonus
        ? (this.userInfoData.energy += 2)
        : (this.userInfoData.energy += 1);
      await this.getCurrentTime();
      const date = new Date(this.currentDateState).toISOString();
      this.changeNutsCount({
        energy: this.userInfoData.energy,
        lastSeen: date,
        fields: ["energy", "lastSeen"],
        used: true,
      });
    },

    click({ energyBonus, nutsBonus }) {
      nutsBonus ? (this.userInfoData.nuts += 3) : (this.userInfoData.nuts += 1);
      this.userInfoData.energy -= 1;
    },

    async changeNutsCountMain({ energy, nuts, used, fields }) {
      used ? null : await this.getCurrentTime();
      let lastSeen = new Date(this.currentDateState).toISOString();

      const params = { energy, lastSeen, nuts, fields };
      const result = await axios.patch(`${url}/user-profile/edit`, params, {
        headers: headers,
      });
      return result.data;
    },

    async changeNutsCount({ energy, nuts, used, fields }) {
      used ? null : await this.getCurrentTime();
      let lastSeen = new Date(this.currentDateState).toISOString();

      const params = { energy, lastSeen, nuts, fields };
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

    async getUserLink() {
      const result = await axios.get(`${url}/user-profile`, {
        headers: headers,
      });
      this.userInfoData = result.data;
      return result.data;
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
      const result = await axios.get(`${url}/utils/get-current-date`);
      let dateMinus = new Date(result.data);

      this.currentDateState = result.data;
      return result.data;
    },
    async setnewEnergy(result) {
      await this.getCurrentTime();
      let user = this.userInfoData.bonuses?.split(", ");
      let energyBonus = false;
      user.forEach((e) => {
        e == "energy" ? (energyBonus = true) : null;
      });
      let currentTime = new Date(this.currentDateState);

      const lastSeen = new Date(localStorage.getItem("lastSeen"));

      let diffMiliSec = currentTime - lastSeen;

      let diffMin = Math.floor(diffMiliSec / (1000 * 60));

      energyBonus ? (diffMin *= 2) : null;

      let energy = 0;
      if (diffMin >= 0) {
        result.data.energy + diffMin > 1000
          ? (energy = 1000)
          : (energy = result.data.energy + diffMin);
        this.changeNutsCount({
          energy: energy,
          nuts: result.data.nuts,
          lastSeen: currentTime.toISOString(),
          used: true,
          fields: ["energy", "nuts", "lastSeen"],
        });
        localStorage.setItem("lastSeen", currentTime.toISOString());
      }
    },
  },
});

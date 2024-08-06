import { defineStore } from "pinia";
import axios from "axios";

const url = import.meta.env.VITE_API_BASE_URL;

const headers = {
  Authorization: localStorage.getItem("token"),
};

export const useFriendsStore = defineStore("friends", {
  state: () => ({ friendsListState: [] }),
  getters: {
    friendsList: (state) => state.friendsListState,
  },
  actions: {
    async getFriendsList({ username }) {
      console.log(username);
      const url = "https://waterwa1ker-nuts-b1cb.twc1.net/graphql";
      const query = `query{
    person(username: "${username}") {
        id
        firstName
        lastName
        referralOwners {
            referral {
                username
            }
        }
    }
}`;
      const result = await axios.post(`${url}`, { query });
      this.friendsListState = result.data;
      return result;
    },
  },
});

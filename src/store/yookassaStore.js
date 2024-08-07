import axios from "axios";
import { uuid } from "vue-uuid";
import { defineStore } from "pinia";

const shopId = 435128;
const secretKey = `test_*g58ZdLr1pOtuWrIaEfSrxOCMBbQoKdJbq0fsumA8EgTw`;

export const useYookassaStore = defineStore("yookassa", {
  state: () => ({ redirectLinkState: {} }),
  getters: { redirectLink: (state) => state.redirectLinkState },
  actions: {
    async getRedirectLink({ nuts }) {
      const result = await axios.post(
        `https://api.yookassa.ru/v3/payouts`,
        {
          amount: { value: (nuts / 100).toFixed(2), currency: "RUB" },
          payout_token: {
            type: "bank_card",
            card: { number: "5555555555554477" },
          },
          description: "Payment for order",
        },
        {
          headers: {
            Authorization: secretKey,
            "Idempotence-Key": uuid.v4(),
            "Content-Type": "application/json",
            "Shop-ID": shopId,
          },
        }
      );
      return result.data;
    },
  },
});

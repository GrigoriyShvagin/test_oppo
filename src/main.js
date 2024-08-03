import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import axios from "axios";
import VueAxios from "vue-axios";

import VueLodash from "vue-lodash";
import lodash from "lodash";

const pinia = createPinia();

createApp(App)
  .use(VueAxios, axios)
  .use((VueLodash, { name: "custom", lodash: lodash }))
  .use(router)
  .use(pinia)
  .mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import withUUID from "vue-uuid";

import axios from "axios";
import VueAxios from "vue-axios";

import VueLodash from "vue-lodash";
import lodash from "lodash";

const pinia = createPinia();

const app = withUUID(createApp(App));

app
  .use(VueAxios, axios)
  .use((VueLodash, { name: "custom", lodash: lodash }))
  .use(router)
  .use(pinia)
  .mount("#app");

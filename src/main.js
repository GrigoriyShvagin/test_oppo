import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import VueLodash from "vue-lodash";
import lodash from "lodash";

createApp(App)
  .use((VueLodash, { name: "custom", lodash: lodash }))
  .use(router)
  .mount("#app");

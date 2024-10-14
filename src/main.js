import { createApp } from "vue";
import App from "./App.vue";

import { router } from "./router";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faAngleLeft, faAngleRight);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

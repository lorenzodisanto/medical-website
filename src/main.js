import { createApp } from "vue";
import App from "./App.vue";

import VueGoogleMaps from "@fawmi/vue-google-maps";

import { router } from "./router";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faCalendarDay,
  faLocationDot,
  faMobileScreen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faAngleLeft,
  faAngleRight,
  faStar,
  faCalendarDay,
  faLocationDot,
  faMobileScreen,
  faEnvelope,
  faInstagram
);

const app = createApp(App);

app.use(VueGoogleMaps, {
  load: {
    key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  },
});

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

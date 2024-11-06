import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppService from "./pages/AppService.vue";
import AppGallery from "./pages/AppGallery.vue";
import AppContact from "./pages/AppContact.vue";
import Details from "./components/services/Details.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/chi-siamo",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/servizi",
      name: "service",
      component: AppService,
    },
    {
      path: "/fotogallery",
      name: "gallery",
      component: AppGallery,
    },
    {
      path: "/contatti",
      name: "contact",
      component: AppContact,
    },
    {
      path: "/servizi/:slug",
      name: "service-details",
      component: Details,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Usa la posizione salvata quando si torna indietro o si va avanti
      return savedPosition;
    } else {
      // Scorri all'inizio della pagina
      return { top: 0 };
    }
  },
});
export { router };

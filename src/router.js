import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppService from "./pages/AppService.vue";
import AppGallery from "./pages/AppGallery.vue";
import AppContact from "./pages/AppContact.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/ChiSiamo",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/Servizi",
      name: "service",
      component: AppService,
    },
    {
      path: "/Fotogallery",
      name: "gallery",
      component: AppGallery,
    },
    {
      path: "/Contatti",
      name: "contact",
      component: AppContact,
    },
  ],
});
export { router };

<script>
// importo store
import { store } from "../../store";
export default {
  data() {
    return {
      store,
      service: {},
    };
  },
  mounted() {
    const serviceName = this.$route.params.slug;
    // Cerco il servizio corrispondente utilizzando il parametro 'slug'
    const foundService = this.services.find(
      (service) => service.slug === serviceName
    );
    if (foundService) {
      this.service = foundService;
    } else {
      // Gestisco il caso in cui il servizio non viene trovato
      this.$router.push("/servizi"); // Torna alla lista dei servizi
    }
  },
  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("/image/" + imageName, import.meta.url);
      return imageUrl.href;
    },
  },

  computed: {
    services() {
      return store.services;
    },
  },
};
</script>

<template>
  <div class="container py-5">
    <router-link to="/servizi">Torna ai servizi</router-link>
    <h2 class="mt-4 mb-4">{{ service.name }}</h2>
    <p class="fs-5">{{ service.details }}</p>
    <img :src="buildImagePath(service.image)" alt="" />
  </div>
</template>

<style scoped>
p {
  text-align: justify;
}
</style>

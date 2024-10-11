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
  computed: {
    services() {
      return store.services;
    },
  },
};
</script>

<template>
  <div class="container p-5">
    <h2>{{ service.name }}</h2>
    <p class="fs-5">{{ service.details }}</p>
    <router-link to="/servizi">Torna ai servizi</router-link>
    <img src="/public/logo/DiSanto.logotipo.payoff.orizzontale-01.png" alt="" />
  </div>
</template>

<style scoped></style>

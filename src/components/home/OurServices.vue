<script>
// importo store
import { store } from "../../store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section>
    <div class="container">
      <h2 class="text-center pt-4">I nostri servizi</h2>
      <div class="row g-3 p-4">
        <div class="col-4" v-for="service in store.services">
          <div class="card h-100">
            <img
              src="../../../public/logo/DiSanto.logotipo-01.svg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ service.name }}</h5>
              <p class="card-text">
                {{ service.description }}
              </p>
              <router-link
                :to="{
                  name: 'service-details',
                  params: { slug: service.slug },
                }"
              >
                Vai al servizio
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.border {
  border: 1px dashed black;
}
</style>

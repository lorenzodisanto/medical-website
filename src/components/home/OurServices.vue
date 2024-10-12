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
        <div class="col-12 col-md-6 col-xl-4" v-for="service in store.services">
          <router-link
            :to="{
              name: 'service-details',
              params: { slug: service.slug },
            }"
            ><div class="card h-100">
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
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.border {
  border: 1px dashed black;
}
a {
  text-decoration: none;
}
</style>

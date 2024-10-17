<script>
// importo store
import { store } from "../../store";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("../../assets/" + imageName, import.meta.url);
      return imageUrl.href;
    },
  },
};
</script>

<template>
  <section>
    <div class="container">
      <h2 class="text-center pt-5">I nostri servizi</h2>
      <div class="row g-3 py-5">
        <div class="col-12 col-md-6 col-xl-4" v-for="service in store.services">
          <router-link
            :to="{
              name: 'service-details',
              params: { slug: service.slug },
            }"
            ><div class="card h-100">
              <div class="img-container">
                <img
                  :src="buildImagePath(service.image)"
                  alt=""
                  class="card-img-top"
                />
              </div>
              <div class="card-body service-description">
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

<style lang="scss" scoped>
@use "../../styles/partials/variables.scss" as *;

.card {
  .img-container {
    overflow: hidden;
    .card-img-top {
      transition: 0.7s;
    }
  }
  .service-description {
    h5 {
      font-weight: 600;
    }
    background-color: #7dc9b825;
  }
}
.card:hover img {
  transform: scale(1.1);
  transition: 0.7s;
}
a {
  text-decoration: none;
}
</style>

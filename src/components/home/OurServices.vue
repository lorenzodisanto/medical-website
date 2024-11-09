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
      const imageUrl = new URL("/image/" + imageName, import.meta.url);
      return imageUrl.href;
    },
  },
};
</script>

<template>
  <section>
    <div class="container">
      <h2 class="text-center pt-5" data-aos="zoom-in" data-aos-duration="1500">
        I nostri servizi
      </h2>
      <div class="row g-3 pt-5 pb-3">
        <div class="col-12 col-lg-4" v-for="service in store.services">
          <router-link
            :to="{
              name: 'service-details',
              params: { slug: service.slug },
            }"
            ><div
              class="card h-100"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
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
      <div class="d-flex justify-content-center pb-5">
        <div class="btn-sage" data-aos="zoom-in-down" data-aos-duration="1500">
          <router-link
            :to="{ name: 'service' }"
            active-class="active"
            onclick="location.href='#top';"
            @click="toggleMenu"
          >
            Vai a tutti i servizi
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables.scss" as *;

.card {
  background-color: #7dc9b8;
  box-shadow: 0px 2px 3px 0px #1f3c3e;

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

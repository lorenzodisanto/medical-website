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
    <div class="container py-4">
      <h2 class="text-center fs-1 py-2">I nostri servizi</h2>
      <p>
        Ci occupiamo di tutte le branche dell’Odontoiatria: Pedodonzia,
        Conservativa ed Endodonzia, Chirurgia orale ed Implantologia,
        Riabilitazioni protesiche, Ortodonzia fissa, mobile ed invisibile,
        Gnatologia. Inoltre siamo specializzati in igiene e prevenzione, in
        estetica dentale e Centro di Sbiancamento autorizzato Blancone.
      </p>
      <div class="row g-3 pt-3">
        <div
          class="col-12 col-md-6 col-xl-4"
          v-for="service in store.servicesfull"
        >
          <router-link
            :to="{
              name: 'service-details',
              params: { slug: service.slug },
            }"
            onclick="location.href='#top';"
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
p {
  font-size: 0.9rem;
  text-align: justify;
}
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

@media screen and (min-width: 768px) {
  p {
    font-size: 1rem;
  }
}

@media screen and (min-width: 1200px) {
  p {
    font-size: 1.2rem;
  }
}
</style>

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
      return store.servicesfull;
    },
  },
};
</script>

<template>
  <section>
    <div class="image-top-service">
      <img :src="buildImagePath(service.image)" alt="" />
      <div class="container">
        <div class="path-router">
          <router-link to="/" class="pe-2 text-decoration-underline"
            >Home</router-link
          >
          >
          <router-link to="/servizi" class="px-2 text-decoration-underline"
            >Servizi</router-link
          >
          >
          <a href="">{{ service.name }}</a>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div>
        <div>
          <div class="service-title">
            <h2 class="mt-4 mb-4">{{ service.name }}</h2>
          </div>
          <p>{{ service.details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.image-top-service {
  height: 400px;
  position: relative;
  box-shadow: 0px 2px 3px 0px #1f3c3e;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    opacity: 0.6;
  }
  .container {
    position: relative;
    .path-router {
      position: absolute;
      bottom: 20px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.468);
      display: block;
      padding: 5px 15px;
      margin-right: 10px;
      border-radius: 5px;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}

p {
  text-align: justify;
  font-size: 0.8rem;
}
.image-service {
  width: 300px;
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

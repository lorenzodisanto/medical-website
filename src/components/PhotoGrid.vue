<script>
// importo store
import { store } from "../store";
export default {
  data() {
    return {
      store,
      showOverlay: false, // controllo visibilità dell'overlay
      selectedPhoto: null, // immagine selezionata per l'overlay
    };
  },
  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("/gallery/" + imageName, import.meta.url);
      return imageUrl.href;
    },
    openOverlay(photo) {
      this.selectedPhoto = this.buildImagePath(photo);
      this.showOverlay = true;
    },
    closeOverlay() {
      this.showOverlay = false;
      this.selectedPhoto = null;
    },
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="row g-3 pt-5 pb-3">
        <div
          class="col-6 col-sm-4 col-md-3 col-lg-2"
          v-for="photo in store.photos"
          :key="photo"
        >
          <div class="photo-container" @click="openOverlay(photo)">
            <img :src="buildImagePath(photo)" alt="" class="photo" />
          </div>
        </div>
      </div>
    </div>

    <!-- Overlay per visualizzazione foto -->
    <div v-if="showOverlay" class="overlay" @click="closeOverlay">
      <div class="overlay-content" @click.stop>
        <div class="overlay-photo-container">
          <button class="close-button" @click="closeOverlay">✕</button>
          <img
            :src="selectedPhoto"
            alt="Selected Photo"
            class="overlay-photo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

section {
  .photo-container {
    width: 100%;
    aspect-ratio: 1 / 1;
    .photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.7s;
    }

    .photo:hover {
      transform: scale(1.05);
      transition: 0.7s;
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    .overlay-content {
      width: 100%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      .overlay-photo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        .close-button {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255, 255, 255, 0.8);
          border: none;
          border-radius: 5px;
          width: 30px;
          height: 30px;
          font-size: 20px;
          font-weight: bold;
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;

          &:hover {
            background: rgba(255, 255, 255, 1);
          }
        }

        .overlay-photo {
          width: 90%;
          height: 90%;
          border-radius: 5px;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  section {
    .overlay {
      .overlay-content {
        width: 80%;
      }
    }
  }
}
@media screen and (min-width: 992px) {
  section {
    .overlay {
      .overlay-content {
        width: 70%;
      }
    }
  }
}
</style>

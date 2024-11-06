<!-- <script>
export default {
  name: "Partners",
  data() {
    return {
      partners: [
        {
          img: "lumineers.png",
          link: "https://lumineersitalia.it/",
        },
        {
          img: "gbt.png",
          link: "https://www.ems-dental.com/it",
        },
        {
          img: "blancone.png",
          link: "https://www.blancone.eu/it/",
        },
        {
          img: "lyraetk.png",
          link: "https://www.lyraetk.com/it/pagina-iniziale/",
        },
        {
          img: "doctor-smile.png",
          link: "https://www.doctor-smile.com/",
        },
      ],
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
    <div class="container-fluid">
      <h2 class="text-center py-3">Centro di Eccellenza</h2>
      <div class="row p-3 text-center">
        <div
          class="col-12 col-md-6 col-xl-3 col-box"
          v-for="partner in partners"
        >
          <a :href="partner.link" target="_blank">
            <div class="partner-box">
              <img :src="buildImagePath(partner.img)" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.col-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.partner-box {
  padding: 0px 85px;
  transition: 0.7s;
}
.partner-box:hover {
  transform: scale(1.1);
  transition: 0.7s;
}
</style> -->

<script>
export default {
  name: "Partners",
  data() {
    return {
      partners: [
        { img: "lumineers.png", link: "https://lumineersitalia.it/" },
        { img: "gbt.png", link: "https://www.ems-dental.com/it" },
        { img: "blancone.png", link: "https://www.blancone.eu/it/" },
        {
          img: "lyraetk.png",
          link: "https://www.lyraetk.com/it/pagina-iniziale/",
        },
        { img: "doctor-smile.png", link: "https://www.doctor-smile.com/" },
        // Aggiungi più immagini se necessario
      ],
      currentSlide: 0,
      slidesToShow: 4,
      transitionStyle: "transform 0.5s ease-in-out",
    };
  },
  computed: {
    totalSlides() {
      return this.partners.length;
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    clearInterval(this.slideInterval);
  },
  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("/image/" + imageName, import.meta.url);
      return imageUrl.href;
    },
    startAutoSlide() {
      this.slideInterval = setInterval(() => {
        if (this.currentSlide < this.totalSlides) {
          // Scorre normalmente
          this.currentSlide++;
        } else {
          // Transizione invisibile quando raggiunge i cloni
          this.transitionStyle = "none";
          this.currentSlide = 0;
        }
      }, 3000);
    },
    handleTransitionEnd() {
      // Riattiva la transizione se si è appena riposizionato all'inizio
      if (this.currentSlide === 0) {
        this.transitionStyle = "transform 0.5s ease-in-out";
      }
    },
  },
};
</script>

<template>
  <section>
    <div class="container">
      <h2 class="text-center py-3">Centro di Eccellenza</h2>
      <div class="slider-container py-4">
        <div
          class="slider"
          :style="{
            transform: `translateX(-${currentSlide * 25}%)`,
            transition: transitionStyle,
          }"
          @transitionend="handleTransitionEnd"
        >
          <!-- Slider Originale -->
          <div class="slide" v-for="(partner, index) in partners" :key="index">
            <a :href="partner.link" target="_blank">
              <div class="partner-box">
                <img :src="buildImagePath(partner.img)" alt="" />
              </div>
            </a>
          </div>
          <!-- Cloni dei primi 4 elementi per continuità -->
          <div
            class="slide"
            v-for="(partner, index) in partners.slice(0, slidesToShow)"
            :key="'clone-' + index"
          >
            <a :href="partner.link" target="_blank">
              <div class="partner-box">
                <img :src="buildImagePath(partner.img)" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slider-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}
.slider {
  display: flex;
  width: calc(
    100% * 2
  ); /* Larghezza doppia per contenere gli elementi clonati */
}

@media screen and (min-width: 768px) {
  .slider {
    width: 100%;
  }
}
.slide {
  flex: 0 0 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.partner-box {
  padding: 0px 30px;
  transition: 0.7s;
}
.partner-box:hover {
  transform: scale(1.1);
  transition: 0.7s;
}
.partner-box img {
  max-width: 100%;
  height: auto;
}
</style>

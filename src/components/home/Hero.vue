<script>
export default {
  name: "Hero",
  data() {
    return {
      activeSlide: 0,
      autoPlay: false,

      slides: [
        {
          title: "Centro di Odontoiatria Microscopica",
          img: "slide_01.png",
        },
        {
          text_01:
            "Studio Odontoiatrico che mette al centro di tutte le cure il <b>Microscopio</b> e l'innovazione digitale",
          img: "slide_01.png",
        },
        {
          text_01:
            "L'Odontoiatra al Microscopio è un medico che non si accontenta.",
          text_02:
            "Preciso, attento, delicato. Richiede il massimo a se stesso per dare il massimo ai propri pazienti",
          img: "slide_01.png",
        },
      ],
    };
  },

  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("/image/" + imageName, import.meta.url);
      return imageUrl.href;
    },

    nextClick() {
      if (this.activeSlide >= this.slides.length - 1) {
        this.activeSlide = 0;
      } else {
        this.activeSlide++;
      }
    },

    prevClick() {
      if (this.activeSlide <= 0) {
        this.activeSlide = this.slides.length - 1;
      } else {
        this.activeSlide--;
      }
    },

    setAutoplay() {
      this.autoPlay = setInterval(() => {
        this.nextClick();
      }, 8000);
    },
  },

  mounted() {
    this.setAutoplay();
  },
};
</script>

<template>
  <section>
    <!-- HERO MOBILE -->
    <div class="d-md-none section-mobile">
      <div class="px-4 pt-5 mobile-image">
        <img
          src="/public/logo/DiSanto.logotipo.payoff.verticale-01.png"
          alt=""
        />
      </div>
      <div class="mobile-slide">
        <img src="/public/image/slide_01.png" alt="" />
      </div>
    </div>

    <!-- HERO DESKTOP-TABLET -->
    <div class="container slider-content">
      <div class="hero-text">
        <img
          src="/public/logo/DiSanto.logotipo.payoff.verticale-01.png"
          alt=""
        />
        <h1>
          {{ slides[activeSlide].title }}
        </h1>
        <h3 class="mt-5 mb-3" v-html="slides[activeSlide].text_01"></h3>
        <h3 v-html="slides[activeSlide].text_02"></h3>
      </div>
      <div class="hero-image">
        <img :src="buildImagePath(slides[activeSlide].img)" alt="" />
      </div>
      <div class="prev arrow" @click="prevClick()">
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </div>
      <div class="next arrow" @click="nextClick()">
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables.scss" as *;
section {
  background-image: url(../../assets/hero-background.png);
  background-size: cover;
  height: 550px;
  position: relative;

  .section-mobile {
    position: relative;
    height: 100%;
    .mobile-image {
      position: absolute;
      top: 0;
      left: 0;
      img {
        width: 300px;
      }
    }
    .mobile-slide {
      position: absolute;
      right: 0;
      bottom: 0;
      img {
        width: 300px;
      }
    }
  }

  .slider-content {
    display: none;
    position: relative;
    height: 100%;

    .hero-text {
      margin-top: 40px;
      width: 50%;
      img {
        width: 80%;
      }
      h1 {
        font-weight: 500;
        margin-top: 50px;
        font-size: 2rem;
      }
      h3 {
        font-size: 1.2rem;
      }
    }
    .hero-image {
      width: 500px;
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
    .arrow {
      position: absolute;
      font-size: 2rem;
      // display: flex;
      display: none;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      top: 50%;
      cursor: pointer;
    }
    .prev {
      left: -50px;
    }
    .next {
      right: -50px;
    }
  }
}

@media screen and (min-width: 545px) {
  section {
    .section-mobile {
      .mobile-slide {
        img {
          width: 350px;
        }
      }
    }
  }
}

@media screen and (min-width: 600px) {
  section {
    .section-mobile {
      .mobile-slide {
        img {
          width: 380px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  section {
    height: 640px;

    .slider-content {
      display: flex;
      justify-content: space-between;
      .hero-image {
        width: 460px;
      }

      .hero-text {
        h1 {
          font-weight: 500;
          margin-top: 50px;
          font-size: 2.5rem;
        }
        h3 {
          font-size: 1.5rem;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  section {
    .slider-content {
      .hero-text {
        h1 {
          font-size: 2.6rem;
        }
        h3 {
          font-size: 1.7rem;
        }
      }
    }
  }
}
</style>

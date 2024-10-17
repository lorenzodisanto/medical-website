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
            "Studio Odontoiatrico che mette al centro di tutte le cure il Microscopio e l'innovazione digitale",
          img: "slide_02.jpg",
        },
        {
          text_01:
            "L'Odontoiatra al Microscopio è un medico che non si accontenta.",
          text_02:
            "Preciso, attento, delicato. Richiede il massimo a se stesso per dare il massimo ai propri pazienti",
          img: "slide_03.JPEG",
        },
      ],
    };
  },

  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("/assets/" + imageName, import.meta.url);
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
    <div class="container slider-content">
      <div class="hero-text">
        <img
          src="/public/logo/DiSanto.logotipo.payoff.verticale-01.png"
          alt=""
        />
        <h1 class="mt-5">{{ slides[activeSlide].title }}</h1>
        <h3 class="mt-5 mb-0">{{ slides[activeSlide].text_01 }}</h3>
        <h3>{{ slides[activeSlide].text_02 }}</h3>
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
  height: 675px;
  position: relative;

  .slider-content {
    display: flex;
    justify-content: space-between;
    height: 100%;

    .hero-text {
      margin-top: 80px;
      width: 50%;
      img {
        width: 80%;
      }
      h1 {
        font-weight: 500;
        margin-top: 50px;
      }
    }
    .hero-image {
      width: 500px;
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
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      top: 50%;
      cursor: pointer;
    }
    .prev {
      left: 50px;
    }
    .next {
      right: 50px;
    }
  }
}
</style>

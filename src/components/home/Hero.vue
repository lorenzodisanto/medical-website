<script>
export default {
  name: "Hero",
  data() {
    return {
      activeSlide: 0,
      autoPlay: false,

      slides: [
        {
          text: "Centro di Odontoiatria Microscopica",
          img: "slide_01.png",
        },
        {
          text: "Studio Odontoiatrico che mette al centro di tutte le cure il Microscopio e l'innovazione digitale",
          img: "slide_02.jpg",
        },
        {
          text: "L'Odontoiatra al Microscopio è un medico che non si accontenta. Preciso, attento, delicato. Richiede il massimo a se stesso per dare il massimo ai propri pazienti",
          img: "slide_03.JPEG",
        },
      ],
    };
  },

  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL(
        "../../assets/heroImg/" + imageName,
        import.meta.url
      );
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
      }, 5000);
    },
  },

  mounted() {
    this.setAutoplay();
  },
};
</script>

<template>
  <section>
    <div class="container d-flex justify-content-between">
      <div class="w-50 hero-logo">
        <img
          src="/public/logo/DiSanto.logotipo.payoff.verticale-01.png"
          alt=""
        />
        <h3 class="mt-5">{{ slides[activeSlide].text }}</h3>
      </div>
      <div class="hero-profile">
        <img :src="buildImagePath(slides[activeSlide].img)" alt="" />
      </div>
      <div class="prev arrow" @click="prevClick()">
        <span><-</span>
      </div>
      <div class="next arrow" @click="nextClick()">
        <span>-></span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables.scss" as *;
section {
  background-color: $fresh-teal;
  height: 675px;
  position: relative;
  .hero-logo {
    margin-top: 80px;
    img {
      width: 80%;
    }
    h1 {
      font-weight: 500;
      margin-top: 50px;
    }
  }
  .hero-profile {
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .arrow {
    position: absolute;
    background-color: $bone;
    width: 30px;
    height: 30px;
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
</style>

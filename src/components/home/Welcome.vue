<script>
export default {
  name: "Welcome",
};
</script>

<template>
  <section>
    <div class="container welcome-content">
      <div
        class="welcome-image py-4"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h3 class="mb-4 d-lg-none fs-2">Benvenuti nel nostro centro!</h3>
        <img src="../../assets/sala-attesa.jpg" alt="" />
      </div>
      <div class="welcome-description">
        <div class="pt-lg-5" data-aos="fade-right" data-aos-duration="1500">
          <h3 class="d-none d-lg-block pb-3">Benvenuti nel nostro centro!</h3>
          <p class="welcome-text">
            Di Santo Odontoiatria Specialistica è un centro odontoiatrico a
            Telese Terme (BN). Lavoriamo con passione, con precisione grazie ai
            nostri Microscopi che usiamo in tutti i campi dell’odontoiatria e
            sempre attenti all’innovazione, mettendo al primo posto il benessere
            e la salute dei pazienti. Ci occupiamo di . . .
          </p>
        </div>
        <div
          class="d-inline-block mb-3"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div class="btn-sage">
            <router-link :to="{ name: 'about' }" active-class="active">
              Continua a leggere
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
  background-image: url(../../assets/sala-bg.png);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  color: black;
  .welcome-content {
    // padding: 0 20px;
    font-size: 0.9rem;

    .welcome-image {
      text-align: center;
      img {
        border-radius: 10px;
      }
    }
    .welcome-description {
      // .welcome-text {
      //   text-align: justify;
      // }
      .btn-sage {
        padding: 8px 13px;
        a {
          font-size: 0.9rem;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  section {
    .welcome-content {
      font-size: 1rem;

      .welcome-description {
        .btn-sage {
          padding: 10px 15px;
          a {
            font-size: 1rem;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .welcome-content {
    display: flex;
    justify-content: center;
    // align-items: center;
    gap: 20px;

    .welcome-description {
      width: 50%;
    }
    .welcome-image {
      width: 50%;
    }
  }
}
@media screen and (min-width: 1200px) {
  .welcome-content {
    .welcome-text {
      font-size: 1.2rem;
    }
  }
}
</style>

<script>
export default {
  name: "Welcome",
};
</script>

<template>
  <section>
    <div class="container-fluid welcome-content">
      <div class="welcome-image py-4">
        <h3 class="mb-4 d-lg-none">Benvenuti nel nostro centro!</h3>
        <img src="../../assets/sala-attesa.jpg" alt="" />
      </div>
      <div>
        <div>
          <h3 class="d-none d-lg-block">Benvenuti nel nostro centro!</h3>
          <p class="welcome-text pb-3">
            Di Santo Odontoiatria Specialistica è un centro odontoiatrico a
            Telese Terme (BN). Lavoriamo con passione, con precisione grazie ai
            nostri Microscopi che usiamo in tutti i campi dell’odontoiatria e
            sempre attenti all’innovazione, mettendo al primo posto il benessere
            e la salute dei pazienti. Ci occupiamo di . . .
          </p>
        </div>
        <div class="d-inline-block pb-3">
          <div class="btn-sage">
            <router-link
              :to="{ name: 'about' }"
              active-class="active"
              onclick="location.href='#top';"
              @click="toggleMenu"
            >
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
  // box-shadow: 0px 2px 3px 0px $fresh-teal;
  .welcome-content {
    // display: flex;
    // justify-content: center;
    // align-items: center;

    .welcome-image {
      // text-align: end;
      text-align: center;
      img {
        // width: 80%;
        border-radius: 10px;
      }
    }
    .welcome-text {
      // width: 80%;
      text-align: justify;
    }
  }
}
@media screen and (min-width: 992px) {
  .welcome-content {
    display: flex;
    justify-content: center;
    align-items: center;

    .welcome-image {
      text-align: end;
      text-align: center;
      img {
        width: 80%;
        border-radius: 10px;
      }
    }
    .welcome-text {
      width: 80%;
      text-align: justify;
      font-size: 0.8rem;
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

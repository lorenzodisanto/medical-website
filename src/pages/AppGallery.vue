<script>
export default {
  name: "AppGallery",
};
</script>

<template>
  <section>
    <div class="image-top-service">
      <img src="/image/fotogallery.png" alt="" />
      <div class="container">
        <div class="path-router">
          <router-link to="/" class="pe-2 text-decoration-underline"
            >Home</router-link
          >

          >
          <a href="">Fotogallery</a>
        </div>
      </div>
    </div>
    <div class="container py-4">
      <h2
        class="text-center fs-1 py-2"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        Fotogallery
      </h2>
      <p class="fs-5" data-aos="fade-right" data-aos-duration="1500">
        Nessuna foto disponibile
      </p>
      <img
        src="/public/logo/DiSanto.logotipo.payoff.orizzontale-01.png"
        alt=""
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url(../assets/hero-background.png);
  background-size: cover;
  background-attachment: fixed;

  .image-top-service {
    height: 250px;
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
}

@media screen and (min-width: 768px) {
  section {
    .image-top-service {
      height: 400px;
    }
  }
}
</style>

<script>
import OurServicesFull from "../components/home/OurServicesFull.vue";
export default {
  name: "AppService",

  components: { OurServicesFull },
};
</script>

<template>
  <section>
    <div class="image-top-service">
      <img src="/image/poltrona.png" alt="" />
      <div class="container">
        <div class="path-router">
          <router-link to="/" class="pe-2 text-decoration-underline"
            >Home</router-link
          >

          >
          <a href="">Servizi</a>
        </div>
      </div>
    </div>
    <our-services-full></our-services-full>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url(../assets/sala-bg.png);
  background-attachment: fixed;
  background-size: cover;
  background-position: right;

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

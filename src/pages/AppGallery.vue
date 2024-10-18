<script>
export default {
  name: "AppGallery",
};
</script>

<template>
  <section>
    <div class="container">
      <h2 class="pt-5 mb-3 text-center">Fotogallery</h2>
      <p class="fs-5">Nessuna foto disponibile</p>
      <img
        src="/public/logo/DiSanto.logotipo.payoff.orizzontale-01.png"
        alt=""
      />
    </div>
  </section>
</template>

<style scoped>
section {
  background-image: url(../assets/hero-background.png);
  background-size: cover;
  background-attachment: fixed;
}
</style>

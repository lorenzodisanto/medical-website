<script>
import GoogleMap from "../components/home/GoogleMap.vue";
export default {
  name: "AppContact",
  components: { GoogleMap },
};
</script>

<template>
  <section>
    <div class="container">
      <h2 class="mt-5 mb-3">Contatti</h2>
      <img
        src="/public/logo/DiSanto.logotipo.payoff.orizzontale-01.png"
        alt=""
      />
    </div>
    <google-map></google-map>
  </section>
</template>

<style scoped></style>

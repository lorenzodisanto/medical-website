<script>
import Hero from "../components/home/Hero.vue";
import Partners from "../components/home/Partners.vue";
import Welcome from "../components/home/Welcome.vue";
import OurServices from "../components/home/OurServices.vue";
import Rewies from "../components/home/Rewies.vue";
import GoogleMap from "../components/home/GoogleMap.vue";
export default {
  name: "AppHome",

  components: { Hero, Partners, Welcome, OurServices, Rewies, GoogleMap },
};
</script>

<template>
  <hero></hero>
  <welcome></welcome>
  <our-services></our-services>
  <partners></partners>
  <rewies></rewies>
  <google-map></google-map>
</template>

<style scoped></style>

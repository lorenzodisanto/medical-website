<script>
import OurServicesFull from "../components/home/OurServicesFull.vue";
export default {
  name: "AppService",

  components: { OurServicesFull },
};
</script>

<template>
  <section>
    <our-services-full></our-services-full>
  </section>
</template>

<style scoped>
section {
  background-image: url(../assets/sala-bg.png);
  background-attachment: fixed;
  background-size: cover;
  background-position: right;
}
</style>

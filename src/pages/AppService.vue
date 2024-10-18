<script>
import OurServices from "../components/home/OurServices.vue";
export default {
  name: "AppService",

  components: { OurServices },
};
</script>

<template>
  <section>
    <our-services></our-services>
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

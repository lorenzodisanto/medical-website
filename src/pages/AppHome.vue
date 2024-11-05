<script>
import Hero from "../components/home/Hero.vue";
import Partners from "../components/home/Partners.vue";
import Welcome from "../components/home/Welcome.vue";
import OurServices from "../components/home/OurServices.vue";
import Rewies from "../components/home/Rewies.vue";
export default {
  name: "AppHome",

  components: { Hero, Partners, Welcome, OurServices, Rewies },
};
</script>

<template>
  <hero></hero>
  <partners></partners>
  <welcome></welcome>
  <our-services></our-services>
  <rewies></rewies>
  <div>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12004.810346301854!2d14.529735984826662!3d41.21735548011066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a44664664863d%3A0xe5e10b9c118d0bb3!2sDi%20Santo%20Odontoiatria%20Specialistica%20-%20Studio%20Dentistico%20Dott.%20Salvatore%20Di%20Santo!5e0!3m2!1sit!2sit!4v1730841454702!5m2!1sit!2sit"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<style scoped></style>

<script>
// Importa header, footer e loader
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import Loader from "./components/Loader.vue";

export default {
  data() {
    return {
      isLoading: true, // Stato per gestire il loader
    };
  },

  components: { AppHeader, AppFooter, Loader },

  mounted() {
    // Nasconde il loader dopo 2 secondi
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<template>
  <!-- Mostra il contenuto solo quando il loader è nascosto -->

  <app-header></app-header>
  <router-view> </router-view>
  <app-footer></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
img {
  width: 100%;
}
</style>

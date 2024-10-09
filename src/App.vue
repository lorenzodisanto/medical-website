<script>
// importo header e footer
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },

  components: { AppHeader, AppFooter },
};
</script>

<template>
  <app-header></app-header>
  <div class="logo">
    <img src="/public/logo/DiSanto.logotipo-02.svg" alt="" />
  </div>
  <app-footer></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

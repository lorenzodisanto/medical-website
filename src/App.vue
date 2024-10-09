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
  <div>
    <img src="/public/logo/DiSanto.logotipo.payoff.orizzontale-01.png" alt="" />
  </div>
  <app-footer></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
img {
  width: 100%;
}
</style>

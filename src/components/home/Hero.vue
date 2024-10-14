<script>
export default {
  name: "Hero",
};
</script>

<template>
  <section>
    <div class="container d-flex justify-content-between">
      <div class="w-50 hero-logo">
        <img
          src="/public/logo/DiSanto.logotipo.payoff.verticale-01.png"
          alt=""
        />
        <h1>Centro di Odontoiatria <br />Microscopica</h1>
      </div>
      <div class="hero-profile">
        <img src="/public/profile.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables.scss" as *;
section {
  background-color: $fresh-teal;
  .hero-logo {
    margin-top: 80px;
    h1 {
      font-weight: 500;
      margin-top: 50px;
    }
  }
  .hero-profile {
    width: 500px;
    img {
      width: 100%;
    }
  }
}
</style>

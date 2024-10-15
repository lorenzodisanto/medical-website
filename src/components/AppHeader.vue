<script></script>

<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <div class="header-logo">
        <router-link :to="{ name: 'home' }">
          <img src="../../public/logo/DiSanto.logotipo-02.svg" alt="" />
        </router-link>
      </div>
      <div>
        <ul class="d-flex mb-0">
          <li>
            <router-link :to="{ name: 'about' }" active-class="active">
              CHI SIAMO
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'service' }" active-class="active">
              SERVIZI
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'gallery' }" active-class="active">
              FOTOGALLERY
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'contact' }" active-class="active">
              CONTATTI
            </router-link>
          </li>
        </ul>
      </div>
      <div class="btn-sage"><a href="tel:+393478960497">Chiama ora</a></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

header {
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0px 2px 3px 0px $sage;
  z-index: 1;

  .header-logo {
    width: 200px;
  }
  li {
    list-style: none;
    margin-right: 50px;
    a {
      text-decoration: none;
      color: black;
    }
  }
}
</style>

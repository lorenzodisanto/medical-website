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
            <router-link :to="{ name: 'about' }"> CHI SIAMO </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'service' }"> SERVIZI </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'gallery' }"> FOTOGALLERY </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'contact' }"> CONTATTI </router-link>
          </li>
        </ul>
      </div>
      <div>Chiama ora</div>
    </div>
  </header>
</template>

<style scoped>
header {
  border: 1px dashed black;

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

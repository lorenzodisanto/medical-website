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
            <router-link :to="{ name: 'about' }"> Chi siamo </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'service' }"> Servizi </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'gallery' }"> Fotogallery </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'contact' }"> Contatti </router-link>
          </li>
        </ul>
      </div>
      <div>Chiama ora</div>
    </div>
  </header>
</template>

<style scoped>
header {
  border: 1px dashed red;

  .header-logo {
    width: 200px;
  }
  li {
    list-style: none;
    margin-right: 50px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <header>
    <!-- HEADER DESKTOP/TABLET -->
    <div class="d-none d-lg-block">
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
    </div>

    <!-- HEADER MOBILE!!!! -->
    <div class="mobile-header d-lg-none">
      <div class="logo">
        <router-link :to="{ name: 'home' }">
          <img src="../../public/logo/DiSanto.simbolo-02.svg" alt="" />
        </router-link>
      </div>

      <!-- Menu Hamburger -->
      <div class="hamburger-menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Menu di Navigazione -->
      <nav v-bind:class="{ 'is-open': isMenuOpen }" class="mobile-nav">
        <ul>
          <li>
            <router-link
              :to="{ name: 'about' }"
              active-class="active"
              onclick="location.href='#top';"
              @click="toggleMenu"
            >
              CHI SIAMO
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'service' }"
              active-class="active"
              onclick="location.href='#top';"
              @click="toggleMenu"
            >
              SERVIZI
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'gallery' }"
              active-class="active"
              onclick="location.href='#top';"
              @click="toggleMenu"
            >
              FOTOGALLERY
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'contact' }"
              active-class="active"
              onclick="location.href='#top';"
              @click="toggleMenu"
            >
              CONTATTI
            </router-link>
          </li>
          <li>
            <div class="btn-sage">
              <a href="tel:+393478960497">Chiama ora</a>
            </div>
          </li>
        </ul>
      </nav>
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
  // height: 80px;

  .header-logo {
    width: 200px;
  }
  li {
    list-style: none;
    margin-right: 50px;
    a {
      text-decoration: none;
      color: $sage;
    }
    a:hover {
      color: $fresh-teal;
    }
  }

  // mobile header
  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: white;
  }

  .logo img {
    width: 70px;
  }

  /* Menu Hamburger */
  .hamburger-menu {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .hamburger-menu span {
    height: 3px;
    width: 25px;
    background-color: $sage;
    margin: 4px 0;
    transition: all 0.3s;
  }

  /* Menu di Navigazione (nascosto di default) */
  .mobile-nav {
    position: absolute;
    top: 70px;
    right: 0;
    left: 0;
    background-color: white;
    display: none;
    text-align: center;
  }

  .mobile-nav ul {
    list-style-type: none;
  }

  .mobile-nav ul li {
    padding: 15px 0;
  }

  .mobile-nav ul li a {
    text-decoration: none;
    color: $sage;
    font-size: 18px;
  }
  .mobile-nav ul li .btn-sage {
    display: inline-block;
    a {
      color: white;
    }
  }

  /* Visualizza il menu se isMenuOpen è true */
  .mobile-nav.is-open {
    display: block;
  }
}
</style>

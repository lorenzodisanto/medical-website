<script>
// importo store
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row py-4">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="py-3">
            <h4>Contatti</h4>
            <ul>
              <li>
                <font-awesome-icon
                  :icon="['fas', 'location-dot']"
                  class="me-3 fs-5"
                />Via Benevento 19, 82037 Telese Terme (BN)
              </li>
              <li>
                <font-awesome-icon
                  :icon="['fas', 'mobile-screen']"
                  class="me-3 fs-5"
                />+39 347 89 60 497
              </li>
              <li class="mail-link">
                <a href="mailto:dott.salvatoredisanto@gmail.com"
                  ><font-awesome-icon
                    :icon="['fas', 'envelope']"
                    class="me-3 fs-5"
                  />dott.salvatoredisanto@gmail.com</a
                >
              </li>
              <li class="link-instagram">
                <a
                  href="https://www.instagram.com/disanto_odonto_specialistica/"
                  target="_blank"
                  ><font-awesome-icon :icon="['fab', 'instagram']"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="py-3">
            <h4>Servizi</h4>
            <ul>
              <li v-for="service in store.services" class="service-footer">
                <router-link
                  :to="{
                    name: 'service-details',
                    params: { slug: service.slug },
                  }"
                  onclick="location.href='#top';"
                >
                  - {{ service.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="py-3">
            <h4>Giorni di apertura</h4>
            <ul>
              <li>
                <font-awesome-icon
                  :icon="['fas', 'calendar-day']"
                  class="me-3 fs-5"
                />Lunedì - Sabato
              </li>
            </ul>
            <img
              src="../../public/logo/DiSanto.logotipo.payoff.verticale-04.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container py-4">
        <span>
          Copyright © Di Santo Odontoiatria Specialistica. All Rights Reserved.
          Direttore sanitario: Dr. Salvatore Di Santo.
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
footer {
  background-color: $sage;
  color: $white;
  h4 {
    margin-bottom: 0;
  }

  ul {
    display: inline;
    li {
      list-style: none;
      padding: 5px;
      a {
        text-decoration: none;
        color: white;
      }
    }
    .link-instagram {
      font-size: 2.3rem;
    }
  }

  .footer-bottom {
    background-color: black;
    span {
      font-size: 0.8rem;
    }
  }
  .service-footer:hover a {
    color: $fresh-teal;
  }
  .mail-link:hover a {
    color: $fresh-teal;
  }
  .link-instagram:hover a {
    color: $fresh-teal;
  }
}
</style>

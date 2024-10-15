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
        <div class="col">
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
        <div class="col">
          <h4>Servizi</h4>
          <ul>
            <li v-for="service in store.services" class="service-footer">
              -
              <router-link
                :to="{
                  name: 'service-details',
                  params: { slug: service.slug },
                }"
                class="ms-2"
              >
                {{ service.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col">
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
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                class="me-3 fs-5"
              />
              <a href="mailto:dott.salvatoredisanto@gmail.com"
                >dott.salvatoredisanto@gmail.com</a
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
    </div>
    <div class="footer-bottom">
      <div class="container py-2">
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

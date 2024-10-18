<script>
import GoogleMap from "../components/home/GoogleMap.vue";
export default {
  name: "AppContact",
  components: { GoogleMap },
};
</script>

<template>
  <section>
    <div class="container">
      <h2 class="pt-5 mb-5 text-center">Prenota un appuntamento</h2>
      <p class="fs-5">
        Contatta il centro per prenotare un appuntamento o per qualsiasi altra
        domanda. Siamo qui per offrirti le migliori cure odontoiatriche e
        rispondere a tutte le tue esigenze. Lo studio riceve solo su
        appuntamento.
      </p>
      <div class="row py-5">
        <div class="col-12 col-md-6 col-lg-3">
          <div>
            <font-awesome-icon
              :icon="['fas', 'location-dot']"
              class="mb-3 fs-1 icon-box"
            />
          </div>

          <h4>Indirizzo</h4>
          <p>Via Benevento 19, 82037 Telese Terme (BN)</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <font-awesome-icon
            :icon="['fas', 'calendar-day']"
            class="mb-3 fs-1 icon-box"
          />
          <h4>Giorni di apertura</h4>
          <p>Lunedì - Sabato</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <font-awesome-icon
            :icon="['fas', 'mobile-screen']"
            class="mb-3 fs-1 icon-box"
          />
          <h4>Telefono/Whatsapp</h4>
          <p>+39 347 89 60 497</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            class="mb-3 fs-1 icon-box"
          />
          <h4>Email</h4>
          <p>dott.salvatoredisanto@gmail.com</p>
        </div>
      </div>
    </div>
    <google-map></google-map>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section {
  background-image: url(../assets/sala-bg.png);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  p {
    text-align: justify;
  }
  .row {
    text-align: center;
    p {
      text-align: center;
    }
  }
  .icon-box {
    background-color: $fresh-teal;
    width: 40px;
    height: 40px;
    padding: 15px;
    border-radius: 50%;
  }
}
</style>

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
      <h2 class="mt-5 mb-5 text-center">Prenota un appuntamento</h2>
      <p class="text-center fs-5">
        Contatta lo studio per prenotare un appuntamento o per qualsiasi altra
        domanda. Siamo qui per offrirti le migliori cure odontoiatriche e
        rispondere a tutte le tue esigenze. Lo studio riceve solo su
        appuntamento.
      </p>
      <div class="row py-5">
        <div class="col text-center">
          <font-awesome-icon
            :icon="['fas', 'location-dot']"
            class="mb-3 fs-1"
          />
          <h4>Indirizzo</h4>
          <p>Via Benevento 19, 82037 Telese Terme (BN)</p>
        </div>
        <div class="col text-center">
          <font-awesome-icon
            :icon="['fas', 'calendar-day']"
            class="mb-3 fs-1"
          />
          <h4>Giorni di apertura</h4>
          <p>Lunedì - Sabato</p>
        </div>
        <div class="col text-center">
          <font-awesome-icon
            :icon="['fas', 'mobile-screen']"
            class="mb-3 fs-1"
          />
          <h4>Telefono/Whatsapp</h4>
          <p>+39 347 89 60 497</p>
        </div>
        <div class="col text-center">
          <font-awesome-icon :icon="['fas', 'envelope']" class="mb-3 fs-1" />
          <h4>EMail</h4>
          <p>dott.salvatoredisanto@gmail.com</p>
        </div>
      </div>
    </div>
    <google-map></google-map>
  </section>
</template>

<style scoped></style>

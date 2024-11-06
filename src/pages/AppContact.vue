<script>
export default {
  name: "AppContact",
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
          <p>Via Benevento 19, 82037 Telese (BN)</p>
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
          <p class="mb-0">+39 347 89 60 497</p>
          <p>0824 97 68 28</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            class="mb-3 fs-1 icon-box"
          />
          <h4>Email</h4>
          <p>info@di-santo.it</p>
        </div>
      </div>
    </div>
    <div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12004.810346301854!2d14.529735984826662!3d41.21735548011066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a44664664863d%3A0xe5e10b9c118d0bb3!2sDi%20Santo%20Odontoiatria%20Specialistica%20-%20Studio%20Dentistico%20Dott.%20Salvatore%20Di%20Santo!5e0!3m2!1sit!2sit!4v1730841454702!5m2!1sit!2sit"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section {
  background-image: url(../assets/sala-bg.png);
  background-attachment: fixed;
  background-size: cover;
  background-position: right;
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
    padding: 20px;
    border-radius: 50%;
  }
}
</style>

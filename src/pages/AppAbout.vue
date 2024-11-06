<script>
export default {
  name: "AppAbout",
};
</script>

<template>
  <section>
    <div class="container pt-4">
      <h2 class="mt-5 mb-5 text-center">Chi siamo</h2>
      <!-- <img src="/public/logo/DiSanto.logotipo.payoff.orizzontale-01.png" alt="" /> -->
      <div class="fs-5">
        <div class="left mb-5 d-lg-flex">
          <div class="left-image">
            <img src="/image/ingresso.jpg" alt="" />
          </div>
          <div class="right-text">
            <p>
              Di Santo Odontoiatria Specialistica è un centro odontoiatrico a
              Telese Terme (BN). Lavoriamo con passione, con precisione grazie
              ai nostri Microscopi che usiamo in tutti i campi dell’odontoiatria
              e sempre attenti all’innovazione, mettendo al primo posto il
              benessere e la salute dei pazienti.
            </p>
          </div>
        </div>
        <div class="right d-lg-flex">
          <div class="left-text">
            <p>
              Ci occupiamo di tutte le branche dell’Odontoiatria: Pedodonzia,
              Conservativa ed Endodonzia, Chirurgia orale ed Implantologia,
              Riabilitazioni protesiche, Ortodonzia fissa, mobile ed invisibile,
              Gnatologia. Inoltre siamo specializzati in igiene e prevenzione,
              in estetica dentale e Centro di Sbiancamento autorizzato Blancone.
            </p>
          </div>
          <div class="right-image">
            <img src="/image/poltrona.jpg" alt="" />
          </div>
        </div>
        <div class="left mt-5 d-lg-flex">
          <div class="right-description">
            <p class="pb-3">
              Sono il dott <b>Salvatore Di Santo</b>, direttore Sanitario della
              clinica “Di Santo Odontoiatria Specialistica”, Centro di
              Eccellenza Lumineers per le faccette dentali , Centro di
              Eccellenza in Implantologia digitale Lyra Etk, Centro di
              Eccellenza GBT dalla “Swiss Dental Academy” e Centro d’Eccellenza
              per lo Sbiancamento Dentale BlancOne. Curare il tuo sorriso
              significa farti vivere un’esperienza avvolgente, perchè deve
              essere un percorso di benessere. Credo in questo fermamente e ci
              metto tutto l’impegno. Ogni paziente è unico come è unico il suo
              sorriso, per questo motivo io e il mio team affrontiamo ogni caso
              con precisione, impegno ed attenzione, partendo dalle procedure
              più semplici fino agli interventi più complessi, offrendo
              soluzioni e cure di qualità per tutti.
            </p>
          </div>
          <div class="profile-image d-none">
            <img src="/image/slide_01.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-image: url(../assets/hero-background.png);
  background-size: cover;
  background-attachment: fixed;

  p {
    text-align: justify;
    margin-bottom: 0;
  }
  .left {
    /* display: flex;
    justify-content: space-between; */
    .left-image {
      img {
        width: 90%;
        /* border-radius: 10px; */
      }
    }
    .right-text {
      /* padding-left: 0px;
      padding-top: 20px; */
    }
  }

  .right {
    /* display: flex;
    justify-content: space-between; */
    .right-image {
      img {
        width: 100%;
        /* border-radius: 20px; */
        padding-left: 60px;
      }
    }
    .left-text {
      /* padding-right: 60px;
      padding-top: 20px;
      padding-top: 100px; */
    }
  }
  .profile-image {
    width: 30%;
  }
  .right-description {
    /* width: 60%; */
    /* padding-left: 20px;
    padding-top: 100px; */
  }
}
</style>

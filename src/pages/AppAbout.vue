<script>
export default {
  name: "AppAbout",
};
</script>

<template>
  <section>
    <div class="image-top-service">
      <img src="/image/slide_02.png" alt="" />
      <div class="container">
        <div class="path-router">
          <router-link to="/" class="pe-2 text-decoration-underline"
            >Home</router-link
          >

          >
          <a href="">Chi Siamo</a>
        </div>
      </div>
    </div>
    <div class="container py-4">
      <h2 class="text-center fs-1 py-2">Chi siamo</h2>
      <div>
        <div class="about-content mb-3">
          <div class="about-image py-4">
            <img src="/image/ingresso.jpg" alt="" />
          </div>
          <div class="about-description pt-lg-5">
            <p>
              Di Santo Odontoiatria Specialistica è un centro odontoiatrico a
              Telese Terme (BN). Lavoriamo con passione, con precisione grazie
              ai nostri Microscopi che usiamo in tutti i campi dell’odontoiatria
              e sempre attenti all’innovazione, mettendo al primo posto il
              benessere e la salute dei pazienti. <br />Ci occupiamo di tutte le
              branche dell’Odontoiatria: Pedodonzia, Conservativa ed Endodonzia,
              Chirurgia orale ed Implantologia, Riabilitazioni protesiche,
              Ortodonzia fissa, mobile ed invisibile, Gnatologia. Inoltre siamo
              specializzati in igiene e prevenzione, in estetica dentale e
              Centro di Sbiancamento autorizzato Blancone.
            </p>
          </div>
        </div>
        <!-- <div class="about-content mb-3">
          <div class="about-description">
            <p>
              Ci occupiamo di tutte le branche dell’Odontoiatria: Pedodonzia,
              Conservativa ed Endodonzia, Chirurgia orale ed Implantologia,
              Riabilitazioni protesiche, Ortodonzia fissa, mobile ed invisibile,
              Gnatologia. Inoltre siamo specializzati in igiene e prevenzione,
              in estetica dentale e Centro di Sbiancamento autorizzato Blancone.
            </p>
          </div>
          <div class="about-image">
            <img src="/image/poltrona.jpg" alt="" />
          </div>
        </div> -->
        <div class="about-content">
          <div class="about-description pt-lg-3">
            <p>
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
          <div class="about-image">
            <img src="/image/slide_03.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url(../assets/hero-background.png);
  background-size: cover;
  background-attachment: fixed;

  .image-top-service {
    height: 400px;
    position: relative;
    box-shadow: 0px 2px 3px 0px #1f3c3e;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      opacity: 0.6;
    }
    .container {
      position: relative;
      .path-router {
        position: absolute;
        bottom: 20px;
        left: 10px;
        color: white;
        background-color: rgba(0, 0, 0, 0.468);
        display: block;
        padding: 5px 15px;
        margin-right: 10px;
        border-radius: 5px;

        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }

  .about-content {
    padding: 0 20px;
    font-size: 0.9rem;
    p {
      text-align: justify;
    }

    .about-image {
      text-align: center;
      img {
        border-radius: 10px;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  section {
    .about-content {
      font-size: 1rem;
    }
  }
}

@media screen and (min-width: 992px) {
  .about-content {
    display: flex;
    justify-content: center;
    // align-items: center;
    gap: 20px;

    .about-description {
      width: 50%;
    }
    .about-image {
      width: 50%;
    }
  }
}

@media screen and (min-width: 1200px) {
  .about-content {
    p {
      font-size: 1.2rem;
    }
  }
}
</style>

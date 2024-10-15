<script>
export default {
  name: "Rewies",
  data() {
    return {
      activeSlide: 0,
      autoPlay: false,

      reviews: [
        {
          name: "Francesca",
          text: "Salvatore è il mio dentista da quattro anni, mi fido ciecamente di lui e il suo modo di lavorare è a dir poco impeccabile. È sempre chiarissimo nello spiegarti cosa farà ed è attento in tutto, molto presente anche nei giorni successivi a qualsiasi tipo di intervento. Consiglio a chiunque di affidarsi a lui!",
        },
        {
          name: "Luigi",
          text: "Lo Studio dentistico del Dott. Di Santo è una garanzia. Personale qualificato, disponibile, preparato. Il Dottore è inoltre molto bravo anche con i bambini più piccoli, gran valore aggiunto. Studio sempre ai massimi livelli di pulizia ed igiene. Sala d’attesa rilassante. TOP!",
        },
        {
          name: "Alessia",
          text: "Mi affido al Dr. Salvatore Di Santo da anni ormai. Ho sempre riscontrato tanta professionalità, gentilezza e precisione in ogni fase dei percorsi intrapresi. Aggiungo che la delicatezza che  lo contraddistingue è uno dei tanti motivi che mi spinge a tornare sempre da lui. Super consigliato!!!",
        },
        {
          name: "Luca",
          text: "È da tempo che frequento lo Studio Di Santo; anche nei periodi di lavoro all'estero organizzo un veloce ritorno per una visita che sia di controllo o per, come sfortunatamente accaduto, riparare lavori eseguiti male da colleghi meno professionali, attenti e coscienziosi del Dr. Salvatore che rappresenta un mio punto fermo e mai messo in discussione per la cura dentale. Vivamente consigliato a chi non vuole perdere tempo e pretende il meglio.",
        },
        {
          name: "Daniela",
          text: "Sali in macchina, parti, trova parcheggio, parcheggio trovato (grazie al vasto parcheggio presente nelle vicinanze), citofona, sali, apri la porta d'ingresso dello studio e..... sembra d'essere a casa! Sin dall'inizio è riservata un'accoglienza che ti mette subito a tuo agio. Il Dottore Di Santo ha cura, non solo di occuparsi egregiamente dei denti, ma anche di spiegare passo passo in cosa consisterà il suo intervento e perché, facendolo con una calma e con una semplicità, che tranquillizza. Complimenti a tutto lo staff!",
        },
      ],
    };
  },

  methods: {
    nextClick() {
      if (this.activeSlide >= this.reviews.length - 1) {
        this.activeSlide = 0;
      } else {
        this.activeSlide++;
      }
    },

    prevClick() {
      if (this.activeSlide <= 0) {
        this.activeSlide = this.reviews.length - 1;
      } else {
        this.activeSlide--;
      }
    },

    setAutoplay() {
      this.autoPlay = setInterval(() => {
        this.nextClick();
      }, 8000);
    },
  },

  mounted() {
    this.setAutoplay();
  },
};
</script>

<template>
  <section>
    <div class="d-flex">
      <div class="image-review">
        <img src="../../assets/review.jpg" alt="" />
      </div>
      <div class="text-review">
        <div class="review-box">
          <div>
            <h4 class="text-center mb-2">{{ reviews[activeSlide].name }}</h4>
            <div class="text-center mb-3 text-warning">
              <span><font-awesome-icon :icon="['fas', 'star']" /></span>
              <span><font-awesome-icon :icon="['fas', 'star']" /></span>
              <span><font-awesome-icon :icon="['fas', 'star']" /></span>
              <span><font-awesome-icon :icon="['fas', 'star']" /></span>
              <span><font-awesome-icon :icon="['fas', 'star']" /></span>
            </div>
            <p>{{ reviews[activeSlide].text }}</p>
            <div class="prev arrow" @click="prevClick()">
              <font-awesome-icon icon="fa-solid fa-angle-left" />
            </div>
            <div class="next arrow" @click="nextClick()">
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </div>
          </div>
          <div class="review-box-bottom">
            <div class="google-logo">
              <img src="../../assets/google.png" alt="" />
            </div>
            <div class="btn-sage">
              <a
                href="https://www.google.com/maps/place/Di+Santo+Odontoiatria+Specialistica+-+Studio+Dentistico+Dott.+Salvatore+Di+Santo/@41.2152785,14.5294724,17z/data=!4m16!1m9!3m8!1s0x133a44664664863d:0xe5e10b9c118d0bb3!2sDi+Santo+Odontoiatria+Specialistica+-+Studio+Dentistico+Dott.+Salvatore+Di+Santo!8m2!3d41.2162413!4d14.5290035!9m1!1b1!16s%2Fg%2F11c5758ck4!3m5!1s0x133a44664664863d:0xe5e10b9c118d0bb3!8m2!3d41.2162413!4d14.5290035!16s%2Fg%2F11c5758ck4!5m1!1e4?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                >Tutte le Recensioni</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables.scss" as *;
.image-review {
  width: 40%;
  img {
    width: 100%;
  }
}
.text-review {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../../assets/poltrona-bg.png);
  background-size: cover;

  .review-box {
    background-color: rgba(31, 60, 62, 0.13);
    border-radius: 10px;
    position: relative;
    padding: 25px;
    width: 600px;
    h4 {
      font-weight: 600;
    }
    p {
      text-align: justify;
      font-size: 1.1rem;
      margin: 0;
    }
    .arrow {
      position: absolute;
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      top: 45%;
      cursor: pointer;
    }
    .prev {
      left: -50px;
    }
    .next {
      right: -50px;
    }
    .review-box-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    a {
      text-decoration: none;
      color: $white;
    }
    .google-logo {
      width: 50px;
      margin-top: 30px;
    }
    .btn-sage {
      display: inline-block;
      margin-top: 20px;
    }
  }
}
</style>

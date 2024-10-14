<script>
export default {
  name: "Welcome",
};
</script>

<template>
  <section>
    <div class="container-fluid welcome-content">
      <div class="welcome-image py-5">
        <img src="../../assets/sala-attesa.jpg" alt="" />
      </div>
      <div class="p-5">
        <h3 class="mb-4">Benvenuti nel nostro centro!</h3>
        <p class="fs-5 welcome-text">
          Di Santo Odontoiatria Specialistica è un centro odontoiatrico a Telese
          Terme (BN). Lavoriamo con passione, con precisione grazie ai nostri
          Microscopi che usiamo in tutti i campi dell’odontoiatria e sempre
          attenti all’innovazione, mettendo al primo posto il benessere e la
          salute dei pazienti. Ci occupiamo di tutte le branche
          dell’Odontoiatria: Pedodonzia, Conservativa ed Endodonzia, Chirurgia
          orale ed Implantologia, Riabilitazioni protesiche, Ortodonzia fissa,
          mobile ed invisibile, Gnatologia. Inoltre siamo specializzati in
          igiene e prevenzione, in estetica dentale e Centro di Sbiancamento
          autorizzato Blancone.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
  background-color: $bone;
  color: black;
  .welcome-content {
    display: flex;
    justify-content: center;
    align-items: center;

    .welcome-image {
      text-align: end;
      img {
        width: 80%;
        border-radius: 10px;
      }
    }
    .welcome-text {
      width: 80%;
      text-align: justify;
    }
  }
}
</style>

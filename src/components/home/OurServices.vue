<script>
export default {
  data() {
    return {
      services: [
        {
          name: "Igiene professionale (GBT)",
          description:
            "Microscopio e GBT (Guided Biofilm Therapy): una coppia vincente!",
          image: ".",
        },
        {
          name: "Ortodonzia",
          description:
            "Ci occupiamo di Ortodonzia intercettiva, tradizionale ed invisibile.",
          image: ".",
        },
        {
          name: "Gnatologia ed Elettromiografia di superficie",
          description:
            "Digrigni o serri i denti? Soffri di mal di testa o dolori cervicali? ",
          image: ".",
        },
        {
          name: "Chirurgia orale e Implantologia",
          description:
            "Offriamo servizi di chirurgia orale ed implantologia computer guidata ed avanzata ",
          image: ".",
        },
        {
          name: "Radiologia",
          description:
            "I servizi di radiologia digitale che offriamo (Ortopantomografia, endorale e TAC 3D)",
          image: ".",
        },
        {
          name: "Scansione digitale",
          description:
            "Lo scanner intraorale è un dispositivo per creare un modello digitale delle arcate dentali. ",
          image: ".",
        },
      ],
    };
  },
};
</script>

<template>
  <section>
    <div class="container border">
      <h2 class="text-center pt-4">I nostri servizi</h2>
      <div class="row g-3 p-4">
        <div class="col-4" v-for="service in this.services">
          <div class="card">
            <img
              src="../../../public/logo/DiSanto.logotipo-02.svg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ service.name }}</h5>
              <p class="card-text">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.border {
  border: 1px dashed black;
}
</style>

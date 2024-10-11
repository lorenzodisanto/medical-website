<script>
export default {
  data() {
    return {
      service: {},
    };
  },
  mounted() {
    const serviceName = this.$route.params.slug;
    // Cerco il servizio corrispondente utilizzando il parametro 'slug'
    const foundService = this.services.find(
      (service) => service.slug === serviceName
    );
    if (foundService) {
      this.service = foundService;
    } else {
      // Gestisco il caso in cui il servizio non viene trovato
      this.$router.push("/"); // Torna alla lista dei servizi
    }
  },
  computed: {
    services() {
      return [
        {
          name: "Igiene professionale (GBT)",
          description:
            "Microscopio e GBT (Guided Biofilm Therapy): una coppia vincente!",
          image: ".",
          slug: "igiene-professionale-gbt",
        },
        {
          name: "Ortodonzia",
          description:
            "Ci occupiamo di Ortodonzia intercettiva, tradizionale ed invisibile.",
          image: ".",
          slug: "ortodonzia",
        },
        {
          name: "Gnatologia ed Elettromiografia di superficie",
          description:
            "Digrigni o serri i denti? Soffri di mal di testa o dolori cervicali?",
          image: ".",
          slug: "gnatologia-ed-elettromiografia-di-superficie",
        },
        {
          name: "Chirurgia orale e Implantologia",
          description:
            "Offriamo servizi di chirurgia orale ed implantologia computer guidata ed avanzata ",
          image: ".",
          slug: "chirurgia-orale-e-implantologia",
        },
        {
          name: "Radiologia",
          description:
            "I servizi di radiologia digitale che offriamo (Ortopantomografia, endorale e TAC 3D)",
          image: ".",
          slug: "radiologia",
        },
        {
          name: "Scansione digitale",
          description:
            "Lo scanner intraorale è un dispositivo per creare un modello digitale delle arcate dentali. ",
          image: ".",
          slug: "scansione-digitale",
        },
      ];
    },
  },
};
</script>

<template>
  <div class="container p-5">
    <h2>{{ service.name }}</h2>
    <p>{{ service.description }}</p>
    <router-link to="/servizi">Torna ai servizi</router-link>
    <img src="/public/logo/DiSanto.logotipo.payoff.orizzontale-01.png" alt="" />
  </div>
</template>

<style scoped></style>

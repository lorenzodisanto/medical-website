import { reactive } from "vue";

export const store = reactive({
  // servizi
  services: [
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
        "Digrigni o serri i denti? Soffri di mal di testa o dolori cervicali? ",
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
  ],
});

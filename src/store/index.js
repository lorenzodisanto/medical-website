import { reactive } from "vue";

export const store = reactive({
  // servizi
  services: [
    {
      name: "Igiene professionale (GBT)",
      description:
        "Microscopio e GBT (Guided Biofilm Therapy): una coppia vincente!",
      image: "gbt.jpg",
      slug: "igiene-professionale-gbt",
      details:
        "Microscopio e GBT (Guided Biofilm Therapy): una coppia vincente!Certificati dalla Swiss Dental Academy, grazie al Microscopio Operatorio e al nuovo protocollo di Igiene Orale GBT, la seduta di igiene professionale è sinonimo di esperienza di benessere.Nel nuovo e moderno protocollo GBT di igiene professionale dell’azienda Svizzera EMS tutto ruota attorno alla rimozione del biofilm, delle macchie e del tartaro con tecnologie innovative e all’avanguardia, preservando con delicatezza la superficie dei denti e delle gengive. La GBT è un protocollo clinico indolore, rapido e sicuro che garantisce uno standard di qualità elevato ed uniforme… tutto rigorosamente al Microscopio!",
    },
    {
      name: "Ortodonzia",
      description:
        "Ci occupiamo di Ortodonzia intercettiva, tradizionale ed invisibile.",
      image: "ortodonzia.jpeg",
      slug: "ortodonzia",
      details:
        "Ci occupiamo di Ortodonzia intercettiva, tradizionale ed invisibile. Riuscire a stabilire un morso corretto è fondamentale per l’estetica ma soprattutto per la tua salute della bocca e del corpo. Tipicamente le terapie ortodontiche vengono realizzate da bambini, riuscendo così a intercettare problematiche di sviluppo fin dai primi anni di vita. Così facendo guidiamo un armonico accrescimento delle basi ossee e degli elementi dentali dei nostri piccoli pazienti. E’ possibile però intervenire anche da adulti, con tecniche e tempistiche diverse che, ad oggi, ci regalano un ventaglio di soluzioni terapeutiche per poter curare tutti i pazienti di tutte le fasce d’età.",
    },
    {
      name: "Gnatologia ed Elettromiografia di superficie",
      description:
        "Digrigni o serri i denti? Soffri di mal di testa o dolori cervicali? ",
      image: "gnatologia.jpg",
      slug: "gnatologia-ed-elettromiografia-di-superficie",
      details:
        "Digrigni o serri i denti? Soffri di mal di testa o dolori cervicali? Dolori all’articolazione temporo-mandibolare? Potrebbe trattarsi di malocclusione dentale. Con “Kinelock Dental”, un dispositivo di ultima generazione, è possibile valutare, con un esame veloce, confortevole e senza alcun fastidio, il tuo bilanciamento occlusale. Grazie al suo algoritmo esclusivo e la sua intelligenza artificiale, “Kinelock Dental” rilascia in pochi minuti un referto diagnostico che permette di individuare la corretta strategia di intervento per risolvere eventuali problemi legati alla malocclusione dentale.",
    },

    {
      name: "Chirurgia orale e Implantologia",
      description:
        "Offriamo servizi di chirurgia orale ed implantologia computer guidata ed avanzata ",
      image: "chirurgia.jpg",
      slug: "chirurgia-orale-e-implantologia",
      details:
        "Offriamo servizi di chirurgia orale ed implantologia computer guidata ed avanzata (Centro di Eccellenza in Implantologia Digitale Lyra Etk) per riabilitazioni semplici e complesse grazie all’utilizzo di tecniche moderne e attrezzature all’avanguardia per garantire comfort e sicurezza ai nostri pazienti.",
    },

    {
      name: "Radiologia",
      description:
        "I servizi di radiologia digitale che offriamo: Ortopantomografia, endorale e TAC 3D",
      image: "radiologia.JPG",
      slug: "radiologia",
      details:
        "I servizi di radiologia digitale che offriamo (Ortopantomografia, endorale e TAC 3D) abbassano l’esposizione ai raggi X e aumentano la qualità delle immagini ottenute e sono un ausilio diagnostico utilissimo e spesso indispensabile.",
    },
    {
      name: "Scansione digitale",
      description:
        "Lo scanner intraorale è un dispositivo per creare un modello digitale delle arcate dentali. ",
      image: "scanner.jpg",
      slug: "scansione-digitale",
      details:
        "Lo scanner intraorale è un dispositivo che esegue una scansione del cavo orale per creare un modello digitale delle arcate dentali. Sostituisce le tradizionali impronte e permette di eseguire una scansione digitale e tridimensionale delle arcate dentarie del paziente. L’operazione si svolge semplicemente passando lo scanner, simile a una penna, all’interno della bocca in prossimità dei denti. Questa scansione ha come risultato un rendering 3D che può essere quindi essere esplorato in tutte le dimensioni. I dettagli anatomici che rivela sono molto più accurati rispetto alla tradizionale impronta.",
    },
  ],
});

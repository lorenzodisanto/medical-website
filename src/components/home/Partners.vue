<script>
export default {
  name: "Partners",
  data() {
    return {
      partners: [
        {
          img: "lumineers.png",
          link: "https://lumineersitalia.it/",
        },
        {
          img: "gbt.png",
          link: "https://www.ems-dental.com/it",
        },
        {
          img: "blancone.png",
          link: "https://www.blancone.eu/it/",
        },
        {
          img: "lyraetk.png",
          link: "https://www.lyraetk.com/it/pagina-iniziale/",
        },
      ],
    };
  },
  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("/image/" + imageName, import.meta.url);
      return imageUrl.href;
    },
  },
};
</script>

<template>
  <section>
    <div class="container-fluid">
      <div class="row p-3 text-center">
        <div class="col" v-for="partner in partners">
          <a :href="partner.link" target="_blank">
            <div class="partner-box">
              <img :src="buildImagePath(partner.img)" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.partner-box {
  padding: 0px 85px;
  transition: 0.7s;
}
.partner-box:hover {
  transform: scale(1.1);
  transition: 0.7s;
}
</style>

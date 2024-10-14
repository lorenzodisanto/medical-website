<script>
export default {
  name: "Rewies",
};
</script>

<template>
  <section>
    <div class="d-flex">
      <div class="image-review">
        <img src="../../assets/review.jpg" alt="" />
      </div>
      <div class="text-review">
        <div>
          <h3>RECENSIONI CLIENTI</h3>
          <p>Nessuna recensione disponibile</p>
          <div class="btn-sage d-inline-block">
            <a
              href="https://www.google.com/maps/place/Di+Santo+Odontoiatria+Specialistica+-+Studio+Dentistico+Dott.+Salvatore+Di+Santo/@41.2152785,14.5294724,17z/data=!4m16!1m9!3m8!1s0x133a44664664863d:0xe5e10b9c118d0bb3!2sDi+Santo+Odontoiatria+Specialistica+-+Studio+Dentistico+Dott.+Salvatore+Di+Santo!8m2!3d41.2162413!4d14.5290035!9m1!1b1!16s%2Fg%2F11c5758ck4!3m5!1s0x133a44664664863d:0xe5e10b9c118d0bb3!8m2!3d41.2162413!4d14.5290035!16s%2Fg%2F11c5758ck4!5m1!1e4?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              >Tutte le Recensioni</a
            >
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
  background-color: $fresh-teal;
  a {
    text-decoration: none;
    color: $white;
  }
}
</style>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 41.21622, lng: 14.529 }, // Coordinate studio
      zoom: 19,
    };
  },
};
</script>

<template>
  <section>
    <GMapMap :center="center" :zoom="zoom" style="width: 100%; height: 500px">
      <GMapMarker :position="center" :clickable="true" :draggable="true" />
    </GMapMap>
  </section>
</template>

<style scoped></style>

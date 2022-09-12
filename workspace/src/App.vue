<template>
  <HeaderAndHero></HeaderAndHero>
  <FloorPlan></FloorPlan>
</template>

<script>
import HeaderAndHero from "./components/HeaderAndHero.vue";
import FloorPlan from "./components/FloorPlan.vue";

export default {
  name: "App",
  components: {
    HeaderAndHero,
    FloorPlan,
  },
};
</script>

<style scoped></style>

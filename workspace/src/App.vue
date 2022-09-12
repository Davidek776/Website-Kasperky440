<template>
  <HeaderAndHero></HeaderAndHero>
  <FloorPlan></FloorPlan>
  <Reviews/>
</template>

<script>
import HeaderAndHero from "./components/HeaderAndHero.vue";
import FloorPlan from "./components/FloorPlan.vue";
import Reviews from "@/components/Reviews";

export default {
  name: "App",
  components: {
<<<<<<< HEAD
    HeaderAndHero,
=======
    Reviews,
>>>>>>> da380c695229b959363771797e9ec2eb4d8126f8
    FloorPlan,
  },
};
</script>

<style scoped></style>

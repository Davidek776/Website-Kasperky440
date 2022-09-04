<template>
  <FloorPlan></FloorPlan>
  <Reviews/>
</template>

<script>
import FloorPlan from "./components/FloorPlan.vue";
import Reviews from "@/components/Reviews";

export default {
  name: "App",
  components: {
    Reviews,
    FloorPlan,
  },
};
</script>

<style scoped></style>

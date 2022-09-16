<template>
  <FloorPlan></FloorPlan>
  <AboutUs/>
  <Reviews/>
</template>

<script>

import FloorPlan from "./components/FloorPlan.vue";
import Reviews from "@/components/Reviews";
import AboutUs from './components/AboutUs.vue';

export default {
  name: "App",
  components: {
    Reviews,
    FloorPlan,
    AboutUs
  },
  data() {
    return {
    }
  },
  methods: {
    
  }   
};
</script>

<style scoped></style>

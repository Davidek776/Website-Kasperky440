<template>
<<<<<<< HEAD
  <HeaderAndHero></HeaderAndHero>
  <!-- <FloorPlan></FloorPlan> -->
  <!-- <Reviews /> -->
</template>

<script>
import HeaderAndHero from "./components/HeaderAndHero.vue";
// import FloorPlan from "./components/FloorPlan.vue";
// import Reviews from "@/components/Reviews";
=======
  <FloorPlan></FloorPlan>
  <AboutUs/>
  <Reviews/>
  <Stats/>
  <Contact/>
  <Footer/>
</template>

<script>

import FloorPlan from "./components/FloorPlan.vue";
import Reviews from "@/components/Reviews";
import AboutUs from './components/AboutUs.vue';
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
>>>>>>> 01d18486a5a99e21a41932e946aa302e6c8a0829

export default {
  name: "App",
  components: {
<<<<<<< HEAD
    HeaderAndHero,
    // Reviews,
    // FloorPlan,
=======
    Contact,
    Stats,
    Footer,
    Reviews,
    FloorPlan,
    AboutUs
  },
  data() {
    return {
    }
>>>>>>> 01d18486a5a99e21a41932e946aa302e6c8a0829
  },
  methods: {
    
  }   
};
</script>

<style scoped></style>

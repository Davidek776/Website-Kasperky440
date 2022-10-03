<template>
  <HeaderAndHero></HeaderAndHero>
  <FloorPlan></FloorPlan>
  <AboutUs />
  <Reviews />
  <Stats />
  <Contact />
  <Footer />
</template>

<script>
import FloorPlan from "./components/FloorPlan.vue";
import Reviews from "@/components/Reviews";
import AboutUs from "./components/AboutUs.vue";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import HeaderAndHero from "@/components/HeaderAndHero.vue";
// import HeaderAndHero from "@/components/HeaderAndHero.vue";

export default {
  name: "App",
  components: {
    Contact,
    Stats,
    Footer,
    Reviews,
    FloorPlan,
    AboutUs,
    HeaderAndHero,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>

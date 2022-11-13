<template>
  <HeaderAndHero
    @home="this.goToHome()"
    @accomodation="this.goToAccomodation()"
    @about="this.goToAbout()"
    @review="this.goToReview()"
    @contact="this.goToContact()"
  >
  </HeaderAndHero>
  <FloorPlan :accomodation="triggerAccomodation"></FloorPlan>
  <AboutUs :about="triggerAbout" />
  <Reviews :review="triggerReview" />
  <Stats />
  <Contact :contact="triggerContact" />
  <Footer />
</template>

<script>
import FloorPlan from "@/components/section/FloorPlan.vue";
import Reviews from "@/components/section/Reviews";
import AboutUs from "@/components/section/AboutUs.vue";
import Contact from "@/components/section/Contact";
import Stats from "@/components/section/Stats";
import Footer from "@/components/section/Footer";
import HeaderAndHero from "@/components/section/HeaderAndHero.vue";
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
    return {
      triggerHome: 0,
      triggerAccomodation: 0,
      triggerAbout: 0,
      triggerReview: 0,
      triggerContact: 0,
    };
  },
  setup() {
    return;
  },
  methods: {
    goToHome() {
      // alert("here" + this.trigger);
      this.triggerHome += 1;
    },
    goToAccomodation() {
      // alert("here" + this.trigger);
      this.triggerAccomodation += 1;
    },
    goToAbout() {
      // alert("here" + this.trigger);
      this.triggerAbout += 1;
    },
    goToReview() {
      // alert("here" + this.trigger);
      this.triggerReview += 1;
    },
    goToContact() {
      // alert("here" + this.trigger);
      this.triggerContact += 1;
    },
  },
};
</script>

<style scoped></style>

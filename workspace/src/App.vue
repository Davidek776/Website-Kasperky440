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
import FloorPlan from "@/components/FloorPlan.vue";
import Reviews from "@/components/Reviews";
import AboutUs from "./components/AboutUs.vue";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import HeaderAndHero from "@/components/HeaderAndHero.vue";


export default {
  name: "App",
//  components: {
//  Contact : () => import(/* webpackPrefetch: true */"@/components/Contact"),
//Stats: () => import(/* webpackPrefetch: true */"@/components/Stats"),
 //   Footer: () => import(/* webpackPrefetch: true */"@/components/Footer"),
 //   Reviews: () => import(/* webpackPrefetch: true */'@/components/Reviews'),
 //   FloorPlan: () => import(/* webpackPrefetch: true */"@/components/FloorPlan.vue"),
 //   AboutUs: () => import(/* webpackPrefetch: true */"./components/AboutUs.vue"),
 //   HeaderAndHero: () => import("@/components/HeaderAndHero.vue"),
 // },
  components:{
    HeaderAndHero,
    FloorPlan,
    AboutUs,
    Reviews,
    Stats,
    Contact,
    Footer,
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

<style scoped>
@import "@/assets/main.css"
</style>

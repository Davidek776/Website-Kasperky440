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
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      elements: document.querySelectorAll('.animate')
    }
  },
  methods: {
    handleScroll () {
    //   console.log(this.elements);
    //     this.elements.forEach(element => {

    //     if(! element.classList.contains('animate-element')) {
    //       console.log(element + ' ' +  element.offsetTop);

    //         if(window.scrollY + window.innerHeight > element.offsetTop + (window.innerHeight * 0.2)) {
    //             element.classList.add('animate-element')
    //         }
    //     }

    // })
    },
  }   
};
</script>

<style scoped></style>

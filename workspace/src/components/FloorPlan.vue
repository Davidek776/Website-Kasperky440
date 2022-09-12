<template>
  <body class="">
    <!-- THE HOUSE - SIMON-->

  
  <div>
      <div class=" flex justify-center">
        <img
          src='../assets/images/icons/ScrollButton.svg'
          alt="Scroll Button"
          class=" mt-24"
          />
        
      </div>

      <div class="mainHeading flex justify-center">
        <h1><b>THE</b> HOUSE</h1>
      </div>

      <div class="flex justify-center floorHeader">
        <h2><b>FLOOR 1</b></h2>
      </div>
      <div class="floorImage flex justify-center">
        <!--Floor Plan Image-->
        <img
          src="../assets/images/FloorPlans/floor_1.png"
          alt="Floor 1"
          class="w-4/5 h-auto"
        />

        <!--Area Images-->
        <img 
          src = '../assets/images/shared-spaces/kitchen1.png'
          alt="kitchen"
          class="placePreviewKitchen"
          @click="FullView()"
        />
        <img
          src="../assets/images/shared-spaces/dining-area1.png"
          alt="dining area"
          class="placePreviewDiningArea"
        />
      </div>

      <div class="flex justify-center floorHeader">
        <h2><b>FLOOR 2</b></h2>
      </div>
      <div class="floorImage flex justify-center">
        <!--Floor Plan Image-->
        <img
          src="../assets/images/FloorPlans/Floor_2.png"
          alt="Floor 2"
          class="w-4/5 h-auto"
        />

        <!--Area Images-->
        <img
          src="../assets/images/rooms/room1.jpg"
          alt="room 1"
          class="placePreviewRoom1"
        />
        <img
          src="../assets/images/rooms/room1_bathroom.jpg"
          alt="bathroom 1"
          class="placePreviewBathroom1"
        />

        <img
          src="../assets/images/rooms/room3.jpg"
          alt="room 3"
          class="placePreviewRoom3"
        />

        <img
          src="../assets/images/rooms/room4.jpg"
          alt="room 4"
          class="placePreviewRoom4"
        />
        <img
          src="../assets/images/rooms/room3_4_bathroom.jpg"
          alt="bathroom 3-4"
          class="placePreviewBathroom34"
        />
        <img
          src="../assets/images/rooms/room3_4_toilet.jpg"
          alt="toilet 3-4"
          class="placePreviewToilet34"
        />
      </div>
    </div>
    <div class="fullImageView flex justify-center">
      <ImgCarousel :startAutoPlay="false" class="imgCarousel" v-slot="{currentSlide}">
        <ImgSlide v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img :src="require('../assets/images/shared-spaces/' + slide + '.png')" alt="" />
          </div>
        </ImgSlide>
      </ImgCarousel>
    </div>
  </body>
</template>

<script>
import ImgCarousel from "../components/Carousel.vue";
import ImgSlide from "../components/Slide.vue";

export default {
  name: 'FloorPlan',
  components: {
    ImgCarousel,
    ImgSlide
  },

  setup(){
    const carouselSlides = ["kitchen1", "kitchen2"];

    return {carouselSlides};
  },

  data() {
    return {
      images: [
      '../assets/images/shared-spaces/kitchen1.png',
      ]
    };
  },

  methods: {
    FullView(){
      alert(window.scrollY)
      document.getElementById("fullImage").src = this.images[0];
    }
  }
};


</script>

<style scoped>
@import "../assets/floorPlanStyles/style.css";
@import "../assets/floorPlanStyles/output.css";
</style>

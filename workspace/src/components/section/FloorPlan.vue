<template>
  <!-- THE HOUSE - SIMON-->
  <div class="wrap">

    <div class=" m-auto flex justify-center text-4xl md:text-8xl lg:text-12xl  mb-20 lg:mb-40">
      <font-awesome-icon icon="fa-solid fa-circle-down" class="animate-bounce cursor-pointer" @click="scrollToFloorPlan"/>
    </div>


    <div
      class="flex justify-center"
      ref="accomodationBegin"
    >
      <span class="text-2xl lg:text-3xl"
      ref="floorPlan"
      ><b>UBYTOVÁNÍ</b></span>
    </div>

    <div class="flex justify-center">
      <span class="text-lg"><b>1. PATRO</b></span>
    </div>
    <div class="floorImage flex justify-center">
      <!--Floor Plan Image-->
      <img
        src="@/assets/images/FloorPlans/floor_1.png"
        alt="Floor 1"
        class="w-4/5 h-auto max-w-max"

      />

      <!--Pop Up-->
      <PopUp popupHide="block"/>

      <!--Area Images-->
      <img
        src="@/assets/images/shared-spaces/kitchen1.png"
        alt="kitchen"
        class="placePreviewKitchen shadow-md hover:shadow-lg md:animate-pulse hover:animate-none"
        @click="fullView(0)"
      />
      <img
        src="@/assets/images/shared-spaces/dining-area1.png"
        alt="dining area"
        class="placePreviewDiningArea shadow-md hover:shadow-lg md:animate-bounce"
        @click="fullView(1)"
      />
      <img
        src="@/assets/images/shared-spaces/front-hall.png"
        alt="front hall"
        class="placePreviewFrontHall shadow-md hover:shadow-lg md:animate-bounce"
        @click="fullView(8)"
      />
      <img
        src="@/assets/images/shared-spaces/stairs1.png"
        alt="stairs"
        class="placePreviewStairs shadow-md hover:shadow-lg md:animate-bounce"
        @click="fullView(9)"
      />
    </div>

    <div class="flex justify-center">
      <span class="text-lg"><b>2. PATRO</b></span>
    </div>
    <div class="floorImage flex justify-center">
      <!--Floor Plan Image-->
      <img
        src="@/assets/images/FloorPlans/Floor_2.png"
        alt="Floor 2"
        class="w-4/5 h-auto max-w-max"
      />

      <!--Area Images-->
      <img
        src="@/assets/images/rooms/room1.png"
        alt="room 1"
        class="placePreviewRoom1 shadow-md hover:shadow-lg md:animate-bounce"
        @click="fullView(2)"
      />
      <img
        src="@/assets/images/rooms/bathroom1.png"
        alt="bathroom 1"
        class="placePreviewBathroom1 shadow-md hover:shadow-lg md:animate-bounce"
        @click="fullView(3)"
      />

      <img
        src="@/assets/images/rooms/room2_1.png"
        alt="room 2"
        class="placePreviewRoom2 shadow-md hover:shadow-lg md:animate-bounce"
        @click="fullView(10)"
      />

      <img
        src="@/assets/images/rooms/bathroom2_2.png"
        alt="bathroom 2"
        class="placePreviewBathroom2 shadow-md hover:shadow-lg md:animate-bounce"
        @click="fullView(11)"
      />

      <img
        src="@/assets/images/rooms/room3.png"
        alt="room 3"
        class="placePreviewRoom3 shadow-md hover:shadow-lg md:animate-bounce"
        @click="fullView(4)"
      />

      <img
        src="@/assets/images/rooms/room4.png"
        alt="room 4"
        class="placePreviewRoom4 shadow-md hover:shadow-lg md:animate-bounce"
        @click="fullView(5)"
      />
      <img
        src="@/assets/images/rooms/bathroom34.png"
        alt="bathroom 3-4"
        class="placePreviewBathroom34 shadow-md hover:shadow-lg md:animate-bounce"
        @click="fullView(6)"
      />
      <img
        src="@/assets/images/rooms/toilet34.png"
        alt="toilet 3-4"
        class="placePreviewToilet34 shadow-md hover:shadow-lg md:animate-bounce"
        @click="fullView(7)"
      />
      <div></div>
    </div>

    <div name="fullImageViewGallery" class="fullImageView hidden">
      <ImgCarousel
        :startAutoPlay="false"
        :slideCount="slideCount"
        :currentSlideResetValue="currentSlideResetValue"
        class="imgCarousel"
        v-slot="{ currentSlide }"
      >
        <ImgSlide v-for="(slide, index) in loadImagesToCarousel()" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img :src="require('@/assets/images/' + slide + '.png')" alt="" />
          </div>
        </ImgSlide>
      </ImgCarousel>
      <!--Exit Button-->
      <div class="exitButton">
        <span @click="exitImgGallery(), updatecurrentSlideResetValue()">
          <i class="fa-solid fa-xmark"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ImgCarousel from "@/components/Carousel.vue";
import ImgSlide from "@/components/Slide.vue";
import carouselData from "@/data/carouselData.json";
import PopUp from "@/components/PopUp.vue";

let imgPreviewIndex;
const fullImageViewGallery = document.getElementsByClassName("fullImageView");

export default {
  name: "FloorPlan",
  components: {
    ImgCarousel,
    ImgSlide,
    PopUp,
  },

  setup() {},
  props: ["accomodation"],

  data() {
    return {
      data: carouselData,
      slideCount: 0,
      currentSlideResetValue: 1,
    };
  },

  methods: {
    fullView(imgIndex) {
      this.refreshImgPreviewIndex(imgIndex);
      this.loadImagesToCarousel();
      this.currentSlideResetValue = 1;

      //const fullImageViewGallery = document.getElementsByClassName('fullImageView');

      fullImageViewGallery[0].style.display = "flex";
      document.body.style.overflow = "hidden";
      fullImageViewGallery[0].style.top = window.scrollY + "px";
    },

    //load images to carousel -- import from json file?
    loadImagesToCarousel() {
      const carouselSlides = [];

      //this.data.forEach((d, index) => {
      //alert(d.id, index);
      // })

      this.data.forEach((d) => {
        Object.entries(d).forEach(([key]) => {
          if (key == "id" && d.id == imgPreviewIndex) {
            let subArr = [];
            d.images.forEach((imgUrl) => {
              subArr.push(imgUrl);
            });

            subArr.forEach((imgUrl) => {
              if (!carouselSlides.includes(imgUrl)) carouselSlides.push(imgUrl);
            });
          }
        });
        console.log("-------------------");
      });

      this.slideCount = carouselSlides.length;
      return carouselSlides;
    },

    refreshImgPreviewIndex(index) {
      imgPreviewIndex = index;
    },

    exitImgGallery() {
      fullImageViewGallery[0].style.display = "none";
      document.body.style.overflow = "visible";
    },

    getSlideCount() {
      return this.slideCount;
    },

    updatecurrentSlideResetValue() {
      this.currentSlideResetValue = 0;
      //currentSlideResetValue = 1;
      return this.currentSlideResetValue;
    },
    scrollToElement() {
      let rect = this.$refs["accomodationBegin"].getBoundingClientRect();
      window.scrollTo({
        top: rect.top,
        behavior: "smooth",
      });
    },
    //scroll to element
    scrollToFloorPlan() {
      this.$refs["floorPlan"].scrollIntoView({ behavior: "smooth" })
    },

  },
  watch: {
    accomodation: function () {
      this.scrollToElement();
    },
  },
};
</script>

<style scoped>
@import "@/assets/floorPlanStyles/style.css";
@import "@/assets/floorPlanStyles/output.css";
</style>

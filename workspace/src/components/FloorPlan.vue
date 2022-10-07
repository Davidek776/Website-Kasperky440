<template>
  <!-- THE HOUSE - SIMON-->
  <!-- THE HOUSE - SIMON-->
  <div class="wrap">
    <div class="flex justify-center">
      <img
        src="../assets/images/icons/ScrollButton.svg"
        alt="Scroll Button"
        class="mt-24"
      />
    </div>

    <div
      class="mainHeading flex justify-center accomodation"
      ref="accomodationBegin"
    >
      <h1><b>THE</b> HOUSE</h1>
    </div>

    <div class="flex justify-center floorHeader">
      <h2><b>1. PATRO</b></h2>
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
        src="../assets/images/shared-spaces/kitchen1.png"
        alt="kitchen"
        class="placePreviewKitchen"
        @click="fullView(0)"
      />
      <img
        src="../assets/images/shared-spaces/dining-area1.png"
        alt="dining area"
        class="placePreviewDiningArea"
        @click="fullView(1)"
      />
      <img
        src="../assets/images/shared-spaces/front-hall.png"
        alt="front hall"
        class="placePreviewFrontHall"
        @click="fullView(8)"
      />
      <img
        src="../assets/images/shared-spaces/stairs1.png"
        alt="stairs"
        class="placePreviewStairs"
        @click="fullView(9)"
      />
    </div>

    <div class="flex justify-center floorHeader">
      <h2><b>2. PATRO</b></h2>
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
        src="../assets/images/rooms/room1.png"
        alt="room 1"
        class="placePreviewRoom1"
        @click="fullView(2)"
      />
      <img
        src="../assets/images/rooms/bathroom1.png"
        alt="bathroom 1"
        class="placePreviewBathroom1"
        @click="fullView(3)"
      />

      <img
        src="../assets/images/rooms/room2_1.png"
        alt="room 2"
        class="placePreviewRoom2"
        @click="fullView(10)"
      />

      <img
        src="../assets/images/rooms/bathroom2_2.png"
        alt="bathroom 2"
        class="placePreviewBathroom2"
        @click="fullView(11)"
      />

      <img
        src="../assets/images/rooms/room3.png"
        alt="room 3"
        class="placePreviewRoom3"
        @click="fullView(4)"
      />

      <img
        src="../assets/images/rooms/room4.png"
        alt="room 4"
        class="placePreviewRoom4"
        @click="fullView(5)"
      />
      <img
        src="../assets/images/rooms/bathroom34.png"
        alt="bathroom 3-4"
        class="placePreviewBathroom34"
        @click="fullView(6)"
      />
      <img
        src="../assets/images/rooms/toilet34.png"
        alt="toilet 3-4"
        class="placePreviewToilet34"
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
            <img :src="require('../assets/images/' + slide + '.png')" alt="" />
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
import ImgCarousel from "../components/Carousel.vue";
import ImgSlide from "../components/Slide.vue";
import carouselData from "../data/carouselData.json";

let imgPreviewIndex;
const fullImageViewGallery = document.getElementsByClassName("fullImageView");

export default {
  name: "FloorPlan",
  components: {
    ImgCarousel,
    ImgSlide,
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

    /*
  putImagesInCarousel(){
    this.loadImagesToCarousel();

    //this.loadImagesToCarousel().forEach(element => {
   // });

    //v-for="(slide, index) in loadImagesToCarousel()" :key="index"
   // this.loadImagesToCarousel().forEach(slide => {
     //   Object.entries(slide).forEach(([value]) => {
       //
         // alert();
       // });
       // console.log('-------------------');
   // });

   for (let index = 0; index < this.loadImagesToCarousel().length; index++) {
        let carouselDiv = document.getElementById('carouselDiv');
        let imgValues = this.loadImagesToCarousel();

        this.imgSrc = imgValues[index];

        alert(carouselDiv);

        carouselDiv.innerHTML =
        '<div name="fullImageViewGallery" class="fullImageView flex justify-center">' +
         '<ImgCarousel :startAutoPlay="false" class="imgCarousel" v-slot="{currentSlide}">' +
            '<ImgSlide v-for="(slide, index) in loadImagesToCarousel()" :key="index">' +
              '<div v-show="currentSlide === index + 1" class="slide-info">' +
                '<img :src="require("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")" alt="" />' +
              '</div>' +
            '</ImgSlide>' +
          '</ImgCarousel>' +
        '</div>;'
   }

  }
  */
  },
  watch: {
    accomodation: function () {
      this.scrollToElement();
    },
  },
};
</script>

<style scoped>
@import "../assets/floorPlanStyles/style.css";
@import "../assets/floorPlanStyles/output.css";
</style>

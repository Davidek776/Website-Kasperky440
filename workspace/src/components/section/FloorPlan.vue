<template>
  <!-- THE HOUSE - SIMON-->
  <div class="">

    <div class=" m-auto flex justify-center text-6xl md:text-8xl lg:text-12xl  mb-20 lg:mb-40">
      <font-awesome-icon icon="fa-solid fa-circle-down" class="cursor-pointer" @click="scrollToFloorPlan" beat/>
    </div>

    
      
    <div
      class="flex justify-center "
      ref="accomodationBegin"
    >
      <span class="title"
      ref="floorPlan"
      ><b>{{ $t("floorPlan.title") }}</b></span>
    </div>
    <div class=" lg:flex lg:flex-row-reverse">
    <div class="flex justify-center items-center lg:w-1/5">
      <span class="sub-title lg:w-full lg:flex lg:justify-start pl-4 border-l-4 border-l-slate-800"><b>{{ $t("floorPlan.subTitle1") }}</b></span>
    </div>

    <div class="lg:w-4/5">
    <div class="floorImage flex justify-center">
      <!--Floor Plan Image-->
      <img loading="lazy"
        src="@/assets/images/FloorPlans/floor_1.webp"
        alt="Floor 1"
        class="w-4/5 h-auto max-w-max lg:w-full"

      />
  
      <!--Pop Up-->
      <PopUp/>

      <!--Area Images-->
      <img loading="lazy"
        src="@/assets/images/previews/kitchen1.webp"
        alt="kitchen"
        class="placePreviewKitchen shadow-lg hover:shadow-lg md:animate-pulse hover:animate-none border-2 md:border-4 xl:border-8 border-double border-slate-800/100"
        @click="fullView(0)"
      />
      <img loading="lazy"
        src="@/assets/images/previews/dining-area1.webp"
        alt="dining area"
        class="placePreviewDiningArea shadow-md hover:shadow-lg border-2 md:border-4 border-double xl:border-8 border-slate-800/100"
        @click="fullView(1)"
      />
      <img loading="lazy"
        src="@/assets/images/previews/front-hall.webp"
        alt="front hall"
        class="placePreviewFrontHall shadow-md hover:shadow-lg border-2 md:border-4 border-double xl:border-8 border-slate-800/100"
        @click="fullView(8)"
      />
      <img loading="lazy"
        src="@/assets/images/previews/stairs1.webp"
        alt="stairs"
        class="placePreviewStairs shadow-md hover:shadow-lg border-2 md:border-4 border-double xl:border-8 border-slate-800/100"
        @click="fullView(9)"
      />
    </div>
</div>
</div>

<div class="lg:flex lg:flex-row w-full lg:-mt-36">
    <div class="flex justify-center items-center lg:w-1/5">
      <span class="sub-title lg:w-full lg:flex lg:justify-end pr-4 border-r-4 border-r-slate-800"><b>{{ $t("floorPlan.subTitle2") }}</b></span>
    </div>
    <div class="lg:w-4/5">
      <div class="floorImage flex justify-center">
      <!--Floor Plan Image-->
      <img loading="lazy"
        src="@/assets/images/FloorPlans/Floor_2.webp"
        alt="Floor 2"
        class="w-4/5 h-auto max-w-max lg:w-full"
      />

      <!--Area Images-->
      <img loading="lazy"
        src="@/assets/images/previews/room1.webp"
        alt="room 1"
        class="placePreviewRoom1 shadow-md hover:shadow-lg border-2 md:border-4 xl:border-8 border-double border-slate-800/100"
        @click="fullView(2)"
      />
      <img loading="lazy"
        src="@/assets/images/previews/bathroom1.webp"
        alt="bathroom 1"
        class="placePreviewBathroom1 shadow-md hover:shadow-lg border-2 md:border-4 xl:border-8 border-double border-slate-800/100"
        @click="fullView(3)"
      />

      <img loading="lazy"
        src="@/assets/images/previews/room2_1.webp"
        alt="room 2"
        class="placePreviewRoom2 shadow-md hover:shadow-lg border-2 md:border-4 xl:border-8 border-double border-slate-800/100"
        @click="fullView(10)"
      />

      <img loading="lazy"
        src="@/assets/images/previews/bathroom2_2.webp"
        alt="bathroom 2"
        class="placePreviewBathroom2 shadow-md hover:shadow-lg border-2 md:border-4 xl:border-8 border-double border-slate-800/100"
        @click="fullView(11)"
      />

      <img loading="lazy"
        src="@/assets/images/previews/room3.webp"
        alt="room 3"
        class="placePreviewRoom3 shadow-md hover:shadow-lg border-2 md:border-4 xl:border-8 border-double border-slate-800/100"
        @click="fullView(4)"
      />

      <img loading="lazy"
        src="@/assets/images/previews/room4.webp"
        alt="room 4"
        class="placePreviewRoom4 shadow-md hover:shadow-lg border-2 md:border-4 xl:border-8 border-double border-slate-800/100"
        @click="fullView(5)"
      />
      <img loading="lazy"
        src="@/assets/images/previews/bathroom34.webp"
        alt="bathroom 3-4"
        class="placePreviewBathroom34 shadow-md hover:shadow-lg border-2 md:border-4 xl:border-8 border-double border-slate-800/100"
        @click="fullView(6)"
      />
      <img loading="lazy"
        src="@/assets/images/previews/toilet34.webp"
        alt="toilet 3-4"
        class="placePreviewToilet34 shadow-md hover:shadow-lg border-2 md:border-4 xl:border-8 border-double border-slate-800/100"
        @click="fullView(7)"
      />
      <div></div>
    </div>
  </div>
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
            <img loading="lazy" :src="require('@/assets/images/' + slide + '.webp')" alt="" />
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

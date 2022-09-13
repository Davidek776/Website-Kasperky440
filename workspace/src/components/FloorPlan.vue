<template>
  <body class="">
    <!-- THE HOUSE - SIMON-->

    <ul>
      <li v-for="d in data" :key="d.id">
         {{d.name}}
       </li>
    </ul>
  
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
          @click="fullView()"
        />
        <img
          src="../assets/images/shared-spaces/dining-area1.png"
          alt="dining area"
          class="placePreviewDiningArea"
          @click="putImagesInCarousel()"
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
    <!--
    <div name="fullImageViewGallery" class="fullImageView flex justify-center hidden">
      <ImgCarousel :startAutoPlay="false" class="imgCarousel" v-slot="{currentSlide}">
        <ImgSlide v-for="(slide, index) in loadImagesToCarousel()" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img :src="require('../assets/images/' + slide + '.png')" alt="" />
          </div>
        </ImgSlide>
      </ImgCarousel>
    </div>
    -->
    <div class="fullImageView flex justify-center hidden">

    </div>
    
  </body>
</template>

<script>
//import ImgCarousel from "../components/Carousel.vue";
//import ImgSlide from "../components/Slide.vue";
import carouselData from "../data/carouselData.json";

export default {
  name: 'FloorPlan',
  components: {
    //ImgCarousel,
    //ImgSlide
  },

  setup(){
   
  },

  data() {
    return {
      data: carouselData,
      requireImg: "",
      imgSrc: "",
    };
  },

  methods: {
  fullView(){
    const fullImageViewGallery = document.getElementsByClassName('fullImageView');

    fullImageViewGallery[0].style.display = "flex";
    document.body.style.overflow = "hidden";
    fullImageViewGallery[0].style.top = window.scrollY + "px";
  },

  //load images to carousel -- import from json file?
  loadImagesToCarousel(){
    const carouselSlides = [];

    
    //this.data.forEach((d, index) => {
    //alert(d.id, index);
   // })

   this.data.forEach(d => {
        Object.entries(d).forEach(([key, value]) => {
            

            if(key == 'images'){
              value.forEach(imgUrl => {
                carouselSlides.push(imgUrl);
              });
            }
        });
        console.log('-------------------');
    });

    return carouselSlides;
  },

  putImagesInCarousel(){

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
        let carouselDiv = document.getElementsByClassName('fullImageView');

        this.imgSrc = this.loadImagesToCarousel[index];

        alert(this.imgScr);

        carouselDiv.innerHTML += '<img src="{imgSrc}" alt="bathroom 3-4" class="placePreviewBathroom34" />'
   }
  }
}

};


</script>

<style scoped>
@import "../assets/floorPlanStyles/style.css";
@import "../assets/floorPlanStyles/output.css";
</style>

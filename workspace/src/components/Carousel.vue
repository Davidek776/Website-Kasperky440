<template>
  <div class="imgCarousel">
    <slot :currentSlide="currentSlide" /> 

    <!--Navigation-->
    <div v-if="navEnabled" class="navigate">
        <div class="toggle-page left">
            <i @click="prevSlide()" class="fa-solid fa-chevron-left"></i>
        </div>
        <div class="toggle-page right">
            <i @click="nextSlide()" class="fa-solid fa-chevron-right"></i>
        </div>
    </div>

    <!--Pagination-->
    <div v-if="paginationEnabled" class="pagination">
        <span 
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount" 
        :key="index" 
        :class="{active : index + 1 === currentSlide}">
        </span>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";

const currentSlide = ref(1);
const getSlideCount = ref(null);

export default {
    name: 'ImgCarousel',

    props:[
        "startAutoPlay", 
        "timeout",
        "navigation",
        "pagination"
],

    setup(props){
        
        const autoPlayEnabled = ref(
            props.startAutoPlay === undefined ? true : props.startAutoPlay
        );
        const timeoutDuration = ref(
            props.timeout === undefined ? 5000 : props.timeout
        );
        const paginationEnabled = ref(
            props.pagination === undefined ? true : props.pagination
        );
        const navEnabled = ref(
            props.navigation === undefined ? true : props.navigation
        );


        if(autoPlayEnabled.value){
            this.autoPlay();
        }
        

        onMounted(()=>{
            getSlideCount.value = document.querySelectorAll(".slide-info").length;
            console.log("Pocet slidu v Carousel: " + getSlideCount.value);
        })

        return {
            currentSlide,  
            getSlideCount, 
            paginationEnabled,
            navEnabled,
            timeoutDuration
        };
    },

    methods: {

        nextSlide(){
            console.log("Slide cislo: " + currentSlide.value + ", Pocet slidu: " + getSlideCount.value);
            if (currentSlide.value === getSlideCount.value){
                //currentSlide.value = getSlideCount.value;
                currentSlide.value = getSlideCount.value;
                return;
            }
            currentSlide.value += 1;

            console.log("Jsem na slidu: " + currentSlide.value);

            return currentSlide;
        },

        prevSlide(){
            if(currentSlide.value ===1){
                currentSlide.value = 1;
                return;
            }
            currentSlide.value -= 1;

            return currentSlide;
        },

        goToSlide(index){
            currentSlide.value = index + 1;

            return currentSlide.value;
        },

        autoPlay(){
            setInterval(() => {
                this.nextSlide();
            }, this.timeoutDuration.value)
        },
    },
}
</script>

<style>

</style>
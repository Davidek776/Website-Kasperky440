<template>
  <div class="imgCarousel select-none">
    <slot :currentSlide="currentSlide"/> 


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
        v-for="(slide, index) in slideCount" 
        :key="index" 
        :class="{active : index + 1 === currentSlide}">
        </span>
    </div>
  </div>
</template>

<script defer>
import {ref, onMounted} from "vue";




export default {
    name: 'ImgCarousel',

    props:[
        "startAutoPlay", 
        "timeout",
        "navigation",
        "pagination",
        "slideCount",
        "currentSlideResetValue"
],

data() {
    return {
      currentSlide: this.currentSlideResetValue
    };
  },

  watch:{
    currentSlideResetValue(newValue){
        this.currentSlide = newValue;
    }
  },

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
        })

        return { 
            paginationEnabled,
            navEnabled,
            timeoutDuration,
        };
    },

    methods: {

        nextSlide(){
            if (this.currentSlide === this.slideCount){
                this.currentSlide = this.slideCount;
                return;
            }
            this.currentSlide += 1;

            console.log("Jsem na slidu: " + this.currentSlide);

            return this.currentSlide;
        },

        prevSlide(){
            if(this.currentSlide ===1){
                this.currentSlide = 1;
                return;
            }
            this.currentSlide -= 1;

            console.log("Jsem na slidu: " + this.currentSlide);

            return this.currentSlide;
        },

        goToSlide(index){
            this.currentSlide = index + 1;

            return this.currentSlide;
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
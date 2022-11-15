<template>
    <!--v-base3-->
    <div v-if="popupShown" :style="{'display': popupHide}">
    <div class="opacity-0 sm:opacity-100 bg-white absolute w-1/4 h-1/5 rounded-lg drop-shadow-lg z-10 left-0 top-0 ml-10 flex justify-center items-center border-4 border-x-kasp-red	">
        <span class=" text-lg">Click To See More!</span>
        <span v-on:click="popupShown = false"  class="absolute opacity:0 sm:opacity-100 -right-3 -top-3 bg-white w-6 h-6 flex justify-center items-center rounded-lg cursor-pointer">
            <!--<i @click="() => hidePopUp" class="fa-solid fa-xmark text-xl text-white hover:text-2xl" beat></i>-->
            <font-awesome-icon icon="fa-solid fa-square-xmark" class="" size="3x" shake/>
          </span>
    </div>
    
    <img loading="lazy"
          class="absolute z-10 left-1/4 top-20 md:top-16 lg:top-28 bottom-4 opacity-0 sm:opacity-100 w-1/12"
          src="@/assets/images/Contact/Arrow.png"
          alt="Arrow"
        />
    </div>
</template>

<script>
export default {
    setup () {


        return {}
    },
    data(){
        return{
            popupShown: 'true'
        }
    },
    methods:{
    },
}
</script>

<style lang="scss" scoped>

</style>
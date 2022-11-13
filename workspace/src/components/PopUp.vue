<template>
    <!--v-base3-->
    <div id="popup" :style="{'display': popupHide}">
    <div class="opacity-0 sm:opacity-100 bg-white absolute w-1/4 h-1/5 rounded-lg drop-shadow-lg z-10 left-0 top-0 ml-10 flex justify-center items-center border-4 border-x-kasp-red	">
        <span class=" text-lg">Click To See More!</span>
        <span  class="absolute opacity:0 sm:opacity-100 -right-4 -top-4 bg-slate-800 w-8 h-8 flex justify-center items-center rounded-lg">
            <i @click="() => hidePopUp" class="fa-solid fa-xmark text-xl text-white"></i>
          </span>
    </div>
    
    <img
          class="absolute z-10 left-1/4 top-20 bottom-4 opacity-0 sm:opacity-100 w-1/12"
          src="../assets/images/Contact/Arrow.png"
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
            popupHide: 'block'
        }
    },
    methods:{
        hidePopUp:function (){
            this.popupHide = 'none'
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
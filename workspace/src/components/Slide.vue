<template>
  <div class="imgSlide select-none">
    <transition name="imgSlide" :css="false">
        <slot />
    </transition>
  </div>
</template>

<script>
export default {
    name: 'ImgSlide'

}
</script>

<style scoped>
  
.imgSlide-enter-active,
.imgSlide-leave-active{
    transition: opacity 0.4s ease;
}

.imgSlide-enter-from,
.imgSlide-leave-to {
    opacity: 0;
}


.imgSlide-enter-to,
.imgSlide-leave-from {
    opacity: 1;
}


/*
  Enter and leave animations can use different
  durations and timing functions.
*/
</style>
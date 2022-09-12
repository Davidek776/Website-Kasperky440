<template>
  <div class="imgSlide">
    <transition name="imgSlide">
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
    /*
    .imgSlide-enter-active,
.imgSlide-leave-active{
    transition: opacity 0.7s ease-in-out;
}

.imgSlide-enter-from,
.imgSlide-leave-to {
    opacity: 0;
}

.imgSlide-enter-to,
.imgSlide-leave-from {
    opacity: 1;
}
*/
</style>
<template>
  <div class="slide">
    <transition name="slide">
        <slot />
    </transition>
  </div>
</template>

<script>
export default {
    name: 'ImgSlide'

}
</script>

<style>

</style>
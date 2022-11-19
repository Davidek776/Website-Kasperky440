<template>
  <footer>
    <div
      class="w-full text-white img bg-cover flex items-end px-2 md:px-0 pb-10 pt-32 md:pt-48 xl:pt-72"
    >
      <div
        class="flex justify-between items-start max-w-7xl mx-auto flex-col space-y-24 xl:flex-row xl:space-y-0"
      >
        <div class="w-96 space-y-4">
          <h1 class="text-2xl font-bold">BeCreative</h1>
          <h2>@ Copyright 2022</h2>
          <h2>BeCreative, Inc. All rights reserved</h2>
        </div>
        <div class="w-96 space-y-4">
          <h1 class="text-2xl font-bold">{{ $t("footer.help") }}</h1>
          <h2>kasperky440@gmail.com</h2>
        </div>
        <div class="w-96 space-y-4">
          <h1 class="text-2xl font-bold">Kašperky 440</h1>
          <p>
            {{ $t("footer.desc") }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<style scoped>
.img {
  background-image: url("@/assets/images/Footer/wave.png");
}
</style>

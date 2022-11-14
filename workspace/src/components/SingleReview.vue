<template>
  <div class="p-5 bg-gray-100 rounded-xl max-w-lg w-full space-y-5">
    <div class="flex items-center space-x-3">
      <img loading="lazy"
        class="w-10 rounded-full"
        :src="getImgUrl(reviewData.image, true)"
        alt="User"
      />
      <div>
        <h1 class="text-slate-900 font-bold">{{ reviewData.name }}</h1>
        <div class="flex items-center space-x-2">
          <img loading="lazy"
            class="w-4"
            src="../assets/images/icons/czech-republic.png"
            alt="cz flag"
          />
          <p class="text-sm text-slate-500">Česka republika</p>
        </div>
      </div>
    </div>

    <p class="text-slate-700 text-sm">{{ reviewData.description }}</p>
  </div>
</template>

<script>
export default {
  name: "SingleReview",
  props: ["reviewData"],
  methods: {
    getImgUrl: function (url) {
      var images = require.context("../assets/images/icons/", false, /\.jpg$/);
      return images("./" + url + ".jpg");
    },
  },
};
</script>

<style scoped></style>

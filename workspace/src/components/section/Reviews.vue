<template>
  <div
    class="w-full py-20 bg-[#D9D9D9] space-y-10 relative overflow-hidden"
    ref="reviewBegin"
    :class="showAllComments ? 'h-fit' : 'h-[52rem]'"
  >
    <h1 class="text-slate-900 text-center title">
      <span class="font-bold review">{{ $t("reviews.title1") }} </span>
      <span class="font-light">{{ $t("reviews.title2") }}</span>
    </h1>

    <div
      class="flex md:flex-row flex-col w-full max-w-7xl md:space-y-0 md:space-x-5 space-x-0 space-y-5 mx-auto px-5 justify-between pb-48"
    >
      <div
        class="flex flex-col space-y-5 items-center"
        v-for="(listOfReviews, index) in getData(2)"
        :key="index"
      >
        <SingleReview
          v-for="review in listOfReviews"
          :key="review.id"
          :reviewData="review"
        />
      </div>
    </div>

    <div
      class="w-full h-64 absolute z-10 bottom-0 bg-gradient-to-t from-[#D9D9D9] via-[#D9D9D9] to-transparent flex items-center justify-center"
    >
      <button
        class="py-4 px-8 bg-slate-800 text-slate-100 rounded-lg hover:shadow hover:shadow-lg hover:shadow-slate-800/50 transition-all focus:opacity-100"
        v-on:click="showAllComments = !showAllComments"
      >
        {{ showAllComments ? $t('reviews.buttonLess') : $t('reviews.buttonMore') }}
      </button>
    </div>
  </div>
</template>

<script>
import reviewsData from "@/data/db.json";
import SingleReview from "@/components/SingleReview";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Reviews",
  components: { SingleReview },
  data() {
    return {
      showAllComments: false,
    };
  },
  props: ["review"],
  methods: {
    getData: function (divide) {
      const data = [];
      for (let i = 0; i < divide; i++) {
        const subArr = [];
        for (let j = 0; j < reviewsData.length; j++) {
          if ((j + 1) % divide === i) {
            subArr.push(reviewsData[j]);
          }
        }
        data.push(subArr);
      }
      return data;
    },
    scrollToElement() {
      let rect = this.$refs["reviewBegin"].getBoundingClientRect();
      window.scrollTo({
        top: rect.top,
        behavior: "smooth",
      });
    },
  },
  watch: {
    review: function () {
      this.scrollToElement();
    },
  },
};
</script>

<style scoped></style>

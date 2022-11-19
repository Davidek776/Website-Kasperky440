<template>
  <section class="about-us" ref="aboutBegin">

	<picture>
		<source media="(min-width: 1024px and max-width: 1110px)" srcset="@/assets/aboutUs/img/line-md.png" />
		<source media="(min-width: 1110px)" srcset="@/assets/aboutUs/img/line.png" />
		<img loading="lazy" id="line" src="@/assets/aboutUs/img/line-md.png" alt="Dotted line" />
	</picture>

    <h1 class="title text-slate-900 text-center">
      <span class="font-light">{{ $t("aboutUs.title1") }}</span>
      <span class="font-bold">{{ $t("aboutUs.title2") }}</span>
    </h1>
    <div class="row lg:mt-12 lg:mb-16 lg:flex-row-reverse">
      <p
        class="animate animate-r uppercase md:text-left md:text-lg image-text lg:w-4/12 lg:max-w-screen-md"
      >
        {{ $t("aboutUs.p1") }}
      </p>
      <img loading="lazy"
        class="animate animate-l lg:w-1/2 lg:max-w-screen-md"
        src="@/assets/aboutUs/img/20190118_085040.webp"
        alt="image"
      />
    </div>
    <div class="row lg:mt-12 lg:flex-row">
      <p
        class="animate animate-l uppercase md:text-left md:text-lg image-text lg:w-6/12 lg:max-w-screen-md"
      >
        {{ $t("aboutUs.p2") }}
      </p>
      <!-- <p class="animate animate-l uppercase  md:text-left md:text-lg image-text lg:w-5/12"></p> -->
      <img loading="lazy"
        class="animate animate-r lg:w-4/12 img-lg"
        src="@/assets/aboutUs/img/bike_house.webp"
        alt="image"
      />
    </div>
    <div class="row lg:mt-10 lg:flex-row 2xl:translate-y-32 3xl:translate-y-60">
      <p
        class="animate animate-l uppercase md:text-left md:text-lg image-text lg:w-4/12 lg:ml-auto lg:mr-16"
      >
        {{ $t("aboutUs.p3") }}
      </p>
      <img loading="lazy"
        class="animate animate-r lg:w-1/2 lg:max-w-xs img-lg"
        src="@/assets/aboutUs/img/IMG_3826.webp"
        alt="image"
      />
    </div>
    <div class="row lg:mt-20 2xl:mt-60 3xl:mt-80 lg:flex-row-reverse ">
      <p
        class="animate animate-r uppercase md:text-left md:text-lg image-text lg:w-5/12 lg:max-w-screen-sm lg:"
      >
        {{ $t("aboutUs.p4") }}
      </p>
      <img loading="lazy"
        class="animate animate-l lg:max-w-xl lg:w-1/2 lg:h-96"
        src="@/assets/aboutUs/img/20200120_pohled_z_terasy.webp"
        alt="image"
      />
    </div>
    <div class="row lg:mt-12 lg:flex-row xl:translate-y-12">
      <p
        class="animate animate-l uppercase md:text-left md:text-lg image-text lg:w-4/12 lg:ml-auto lg:mt-16 lg:mr-16"
      >
        {{ $t("aboutUs.p5") }}
      </p>
      <img loading="lazy"
        class="animate animate-r lg:w-96"
        src="@/assets/aboutUs/img/IMG_3819.webp"
        alt="image"
      />
    </div>
    <div class="row lg:flex-row-reverse xl:translate-y-14">
      <p
        class="animate animate-r uppercase md:text-left md:text-lg image-text lg:w-5/12"
      >
        {{ $t("aboutUs.p6") }}
      </p>
      <img loading="lazy"
        class="animate animate-l lg:w-1/2 tall"
        src="@/assets/aboutUs/img/20181116_113501.webp"
        alt="image"
      />
    </div>
  </section>
</template>

<script>
export default {
	// import Map from "./Map"
  // eslint-disable-next-line vue/multi-word-component-names

  name: "AboutUs",
  data() {
    return {}
  },
  setup() {
    return {};
  },
  props: ["about"],
  methods: {
    hello() {
      alert("Som tu");
    },
    scrollToElement() {
      let rect = this.$refs["aboutBegin"].getBoundingClientRect();
      window.scrollTo({
        top: rect.top,
        behavior: "smooth",
      });
    },
  },
  watch: {
    about: function () {
      this.scrollToElement();
    },
  },
};
</script>

<style>
@import "@/assets/aboutUs/style.css";
</style>

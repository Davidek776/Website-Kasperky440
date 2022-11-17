<template>
  <section class="about-us" ref="aboutBegin">

	<picture>
	
		<source media="(min-width: 1024px and max-width: 1110px)" srcset="@/assets/aboutUs/img/line-md.png" />
		<source media="(min-width: 1110px)" srcset="@/assets/aboutUs/img/line.png" />
		<img loading="lazy" id="line" src="@/assets/aboutUs/img/line-md.png" alt="Dotted line" />
	</picture>

    <h1 class="title text-slate-900 text-center md:text-4xl text-2xl">
      <span class="font-light">O </span>
      <span class="font-bold">NÁS</span>
    </h1>
    <div class="row lg:mt-12 lg:mb-16 lg:flex-row-reverse">
      <p
        class="animate animate-r uppercase md:text-left md:text-lg image-text lg:w-4/12 lg:max-w-screen-md"
      >
        Nabízíme ubytování v 3 lůžkovém pokoji, 2 lůžkovém pokoji a apratmánu se
        2 pokoji. Celková kapacita 10 lůžek s možností přistýlky. Pokoje jsou
        vybaveny samostatnými koupelnami a WC.
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
        V objektu je společenská místnost s prostornou, plně vybavenou kuchyní,
        kterou mohou hosté využívat. Kuchyň je společná pro pokoje i aprtmán.
        Přímo v objektu je lyžárna pro uložení lyží a přístavba pro uschování
        jízdních kol.
      </p>
      <!-- <p class="animate animate-l uppercase  md:text-left md:text-lg image-text lg:w-5/12"></p> -->
      <img loading="lazy"
        class="animate animate-r lg:w-4/12 img-lg"
        src="@/assets/aboutUs/img/bike_house.webp"
        alt="image"
      />
    </div>
    <div class="row lg:mt-10 lg:flex-row">
      <p
        class="animate animate-l uppercase md:text-left md:text-lg image-text lg:w-4/12 lg:ml-auto lg:mr-16"
      >
        Ubytování na kraji Kašperských Hor na klidném místě mezi rodinnými
        domky. Jižní svah s výhledem na sjezdovku a okolní kopce. Sjezdovka je
        vzdálená 250 m.
      </p>
      <img loading="lazy"
        class="animate animate-r lg:w-1/2 lg:max-w-xs img-lg"
        src="@/assets/aboutUs/img/IMG_3826.webp"
        alt="image"
      />
    </div>
    <div class="row lg:mt-20 lg:flex-row-reverse">
      <p
        class="animate animate-r uppercase md:text-left md:text-lg image-text lg:w-5/12 lg:max-w-screen-sm lg:"
      >
        V zimním období využití blízkosti sjezdovky včetně lyžařské školy.
        Ideální pro rodiny s menšími dětmi, které se chtějí naučit lyžovat.
        Možnost využití večerního lyžování. Běžecké tratě za příznivých podmínek
        přímo v Kašperských Horách a na blízkém vrchu Ždánov, jinak běžecké
        tratě na Horské Kvildě nebo na Zadově obojí vzdálené 17 km s desítkami
        kilometrů upravených běžeckých tratí.
      </p>
      <img loading="lazy"
        class="animate animate-l lg:max-w-xl lg:w-1/2 lg:h-96"
        src="@/assets/aboutUs/img/20200120_pohled_z_terasy.webp"
        alt="image"
      />
    </div>
    <div class="row lg:mt-12 lg:flex-row xl:translate-y-10">
      <p
        class="animate animate-l uppercase md:text-left md:text-lg image-text lg:w-4/12 lg:ml-auto lg:mr-16"
      >
        V letním období ideální místo na výlety po Šumavských kopcích. Překrásné
        výhledy přímo na okraji Kašperských Hor. Nejvýše položený hrad v Čechách
        Kašperk. Výhodný bod pro cykloturistiku. Naučné stezky po stopách těžby
        zlata. Možnost koupání v řece Otavě nebo na koupališti v Sušici (13 km).
      </p>
      <img loading="lazy"
        class="animate animate-r lg:w-96"
        src="@/assets/aboutUs/img/IMG_3819.webp"
        alt="image"
      />
    </div>
    <div class="row lg:flex-row-reverse">
      <p
        class="animate animate-r uppercase md:text-left md:text-lg image-text lg:w-5/12"
      >
        V případě příznivého stavu vodní hladiny, sjíždění řeky Otavy na lodích,
        možnost zapůjčení lodí v Sušici. Celé léto se v Kašperských Horách a na
        hradě Kašperk koná mnoho kulturních akcí, divadelních představení, letní
        kino. Akce Národního parku Šumava včetně ukázky rýžování zlata.
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
@import "@/assets/aboutUs/style.min.css";
</style>

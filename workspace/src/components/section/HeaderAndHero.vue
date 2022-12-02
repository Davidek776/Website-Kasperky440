<template>
  <!-- <PureCss></PureCss> -->

  <section>
     <!-- <p>{{ $t("message.hello") }}</p>
    <p>{{ $t("message2.hi") }}</p> -->

    <header>
      <nav
        class="navigation p-6 2xl:pr-16 bg-transparent mdd:flex mdd:items-center mdd:justify-between ease-in duration-300"
        id="logo-parent"
      >
        <div class="relative flex justify-between">
          <h1 class="relative text-2xl font-[Helvetica] cursor-pointer" id="logo">
            <img loading="lazy"
              src="@/assets/images/icons/logo2Transparent.png"
              alt=""
              class=" w-10 md:w-20 lg:w-28 xl:w-36"
            />
          </h1>

          <span
            class="relative text-3xl md:text-6xl cursor-pointer mx-2 mdd:hidden flex justify-end"
            ref="bars"
            @click="Menu(this)"
          >
            <!-- <ion-icon name="menu" @click="Menu(this)"></ion-icon> -->
            <font-awesome-icon icon="fa-solid fa-bars" name="menu" size="" />
          </span>
        </div>

        <ul
          class="drop-down lg:flex mdd:items-center lg:relative mdd:-top-6 absolute bg-white bg-opacity-70 mdd:bg-transparent w-full smm:w-full left-0 mdd:w-auto mdd:py-0 py-4 mdd:pl-0 mdd:opacity-100 opacity-0 top-[-500px] transition-all ease-in duration-500 z-50 font-[Helvetica]"
          id="dropId"
        >
          <li class="mx-4 my-6 mdd:my-0 transition-all ease-in duration-300">
            <a
              href="#"
              @click="gotoHome()"
              class="text-sm smm:text-2xl md:text-3xl 3xl:text-3xl lg:text-xl mdd:hover:text-cyan-500 duration-500"
              >{{ $t("header.navigation1") }}</a
            >
          </li>
          <!-- hover:color-stone-50 transition-all ease-in duration-300 -->
          <li class="mx-4 my-6 mdd:my-0 transition-all ease-in duration-300">
            <a
              href="#"
              @click="gotoAccomodation()"
              class="text-sm smm:text-2xl md:text-3xl 3xl:text-3xl lg:text-xl mdd:hover:text-cyan-500 duration-500 "
              >{{ $t("header.navigation2") }}</a
            >
          </li>
          <li class="mx-4 my-6 mdd:my-0 transition-all ease-in duration-300">
            <a
              href="#"
              @click="gotoAbout()"
              class="text-sm smm:text-2xl md:text-3xl 3xl:text-3xl lg:text-xl mdd:hover:text-cyan-500 duration-500 "
              >{{ $t("header.navigation3") }}</a
            >
          </li>
          <li class="mx-4 my-6 mdd:my-0 transition-all ease-in duration-300">
            <a
              href="#"
              @click="gotoReview()"
              class=" text-sm smm:text-2xl md:text-3xl 3xl:text-3xl lg:text-xl mdd:hover:text-cyan-500 duration-500"
              >{{ $t("header.navigation4") }}</a
            >
          </li>
          <li
            class="mx-4 mr-0 my-6 mdd:my-0 mb-8 transition-all ease-in duration-300"
          >
            <a
              href="#"
              @click="gotoContact()"
              class="text-sm smm:text-2xl md:text-3xl 3xl:text-3xl lg:text-xl mdd:hover:text-cyan-500 duration-500 "
              >{{ $t("header.navigation5") }}</a
            >
          </li>
          <a
            href="https://www.booking.com/hotel/cz/kasperky-440.cs.html"
            target="_blank"
          >
            <button
              class="bg-slate-800 text-white font-[Helvetica] duration-500 px-6 py-2 mx-8 hover:bg-slate-500 rounded-3xl text-sm smm:text-2xl md:text-3xl 3xl:text-3xl lg:text-xl"
              id="reserveBtn"
            >
              {{ $t("header.button") }}
            </button>
          </a>
          <ul class="speach flex flex-row mdd:flex-col">
            <button class="duration-300"
                    v-if='langValue === "cs"'
                    @click="changeLang"

            >
              <img loading="lazy"

                   src="@/assets/images/icons/united-kingdom.png"
                   alt=""
                   class="w-8 xl:w-10 3xl:w-14"
              />
            </button>
            <button class="duration-300"
                    v-else
                    @click="changeLang"
            >
              <img
                  src="@/assets/images/icons/czech-republic.png"
                  alt=""
                  class="w-8 xl:w-10 3xl:w-14"
              />
            </button>
          </ul>
          <h2 class=""></h2>
        </ul>
      </nav>

      <div class="hero_content">
        <div class="motto hidden mdd:relative top-0 3xl:-top-10">
          <h1 class="quote text-4xl xl:text-5xl 3xl:text-6xl">
            „<span class=""> {{ $t("header.quote") }} </span>“
          </h1>
        </div>
      </div>
    </header>

    <div class="pre-content">
      <div class="description">
        <div class="left animate animate-l">
          <p class="ease-in duration-300">
            {{ $t("header.postHeader1") }}
          </p>
        </div>
        <div class="right animate animate-r">
          <p>{{ $t("header.postHeader2") }}</p>
        </div>
      </div>
      <div class="features">
        <div class="first">
          <img loading="lazy" src="@/assets/images/icons/parking2.svg" alt=""/>
          <p>{{ $t("header.features1") }}</p>
        </div>
        <div class="second">
          <img loading="lazy" src="@/assets/images/icons/Family2.svg" alt=""/>
          <p>{{ $t("header.features2") }}</p>
        </div>
        <div class="third">
          <img loading="lazy" src="@/assets/images/icons/Wifi.svg" alt=""/>
          <p>{{ $t("header.features3") }}</p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
// import PureCss from "@/components/PureCss.vue";
export default {
  setup() {
    return {};
  },
  data() {
    return {
      state: "shown",
      clicks: 0,
      langValue: "",
    };
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  components: {
    // PureCss,
  },

  methods: {
    Menu(e) {
      let list = document.querySelector("ul");
      let nav = document.querySelector("nav");
      // let quote = document.querySelector(".quote");
      list.classList.remove("top-[16vw]");
      list.classList.remove("opacity-100");
      // document.getElementsByClassName("bars").dispatchEvent(new Event("click"));
      // this.eventFire(document.getElementsByClassName("bars"), "click");
      if (this.clicks == 0) {
        this.$refs["bars"].click();
        this.clicks++;
      }
      e.name === "menu"
        ? ((e.name = "close"),
          list.classList.add("top-[16vw]"),
          list.classList.add("md:top-[15vw]"),
          list.classList.add("opacity-100"),
          list.classList.add("bg-opacity-70"),
          nav.classList.remove("bg-transparent"),
          nav.classList.add("bg-white"),
          console.log(list.classList),
          this.controlTxt())
        : // nav.classList.add("bg-opacity-80")
          ((e.name = "menu"),
          list.classList.remove("top-[16vw]"),
          list.classList.remove("md:top-[15vw]"),
          list.classList.remove("bg-opacity-70"),
          list.classList.remove("opacity-100"),
          nav.classList.add("bg-transparent"),
          nav.classList.remove("bg-white"),
          this.controlTxt());
      console.log(nav.classList);
    },
    myEventHandler(e) {
      let list = document.querySelector("ul");
      let nav = document.querySelector("nav");
      if (e.target.innerWidth > 950) {
        list.classList.remove("top-[16vw]");
        list.classList.remove("opacity-100");
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-white");
      }
    },
    controlTxt() {
      let nav = document.querySelector("nav");
      let textToRemove = document.querySelector(".pre-content .left>p");
      if (window.innerWidth < 620) {
        console.log(textToRemove.classList);
        if (nav.classList.contains("bg-white")) {
          textToRemove.classList.add("opacity-0");
          console.log("show");
          this.state = "shown";
        } else {
          // textToRemove.classList.add("opacity-100");
          textToRemove.classList.remove("opacity-0");
          this.state = "hidden";
          console.log("hide");
        }
      }
    },

    gotoHome() {
      this.$emit("home");
    },
    gotoAccomodation() {
      this.$emit("accomodation");
    },
    gotoAbout() {
      this.$emit("about");
    },
    gotoReview() {
      this.$emit("review");
    },
    gotoContact() {
      this.$emit("contact");
    },
    changeLang() {
      this.langValue = localStorage.getItem("lang") === "cs" ? "en" : "cs"
      localStorage.setItem("lang", this.langValue)
      location.reload()
    },
    initLang() {
      this.langValue = localStorage.getItem("lang");
      if (this.langValue == null) {
        localStorage.setItem("lang", "cs")
        this.langValue = "cs"
      }

    }
  },
  beforeMount() {
    this.initLang()
  }
};
</script>

<style scoped>
@import "@/assets/HeaderHeroStyles/base.css";
@import "@/assets/HeaderHeroStyles/dropDownStyle.css";

.navigation {
  /* z-index: 800; */
}
</style>

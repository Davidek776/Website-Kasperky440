<template>
  <!-- <PureCss></PureCss> -->

  <header>
    <nav
      class="navigation p-6 2xl:pr-16 bg-transparent mdd:flex mdd:items-center mdd:justify-between ease-in duration-300"
      id="logo-parent"
    >
      <div class="relative flex justify-between items-center">
        <h1 class="text-2xl font-[Helvetica] cursor-pointer" id="logo">
          <img
            src="@/assets/images/icons/logo2Transparent.png"
            alt=""
            class="kasLogo"
          />
        </h1>

        <span
          class="text-3xl cursor-pointer mx-2 mdd:hidden block bar"
          ref="bars"
          @click="Menu(this)"
        >
          <!-- <ion-icon name="menu" @click="Menu(this)"></ion-icon> -->
          <img
            src="@/assets/images/icons/bars-solid.svg"
            name="menu"
            width="50"
            alt=""
          />
        </span>
      </div>

      <ul
        class="drop-down mdd:flex mdd:items-center mdd:static absolute bg-white bg-opacity-70 mdd:bg-transparent w-full smm:w-full left-0 mdd:w-auto mdd:py-0 py-4 mdd:pl-0 pl-7 mdd:opacity-100 opacity-0 smm:opacity-100 top-[-400px] transition-all ease-in duration-500 z-50 font-[Helvetica]"
        id="dropId"
      >
        <li class="mx-4 my-6 mdd:my-0 transition-all ease-in duration-300">
          <a
            href="#"
            @click="gotoHome()"
            class="text-xl mdd:hover:text-cyan-500 duration-500"
            >Domů</a
          >
        </li>
        <!-- hover:color-stone-50 transition-all ease-in duration-300 -->
        <li class="mx-4 my-6 mdd:my-0 transition-all ease-in duration-300">
          <a
            href="#"
            @click="gotoAccomodation()"
            class="text-xl mdd:hover:text-cyan-500 duration-500"
            >Ubytování</a
          >
        </li>
        <li class="mx-4 my-6 mdd:my-0 transition-all ease-in duration-300">
          <a
            href="#"
            @click="gotoAbout()"
            class="text-xl mdd:hover:text-cyan-500 duration-500"
            >O Nás</a
          >
        </li>
        <li class="mx-4 my-6 mdd:my-0 transition-all ease-in duration-300">
          <a
            href="#"
            @click="gotoReview()"
            class="text-xl mdd:hover:text-cyan-500 duration-500"
            >Recenze</a
          >
        </li>
        <li
          class="mx-4 mr-0 my-6 mdd:my-0 mb-8 transition-all ease-in duration-300"
        >
          <a
            href="#"
            @click="gotoContact()"
            class="text-xl mdd:hover:text-cyan-500 duration-500"
            >Kontakt</a
          >
        </li>
        <a
          href="https://www.booking.com/hotel/cz/kasperky-440.cs.html"
          target="_blank"
        >
          <button
            class="bg-slate-800 text-white font-[Helvetica] duration-500 px-6 py-2 mx-8 hover:bg-slate-500 rounded-3xl"
            id="reserveBtn"
          >
            Rezervovat
          </button>
        </a>
        <ul class="speach flex flex-row mdd:flex-col">
          <button class="duration-300">
            <img
              src="@/assets/images/icons/czech-republic.png"
              alt=""
              class="w-8"
            />
          </button>
          <!--Uncomment when we have english version-->
          <!--
          <button class="duration-300">
            <img
              src="@/assets/images/icons/united-kingdom.png"
              alt=""
              class="w-8"
            />
          </button>
          -->
        </ul>
        <h2 class=""></h2>
      </ul>
    </nav>

    <div class="hero_content">
      <div class="motto">
        <h1 class="quote">
          „<span> Pohodové Ubytování Pro Vaši Relaxaci </span>“
        </h1>
      </div>
    </div>
  </header>

  <div class="pre-content">
    <div class="description">
      <div class="left ease-in duration-300">
        <p class="ease-in duration-300">
          Kašperky 440 se nachází v Kašperských Horách. Nabízí zahradu a
          bezplatné Wi-Fi.
        </p>
      </div>
      <div class="right">
        <p>Apartmány mají terasu, TV a vlastní koupelnu se sprchou.</p>
      </div>
    </div>
    <div class="features">
      <div class="first">
        <img src="@/assets/images/icons/parking2.svg" alt="" />
        <p>PARKOVÁNÍ ZDARMA</p>
      </div>
      <div class="second">
        <img src="@/assets/images/icons/Family2.svg" alt="" />
        <p>RODINNÉ POKOJE</p>
      </div>
      <div class="third">
        <img src="@/assets/images/icons/Wifi.svg" alt="" />
        <p>WIFI ZDARMA</p>
      </div>
    </div>
  </div>
  <!-- <div class="content">

  </div> -->

  <!-- <div class="next"></div> -->

  <!-- </main> -->
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
      list.classList.remove("top-[110px]");
      list.classList.remove("opacity-100");
      // document.getElementsByClassName("bars").dispatchEvent(new Event("click"));
      // this.eventFire(document.getElementsByClassName("bars"), "click");
      if (this.clicks == 0) {
        this.$refs["bars"].click();
        this.clicks++;
      }

      e.name === "menu"
        ? ((e.name = "close"),
          list.classList.add("top-[110px]"),
          list.classList.add("opacity-100"),
          nav.classList.remove("bg-transparent"),
          nav.classList.add("bg-white"),
          console.log(list.classList),
          this.controlTxt())
        : // nav.classList.add("bg-opacity-80")
          ((e.name = "menu"),
          list.classList.remove("top-[110px]"),
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
        list.classList.remove("top-[100px]");
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
  },
};
</script>

<style scoped>
@import "@/assets/HeaderHeroStyles/base.css";
@import "@/assets/HeaderHeroStyles/dropDownStyle.css";
.navigation {
  /* z-index: 800; */
}
</style>

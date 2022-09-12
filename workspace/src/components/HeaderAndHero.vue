<template>
  <header>
    <nav
      class="navigation p-5 2xl:pr-16 bg-transparent md:flex md:items-center md:justify-between ease-in duration-300"
    >
      <div class="relative flex justify-between items-center">
        <span class="text-2xl font-[Helvetica] cursor-pointer">
          Kašperky 440
        </span>

        <span class="text-3xl cursor-pointer mx-2 md:hidden block">
          <!-- <ion-icon name="menu" @click="Menu(this)"></ion-icon> -->
          <img
            src="../assets/images/icons/bars-solid.svg"
            name="menu"
            width="50"
            @click="Menu(this)"
            alt=""
          />
        </span>
      </div>

      <ul
        class="drop-down md:flex md:items-center md:static absolute bg-white bg-opacity-70 md:bg-transparent sm:w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 z-50 font-[Helvetica]"
      >
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">Domů</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500"
            >Ubytování</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">O Nás</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500"
            >Recenze</a
          >
        </li>
        <li class="mx-4 mr-0 my-6 md:my-0 mb-8">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500"
            >Kontakt</a
          >
        </li>

        <button
          class="bg-slate-800 text-white font-[Helvetica] duration-500 px-6 py-2 mx-8 hover:bg-slate-500 rounded-3xl"
          id="reserveBtn"
        >
          Rezervovat
        </button>

        <ul class="speach md:flex flex-col">
          <button>
            <img
              src="../assets/images/icons/czech-republic.png"
              alt=""
              class="w-8"
            />
          </button>
          <button>
            <img
              src="../assets/images/icons/united-kingdom.png"
              alt=""
              class="w-8"
            />
          </button>
        </ul>
        <h2 class=""></h2>
      </ul>
    </nav>

    <div class="hero_content">
      <div class="motto">
        <h1 class="quote">
          „<span> Pohodové Ubytování Pro Vaší Relaxaci </span>“
        </h1>
      </div>
    </div>
  </header>

  <div class="pre-content">
    <div class="left">
      <p>
        Kašperky 440 se nachází v Kašperských Horách. Nabízí zahradu a bezplatné
        Wi-Fi.
      </p>
    </div>
    <div class="right">
      <p>Apartmány mají terasu, TV a vlastní koupelnu se sprchou.</p>
    </div>
  </div>
  <div class="content">
    <div class="features">
      <div class="first">
        <img src="../assets/images/icons/parking2.svg" alt="" />
        <p>FREE PARKING</p>
      </div>
      <div class="second">
        <img src="../assets/images/icons/Family2.svg" alt="" />
        <p>FAMILY ROOMS</p>
      </div>
      <div class="third">
        <img src="../assets/images/icons/Wifi.svg" alt="" />
        <p>FREE WIFI</p>
      </div>
    </div>
  </div>

  <div class="next"></div>

  <!-- </main> -->
</template>

<script>
export default {
  setup() {
    return {};
  },
  methods: {
    Menu(e) {
      let list = document.querySelector("ul");
      let nav = document.querySelector("nav");
      list.classList.remove("top-[80px]");
      list.classList.remove("opacity-100");
      e.name === "menu"
        ? ((e.name = "close"),
          list.classList.add("top-[100px]"),
          list.classList.add("opacity-100"),
          nav.classList.remove("bg-transparent"),
          nav.classList.add("bg-white"))
        : // nav.classList.add("bg-opacity-80")
          ((e.name = "menu"),
          list.classList.remove("top-[100px]"),
          list.classList.remove("opacity-100"),
          nav.classList.add("bg-transparent"),
          nav.classList.remove("bg-white"));
    },
  },
};
</script>

<style>
@import "../assets/HeaderHeroStyles/base.css";
.navigation {
  /* z-index: 800; */
}
</style>

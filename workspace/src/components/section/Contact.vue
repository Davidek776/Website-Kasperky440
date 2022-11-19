<template>
  <section class="px-2 py-10 xl:py-20 xl:pb-10 xl:px-20 space-y-32">
    <div class="space-y-24">
      <h1 class="title text-center contact" ref="contactBegin">
        {{ $t("contact.title") }}
      </h1>

      <div
        class="flex items-center justify-between max-w-7xl mx-auto flex-col space-y-12 xl:space-y-0 xl:flex-row xl:space-x-12"
      >
        <!-- <img
          class="rounded-lg max-w-xl w-full"
          src="@/assets/images/Contact/map.png"
          alt="Map"
        /> -->
			<MapComponent class="rounded-lg max-w-xl w-full"/>
        <div class="pl-4 py-16 max-w-xl w-full h-full bg-[#E3E3E3] rounded-lg">
          <table>
            <tr>
              <td class="uppercase pr-4 py-5">Email:</td>
              <td class="font-bold">Kasperky440@gmail.com</td>
            </tr>
            <tr>
              <td class="uppercase pr-4 py-5">{{ $t("contact.phone") }}</td>
              <td class="font-bold">+420 777 021 657</td>
            </tr>
            <tr>
              <td class="uppercase pr-4 py-5">{{ $t("contact.address") }}</td>
              <td class="font-bold">
                Kašperky 440, Kašperské Hory 341 92, Czechia
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center">
      <a
        href="https://www.booking.com/hotel/cz/kasperky-440.cs.html"
        target="_blank"
        class="uppercase text-white text-lg px-12 py-4 bg-slate-800 rounded-lg mx-auto relative hover:bg-slate-700 transition-all"
      >
        {{ $t("contact.button") }}
        <img loading="lazy"
          class="absolute -z-10 left-56 bottom-4 opacity-0 sm:opacity-100"
          src="@/assets/images/Contact/Arrow.png"
          alt="Arrow"
        />
      </a>
    </div>
  </section>
</template>

<script>
import MapComponent from '@/components/MapComponent.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  components: {MapComponent},
  props: ["contact"],
  methods: {
    scrollToElement() {
      let rect = this.$refs["contactBegin"].getBoundingClientRect();
      window.scrollTo({
        top: rect.top,
        behavior: "smooth",
      });
    },
  },
  watch: {
    contact: function () {
      this.scrollToElement();
    },
  },
};
</script>

<style scoped></style>

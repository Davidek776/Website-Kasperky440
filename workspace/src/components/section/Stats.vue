<template>
  <section class="bg-[#d9d9d9] bg-opacity-[35%]">
    <div class="py-10 md:py-20 md:px-4 px-2 lg:py-20 lg:px-20 flex justify-between items-center max-w-7xl mx-auto flex-col space-y-16 md:space-y-0 md:flex-row">
      <h1 class="uppercase text-lg lg:text-3xl animate animate-l w-2/5">
        {{ $t("stats.desc") }}
      </h1>
      <div class="space-y-8 animate animate-r">
        <div class="text-white bg-[#a6372d] pl-2 py-2 pr-32 rounded-full rounded-bl-none">
          9,4 / 10
        </div>
        <table>
          <tr v-for="stat in statsData" :key="stat.id">
            <td class="w-fit pr-4">
              <p class="text-sm">{{ $t(stat.title) }}</p>
            </td>
            <td>
              <div class="h-2 w-44 bg-[#cbd5e1] rounded"> <div class="h-full rounded" :class="stat.is_improving ? 'bg-[#2DA66C]' : 'bg-[#a6372d]'" :style="'width:' + stat.value + '%;'"></div> </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>

import statsData from "@/data/stats_DB.json"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Stats",
  data() {
    return {
      statsData
    }
  }
}
</script>

<style scoped>

</style>
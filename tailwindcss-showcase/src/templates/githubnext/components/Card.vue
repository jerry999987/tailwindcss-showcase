<template>
  <a class="group relative focus:outline-none block border border-black py-4 lg:py-10 px-6 lg:px-14 bg-white overflow-hidden transform transition hover:scale-[1.01] h-full will-change-transform rounded-3xl"
    href="/projects/copilot-for-docs/">
    <div class="relative max-w-screen-sm mr-4 lg:mr-8 w-full z-10">
      <h3 class="text-3xl pt-4 pb-1 font-[800] tracking-tight bg-clip-text">
        {{ title }}
      </h3>
      <div class="text-gh-textLight mt-3">{{ date }}</div>
      <div class="mt-4">
        <div class="inline-block rounded-md px-3 py-2 uppercase tracking-widest text-xs font-semibold"
          style="background: rgba(240, 136, 62, 0.2); color: rgb(240, 136, 62)">
          Waitlist
        </div>
      </div>
      <div class="font-light text-xl mt-5 pb-5">
        {{ desc }}
      </div>
    </div>
    <div class="absolute top-0 bottom-0 right-0 w-[max(30em,50%)] opacity-40">
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1 1" preserveAspectRatio="none">
        <defs>
          <linearGradient :id="'gradient' + index" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" :stop-color="colors.from"></stop>
            <stop offset="0.5" :stop-color="colors.via"></stop>
            <stop offset="1" :stop-color="colors.to"></stop>
          </linearGradient>
        </defs>
        <path d="M0 1 Q 0.8 0.8 1 0 L 1 1 Z" :fill="'url(#gradient' + index + ')'"></path>
      </svg>
      <div class="absolute inset-0 bg-white transition duration-300 group-hover:translate-x-[120%] will-change-transform">
      </div>
    </div>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  index: number;
  colors: colors;
  title: string;
  desc: string;
  date: string;
}>();
const { index, colors, title, desc, date } = props;
</script>
<style scoped lang="scss"></style>

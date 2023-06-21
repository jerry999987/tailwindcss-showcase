<template>
  <div class="text-white">
    <div class="text-center">
      <h1 class="text-6xl font-sans font-bold pt-12 pb-8">Make Ship Happen</h1>
      <p
        class="text-2xl font-light mx-auto w-[340px] md:w-[660px] text-[#888] tracking-wider"
      >
        Turbo is an incremental bundler and build system optimized for
        JavaScript and TypeScript, written in Rust.
      </p>
    </div>
    <div
      class="container grid grid-cols-1 lg:grid-cols-2 pt-6 justify-center mx-auto justify-items-center gap-8"
    >
      <div
        class="card"
      >
        <img
          src="https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg"
          alt=""
        />
        <div class="card-grident from-[#FF3358] to-[#FF4FD8]"></div>
        <RepoText class="mt-10 mb-4" />
        <p class="text-center text-lg text-gray-400/90 w-[280px] md:w-[340px]">
          High-performance build system for JavaScript and TypeScript codebases.
        </p>
      </div>
      <div
        class="card"
      >
        <img
          class="h-24 w-24"
          src="https://turbo.build/images/docs/pack/turbopack-hero-logo-dark.svg"
          alt=""
        />
        <div class=" card-grident from-[#4EBFFF] to-[#BD69FF] "></div>
        <PackText class="mt-10 mb-4" />
        <p class="text-center text-lg text-gray-400/90 w-[280px] md:w-[340px]">
          High-performance build system for JavaScript and TypeScript codebases.
        </p>
      </div>
    </div>
    <div class="text-center text-gray-400/90 py-6">
      TRUSTED BY TEAMS FROM AROUND THE WORLD
    </div>
    <div class="container mx-auto grid grid-cols-3 lg:grid-cols-6  gap-8 justify-center justify-items-center">
      <img class="px-8" src="https://turbo.build/images/logos/white/vercel.svg" />
      <img class="px-8" src="https://turbo.build/images/logos/white/microsoft.svg" />
      <img class="px-8" src="https://turbo.build/images/logos/white/disney.svg" />
      <img class="px-8" src="https://turbo.build/images/logos/white/netflix.svg" />
      <img class="px-8" src="https://turbo.build/images/logos/white/aws.svg" />
      <img class="px-8" src="https://turbo.build/images/logos/white/adobe.svg" />
    </div>
  </div>
</template>
<script setup lang="ts">
import RepoText from "./RepoText.vue";
import PackText from "./PackText.vue";
</script>
<style scoped lang="scss">
@import url(../style/home.css);
</style>

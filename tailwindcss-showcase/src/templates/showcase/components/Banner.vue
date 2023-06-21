<template>
  <div ref="bannerRef" class="pt-20  bg-[url(@/assets/img/banner-bg.jpg)] dark:bg-[url(@/assets/img/banner-bg-dark.jpg)] bg-cover sm:bg-contain  ">
    <div class="max-w-3xl  mx-auto  px-4 lg:px-8 ">
      <h1 class="text-sky-400 text-center leading-6">Showcase</h1>
     <p class="my-6 text-6xl font-bold text-center dark:text-gray-200">You can build anything with Tailwind CSS.</p>
      <p class="text-slate-600 dark:text-slate-400 leading-8 text-lg font-light sm:text-center">Well not quite <em class="font-semibold">anything</em>, like you can't build a spaceship with it. But you can definitelybuild the website for the spaceship —<a href="https://tailwindcss.com/showcase/nasa" class="text-black dark:text-gray-300 font-semibold border-b border-sky-300 hover:border-b-2 ">NASA did</a></p>
    </div>
  </div>
</template>
<script setup >
import { gsap } from "gsap";
import { onMounted, ref } from "vue";
const bannerRef = ref(null);
onMounted(() => {
  gsap.from(
    bannerRef.value,
    { opacity: 0, y: -200 },
  );
})
</script>
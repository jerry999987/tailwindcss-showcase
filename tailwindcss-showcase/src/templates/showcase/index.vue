<template>
  <NavBar />
  <NavBg />
  <Banner />
  <div class="px-8 mt-20 pb-20 lg:px-24 xl:px-40 dark:bg-slate-900">
    <transition appear @before-enter="beforeEnter" @enter="enter">
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-8 max-w-[32rem] sm:max-w-[72rem]">
        <CaseItem   v-for="(c, i) in caseList" v-bind="c" />
      </ul>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { gsap } from "gsap";

import NavBar from "@/components/NavBar.vue";
import NavBg from "@/components/NavBg.vue";
import Banner from "./components/Banner.vue";
import CaseItem from "./components/CaseItem.vue";
import videoSrcList from "@/mock/videos";
import desList from "@/mock/desList";
import imgSrcList from "@/mock/imgs";
import { onMounted } from "vue";
import { ref } from "vue";
interface CaseItem {
  imgsrc: string;
  title: string;
  desc: string;
  video: string;
  link: string;
}
let caseList = videoSrcList.map((v, i) => {
  let title = v.slice(43).split(".")[0];
  return {
    title,
    desc: desList[i],
    imgsrc: imgSrcList[i],
    video: v,
    link: "/" + title.toLowerCase()
  } as CaseItem;
});

function beforeEnter(el) {
  el.style.opacity = '0'
  el.style.transform = 'translateX(-100px)'
}
function enter(el) {
  gsap.to(el, {
    delay: 1,
    duration: 1,
    x: 0,
    opacity: 1,
  })
}
const caseRefs = ref<HTMLElement[]>([]);
onMounted(() => {
  // console.log("[ caseRefs ]-47", caseRefs.value);
  // caseRefs.value.forEach((el, i) => {
  //   if (!el) return;
  //   gsap.from(el, { opacity: 0, y: -200 },);
  // });
})
</script>
<style scoped lang="scss"></style>

<template>
  <header
    class="flex w-full fixed top-0 left-0 z-[60] justify-between px-6 items-center h-20 text-white transition-all duration-500"  :class="headerBg"
  >
    <LogoSvg   />
    <div class="text-md h-full text-center leading-[5rem]">Menu</div>
  </header>
</template>
<script setup lang="ts">
import { ref  } from "vue";
import LogoSvg from "./LogoSvg.vue";
//通过判断滚动的距离，来决定header 背景色的变化

let headerBg = ref("bg-zinc-900/[.10]");
const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollTop;
  if (scrollHeight > 100) {
    headerBg.value = `bg-gray-900`
    
  } else {
    let opacity = (scrollHeight / 100).toFixed(1).slice(1);
    headerBg.value = `bg-zinc-900/[${opacity}]`
  }
};
  window.addEventListener("scroll", handleScroll);
</script>
<style scoped lang="scss"></style>

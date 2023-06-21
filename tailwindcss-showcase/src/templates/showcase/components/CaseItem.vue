<template>
  <li
    class="bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 rounded-2xl min-w-full max-w-[24rem] p-[1rem] group transition-all duration-300  justify-self-center cursor-pointer" @click="clickHandler"
  >
    <div class="relative h-60 mb-6">
      <img :src="imgsrc" class="w-full h-full rounded-md" />
      <div
        class="absolute top-0 left-0 w-full h-full duration-700 transition-opacity bg-gradient-to-t opacity-0 group-hover:opacity-100"
      >
        <video
          ref="video"
          class="absolute z-10 inset-0 w-full h-full rounded-md"
          autoplay
          muted
          loop
        >
          <source :src="video" type="video/mp4" />
        </video>
      </div>
    </div>
    <a :to="link" class="group group-hover:text-sky-500 cursor-pointer flex dark:text-slate-200 "
      >{{ title }} <Arrow
    /></a>
    <p
      class="w-full flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400"
    >
      {{ desc }}
    </p>
  </li>
</template>
<script setup lang="ts">
import Arrow from "./Arrow.vue";
import { useRouter } from "vue-router";
const props = defineProps<{
  imgsrc: string;
  video: string;
  title: string;
  desc: string;
  link: string;
}>();
const { imgsrc, video, title, desc, link } = props;
//跳转
//拿到当前路由实例
const router = useRouter();
const clickHandler = () => {
  router.push(link);
};
</script>
<style scoped lang="scss">
video {
  object-fit: cover;
}
</style>

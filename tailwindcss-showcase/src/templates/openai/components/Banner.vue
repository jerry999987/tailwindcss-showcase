<template>
  <div class="w-full absolute top-0 left-0 h-screen bg-gray-900/60">
    <div class="absolute w-full left-0 right-0 bottom-4">
      <h1
        class="mx-8 md:mx-auto md:text-center  text-white text-4xl md:text-6xl font-light font-mono leading-nomal "
      >
        Introducing GPT-4, OpenAI’s most advanced system
      </h1>
      <div class="px-4 py-8 text-white flex justify-between items-center ">
       <div >
        <button class="border-white border py-1.5 px-3 hover:text-black hover:bg-white" >
          Learn about GPT-4
        </button>
        <a class="border-white border-b hover:border-gray-400 xs:ml-4 cursor-pointer pb-1 whitespace-nowrap"
          >View GPT-4 research</a
        >
       </div>
        <button class="h-10  border-black overflow-hidden  px-5 pl-5  bg-black text-white hover:bg-white hover:text-black " @click="togglePlay">
          <!-- 播放 -->
          <Transition>
            <span v-if="isPlay" class="btn-content flex items-center justify-around" >
            <svg
              class="mr-0 md:mr-1 w-4 h-4"
            >
              <g  fill="currentColor">
                <rect x="9.81" y="2" width="1.38" height="12"></rect>
                <rect x="4.81" y="2" width="1.38" height="12"></rect>
              </g>
            </svg>
           <span class="hidden md:inline">Play  Video</span>
          </span>
           <!-- 暂停 -->
          <span v-else class="flex btn-content  flex-nowrap items-center justify-around">
            <svg
              style="width: 1em; height: 1em"
              class="mr-0 md:mr-2  w-4 h-4"
            >
              <polygon
                fill="currentColor"
                points="2 2 14 8 2 14 2 2"
              ></polygon>
            </svg>
           <span class="hidden md:inline">Pause Video</span>
          </span>
          </Transition>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref ,getCurrentInstance } from "vue";

const ctx = getCurrentInstance();
const bus = ctx?.appContext.config.globalProperties.$bus;
//播放切换
let isPlay = ref(false);
const togglePlay = () => {
  isPlay.value = !isPlay.value;
  bus.emit("togglePlay");
};
</script>
<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in-out;
}
.btn-content {
  // transition: all 0.5s ease-in-out;
  transform-origin: center;
  transform: translate(0, 0);
}
.v-enter-from{
  transform: translateY(100%);
  opacity: 0;
}
.v-leave-to {
   transform: translateY(-100%);
   opacity: 0;
}
</style>

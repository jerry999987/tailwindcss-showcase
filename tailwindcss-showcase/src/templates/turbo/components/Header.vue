<template>
  <div class="w-full h-16 bg-black bg-opacity-50 backdrop-blur-md text-gray-500 flex justify-between px-6">
    <div class=" flex justify-around items-center space-x-2 transition-all duration-500">
      <Vercel />
      <svg height="24" shape-rendering="geometricPrecision" stroke="#666" stroke-width="1.5" viewBox="0 0 24 24"><path d="M16.88 3.549L7.12 20.451"></path></svg>
      <TurboRepo  v-if="type =='repo'" />
      <TurboPack  v-else />
      <div class="radio-group border border-gray-700 rounded-md h-8 flex items-center p-1 text-sm ">
        <span class="hover:text-gray-200 h-full  px-[4px]" @click="toggle('repo')" :class="{active : type =='repo'}">Repo</span>
        <span class="hover:text-gray-200 h-full  px-[4px]" @click="toggle('pack')" :class="{active : type =='pack'}">Pack</span>
      </div>
    </div>

    <div  class="flex space-x-6 items-center text-sm">
     <div class="hidden md:flex space-x-4 items-center ">
      <a class="hover:text-gray-200" href="#">Docs </a>
      <a class="hover:text-gray-200" href="#">Blog </a>
      <a class="hover:text-gray-200" href="#">Showcase</a>
      <a class="hover:text-gray-200" href="#">Enterprise</a>
     </div>
    <div class="hidden lg:block md:w-[16rem] relative" >
      <input type="text"  class="w-full px-4   focus:border  focus:border-blue-500  focus:shadow-blue-500 rounded h-8 bg-[#2D2D2D]" placeholder="Search Documentation..." />
      <span class="active border border-gray-500 px-1 absolute right-2 top-1/2 -translate-y-1/2">⌘K</span>
    </div>
    <div class="flex space-x-4  ">
    <Github class="text-white  hover:text-gray-500"/><Discord class="text-white  hover:text-gray-500"/>
  </div>
  </div>

    
  </div>
</template>
<script setup lang="ts">
import { ref ,computed } from "vue";
import Vercel from "./Vercel.vue";
import TurboRepo from "./TurboRepo.vue";
import TurboPack from "./TurboPack.vue";
import Github from "./Github.vue";
import Discord from "./Discord.vue";

const type = ref("");

const toggle = (t) => {
   type.value = t
};
</script>
<style scoped lang="scss">
@import url('../style/home.css');
input{
  outline: none;
}
input:focus{
  box-shadow: 0 0 10px #0079EE;
}
</style>

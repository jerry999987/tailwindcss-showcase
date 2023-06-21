<template>
  <video ref="video"
   muted autoplay loop playsinline
    class="w-full h-screen object-cover "
  >
    <source
      src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";
const ctx = getCurrentInstance();
const bus = ctx?.appContext.config.globalProperties.$bus;
//播放切换
const video = ref(null);
bus.on('togglePlay', () => {
  if (video?.value.paused) {
    video?.value.play();
  } else {
    video?.value.pause();
  }
});
</script>
<style scoped lang="scss"></style>

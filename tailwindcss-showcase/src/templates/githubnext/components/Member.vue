<template>

<div class="flex flex-col items-center text-center">
  <img class="h-32 w-32 rounded-full"  :src="avatar" alt="">
  <h3 class="text-xl font-semibold mt-4 mb-2 line-clamp-1">{{ accountName }}</h3>
  <p class="text-sm text-gray-800 line-clamp-3">
    {{ post }}
  </p>
</div>
</template>
<script setup lang='ts'>
const props = defineProps<{avatar:string,accountName:string,post:string}>()
const { avatar ,accountName,post } = props
</script>
<style scoped lang='scss'>

</style>
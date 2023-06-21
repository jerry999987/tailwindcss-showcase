<template>
  <div class="home-content bg-black text-white divide-y pb-16 px-4">
    <div class="list-mixed py-8 ">
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li class="mb-6 p-4 hover:bg-gray-900/90" v-for="{ title,desc } in mixedList">
          <h2 class="text-xl font-mono font-semibold mb-3">
            {{ title }}
          </h2>
          <a href="" class="border-b-hover"
            >{{ desc }}</a
          >
        </li>
      </ul>
    </div>

    <!-- 新特性 -->
    <div class="list-feature grid py-8 grid-cols-1 md:grid-cols-2 gap-4">
      <img
        class="w-full ratio ratio-1x1"
        src="https://openaicom.imgix.net/8d14e8f0-e267-4b8b-a9f2-a79120808f5a/chatgpt.jpg?fm=auto&auto=compress,format&fit=min&rect=0,0,2048,2048&w=1919&h=1919"
        alt=""
      />
      <div class="flex-1 ml-4">
        <h2 class="text-4xl font-semibold">ChatGPT</h2>
        <p class="my-6 text-xl">
          We’ve trained a model called ChatGPT which interacts in a
          conversational way. The dialogue format makes it possible for ChatGPT
          to answer follow-up questions, admit its mistakes, challenge incorrect
          premises, and reject inappropriate requests.
        </p>
        <a href="" class="border-b border-white hover:border-slate-500"
          >Try ChatGPT
        </a>
        <a class="border-b border-white hover:border-slate-500 ml-6" href=""
          >Read about ChatGPT</a
        >
      </div>
    </div>
    <!-- 最近更新 -->
    <div class="list-latest-update py-4">
      <h2 class="text-3xl mb-4 font-sans flex justify-between items-center">
        Latest updates
        <a href="" class="text-xl border-b-hover">
          View all updates</a
        >
      </h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <li class="" v-for="{title,date,image} in updateList">
          <a href="#">
            <img class="ratio ratio-1x1 w-full" :src="image" :alt="title" />
            <h3 class="mt-4 mb-2 text-xl font-medium">{{ title }}</h3>
            <p>{{ date }}</p>
          </a>
        </li>
      </ul>
    </div>

    <!-- join us -->
    <div class="join-us py-4 space-y-6">
      <h1 class="text-4xl md:text-6xl font-serif  leading-relaxed  font-light">Join us in shaping the future of technology.</h1>
      <button class="text-4xl border w-full text-center py-4 hover:bg-white hover:text-black">View careers</button>
    </div>
  </div>
</template>
<script setup lang="ts">
const mixedList = [
  {
    title:'Creating safe AGI that benefits all of humanity',
    desc:'Learn about OpenAI'
  },
  {
    title:'Pioneering research on the path to AGI',
    desc:'Learn about our research'
  },
  {
    title:'Transforming work and creativity with AI',
    desc:'Explore our products'
  },
  {
    title:'Join us in shaping the future of technology',
    desc:'View careers'
  },
]
const updateList = [
  {
    title: "March 20 ChatGPT outage: Here’s what happened",
    date: "Mar 24, 2023",
    image:
      "https://tinyurl.com/2p3yvle3",
  },
  {
    title: "March 20 ChatGPT outage: Here’s what happened",
    date: "Mar 24, 2023",
    image: "https://tinyurl.com/2j3vtxa6",
  },
  {
    title: " March 20 ChatGPT outage: Here’s what happened",
    date: "Mar 24, 2023",
    image: "https://tinyurl.com/2ono7mp5",
  },
  {
    title: " March 20 ChatGPT outage: Here’s what happened",
    date: "Mar 24, 2023",
    image: "https://tinyurl.com/2hzffzgv",
  },
];
</script>
<style scoped lang="scss">
.ratio-1x1 {
  --ratio: 100%;
}
.ratio:before {
  content: "";
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: var(--ratio);
}

</style>

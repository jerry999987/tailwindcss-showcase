<template>
  <div class="githubnext">
    <div
      class="h-1 bg-gradient-to-r from-[#BD69FF] via-[#B6619E] to-[#DA5957] drop-shadow-lg z-10"
    ></div>
    <header class="h-16 px-6 flex justify-between items-center">
      <img
        src="https://githubnext.com/assets/images/next-octocat.svg"
        class="h-full w-[64px]"
      />
      <Nav />
    </header>
    <div class="mx-auto w-full md:w-[48rem] px-8 text-center">
      <button
        class="py-2 z-1 px-6 relative bg-transparent inline-flex items-center justify-center gradient-border-badge"
      >
        <span class="z-10 text-sm lg:text-base bg-clip-text text-transparent bg-gradient-to-r from-[#9867f0] to-[#ed4e50] font-semibold relative -top-px"
          >GitHub Next</span
        >
      </button>
      <h2 class="font-bold text-4xl my-8">
        GitHub Next investigates the future of software development.
      </h2>
      <p class="text-gray-600 text-xl tracking-wider">
        We are a team of researchers and engineers at GitHub, exploring things
        beyond the adjacent possible. We prototype tools and technologies that
        will change our craft. We identify new approaches to building healthy,
        productive software engineering teams.
      </p>
    </div>

    <div
      class="bg-white/90 backdrop-blur backdrop-filter sticky top-0 z-10 p-8"
    >
      <nav
        class="flex items-center space-x-4 justify-around font-semibold text-sm uppercase tracking-widest"
      >
        <a
          class="inline-flex flex-1 justify-center transition-all text-gray-900 hover:text-gray-900"
          href="#"
          >Projects</a
        ><a
          class="inline-flex flex-1 justify-center transition-all text-gray-400 hover:text-gray-900"
          href="#"
          >Team</a
        ><a
          class="inline-flex flex-1 justify-center transition-all text-gray-400 hover:text-gray-900"
          href="#"
          >Events</a
        ><a
          class="inline-flex flex-1 justify-center transition-all text-gray-400 hover:text-gray-900"
          href="#"
          >Speaker</a
        >
      </nav>
    </div>
    <div class="md:px-4">
      <div
        class="relative md:rounded-2xl bg-[#060D20] overflow-hidden px-6 py-24 sm:px-10 md:px-36 lg:px-48"
      >
        <div
          class="h-96 w-96 from-[#4EBFFF] via-[#ed4e50] to-[#BD69FF] absolute bg-gradient-to-b opacity-[0.5] blur-[120px]"
        ></div>
        <h2 class="text-5xl font-bold font-serif text-white mb-10">Projects</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8 w-full">
          <Card v-for="card in cardList" v-bind="card" />
        </div>
      </div>

      <div class="relative bg-white px-6 py-24 sm:px-10 md:px-36 lg:px-48">
        <h2 class="text-5xl font-bold font-serif text-black mb-8">Team</h2>
        <p class="text-2xl text-gray-700">
          Our team spans time zones, languages, and fields of expertise.
        </p>
        <div
          class="h-96 w-96 right-24 top-24  from-[#ff595c] via-[#70cbff] to-[#65ffa5] absolute bg-gradient-to-tr opacity-[0.4] blur-[100px]"
        ></div>
        <div class="members grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto gap-12 w-full my-8">
         <Member v-for="member in members" v-bind="member"/>
        </div>
      </div>
    </div>
    <div class="h-screen"></div>
    <div class="h-screen"></div>
  </div>
</template>
<script lang="ts" setup>
import Nav from "./components/Nav.vue";
import Card from "./components/Card.vue";
import Member from "./components/Member.vue";
import cards from "./mock/cards.js";
import members from "./mock/members.js"
function randomHexColor() {
  var hexColor = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 256).toString(16)
  );
  return "#" + hexColor.join("");
}

const getColors = (): colors => {
  let c = {
    from: "",
    via: "",
    to: "",
  };
  Object.keys(c).forEach((key) => (c[key] = randomHexColor()));
  return c;
};

const cardList = cards.map((item, index) => ({
  ...item,
  index,
  colors: getColors(),
}));
</script>

<style lang="scss">
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
.gradient-border-badge:before {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 100%;
  height: 100%;
  content: "";
  background-clip: content-box, border-box;
  background-origin: border-box;
}
.gradient-border-badge:before {
  border-radius: 9999px;
  background-image: linear-gradient(#fff, #fff),
    radial-gradient(circle at top left, #9867f0, #ed4e50);
  background-image: linear-gradient(#fff, #fff),
    radial-gradient(
      circle at top left,
      var(--mktg-accent-primary, #9867f0),
      var(--mktg-accent-secondary, #ed4e50)
    );
  border: 2px double transparent;
}
</style>

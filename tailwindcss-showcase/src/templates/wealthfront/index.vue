<template>
  <div class="w-full wealthfront bg-slate-950">
    <header
      class="h-16  w-screen   backdrop-blur text-white flex items-center justify-between px-6 sm:px-10 border-b border-slate-800 lg:px-16 shadow-sm fixed"
    >
      <div class="text-4xl flex items-center space-x-2">
        <svg
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-auto"
        >
          <g clip-path="url(#foyer-logo_svg__a)">
            <path
              d="M79.2 0H10.8C4.835 0 0 4.835 0 10.8v68.4C0 85.165 4.835 90 10.8 90h68.4C85.165 90 90 85.165 90 79.2V10.8C90 4.835 85.165 0 79.2 0Z"
              fill="url(#foyer-logo_svg__b)"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.59 20.05a2.7 2.7 0 0 1 3.82 0l9 9a2.7 2.7 0 0 1 0 3.82l-9 9a2.7 2.7 0 0 1-3.82-3.82l7.092-7.09-7.091-7.09a2.7 2.7 0 0 1 0-3.82Zm49 0a2.7 2.7 0 0 1 0 3.82l-7.091 7.09 7.09 7.09a2.7 2.7 0 1 1-3.818 3.82l-9-9a2.7 2.7 0 0 1 0-3.82l9-9a2.7 2.7 0 0 1 3.818 0ZM40.594 37.384a2.7 2.7 0 0 1 3.382 1.772c.101.324.343.578.915.78a3.807 3.807 0 0 0 1 .204c.033-.003.089-.008.162-.018.178-.025.423-.075.682-.171.506-.189.937-.494 1.19-1.072a2.7 2.7 0 1 1 4.948 2.164c-1.007 2.302-2.826 3.437-4.255 3.968a8.676 8.676 0 0 1-2.41.52 5.704 5.704 0 0 1-.261.01h-.045c-.002 0-.003 0-.003-2.7 0 2.7-.001 2.7-.002 2.7h-.043a5.948 5.948 0 0 1-.263-.01 9.199 9.199 0 0 1-2.51-.506c-1.452-.517-3.46-1.703-4.26-4.259a2.7 2.7 0 0 1 1.773-3.382Z"
              fill="#1E293B"
            ></path>
          </g>
          <defs>
            <radialGradient
              id="foyer-logo_svg__b"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(45) scale(127.279)"
            >
              <stop offset="0.576" stop-color="#FAFAF9"></stop>
              <stop offset="0.753" stop-color="#D5BAEC"></stop>
              <stop offset="1" stop-color="#7E22CE"></stop>
            </radialGradient>
            <clipPath id="foyer-logo_svg__a">
              <path fill="#fff" d="M0 0h90v90H0z"></path>
            </clipPath>
          </defs>
        </svg>
        <span class="font-seif text-4xl font-bold">MerLin</span>
      </div>
      <div class="space-x-6 hidden lg:flex text-lg">
        <span class="">Product Wiki</span>
        <span class="">Marketing Usecases</span>
        <span class="">Pricing</span>
      </div>
      <div class="text-xl font-semibold space-x-4 hidden sm:block">
        <button
          class="bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-xl px-4 py-2"
        >
          Try for Free</button
        ><button
          class="bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-xl px-4 py-2"
        >
          Login
        </button>
      </div>
      <div class="flex flex-col w-8 h-8 justify-around sm:hidden">
        <span class="bg-white rounded-full inline-block w-full h-[4px]"></span>
        <span class="bg-white rounded-full inline-block w-full h-[4px]"></span>
        <span class="bg-white rounded-full inline-block w-full h-[4px]"></span>
      </div>
    </header>
    <div class="pt-40  text-white text-4xl font-bold text-center">
       <p class="py-16">
        <a
          class="text-slate-500 rounded-lg border border-gray-500 px-3 py-2 text-lg hover:border-gray-300 hover:text-gray-300"
          >Merlin for Marketers</a
        >
      </p> 
       <div
        class="mx-auto px-4 md:px-0 md:max-w-[750px] font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-snug"
      >
        <p>Ctrl/⌘+M to create</p>
        <p>Facebook | ads</p>
        <p>in seconds with ChatGPT</p>
        <p class="py-16 text-base font-normal">
          ~25X cheaper than Jasper and other AI writing tools for the same
          number of words
        </p>
      </div> 
       <p
        class="inline-block align-middle p-[2px] bg-gradient-to-r hover:bg-gradient-to-l from-[#921dfb]/50 via-[#F334F2] to-[#ff0082]/50 rounded-lg"
      >
        <a
          href=""
          class="flex items-center space-x-2 p-4 bg-slate-950 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            xml:space="preserve"
            class="w-8 h-8"
          >
            <path
              fill="#FFF"
              d="M255.73 383.71c70.3 0 127.3-56.99 127.3-127.3s-56.99-127.3-127.3-127.3-127.3 56.99-127.3 127.3 56.99 127.3 127.3 127.3z"
            ></path>
            <linearGradient
              id="chrome-logo_svg__a"
              gradientUnits="userSpaceOnUse"
              x1="283.285"
              y1="18.901"
              x2="62.826"
              y2="400.747"
              gradientTransform="matrix(1 0 0 -1 0 514)"
            >
              <stop offset="0" style="stop-color: rgb(30, 142, 62)"></stop>
              <stop offset="1" style="stop-color: rgb(52, 168, 83)"></stop>
            </linearGradient>
            <path
              fill="url(#chrome-logo_svg__a)"
              d="M145.48 320.08 35.26 129.17a254.524 254.524 0 0 0 93.19 347.75A254.548 254.548 0 0 0 255.75 511l110.22-190.92v-.03a127.239 127.239 0 0 1-46.58 46.62c-19.35 11.18-41.3 17.07-63.65 17.07s-44.3-5.88-63.66-17.05a127.19 127.19 0 0 1-46.6-46.61z"
            ></path>
            <linearGradient
              id="chrome-logo_svg__b"
              gradientUnits="userSpaceOnUse"
              x1="218.59"
              y1="2.333"
              x2="439.049"
              y2="384.18"
              gradientTransform="matrix(1 0 0 -1 0 514)"
            >
              <stop offset="0" style="stop-color: rgb(252, 201, 52)"></stop>
              <stop offset="1" style="stop-color: rgb(251, 188, 4)"></stop>
            </linearGradient>
            <path
              fill="url(#chrome-logo_svg__b)"
              d="M365.96 320.08 255.74 510.99c44.69.01 88.59-11.75 127.29-34.1a254.52 254.52 0 0 0 93.13-347.76H255.72l-.03.02c22.35-.01 44.31 5.86 63.66 17.03a127.314 127.314 0 0 1 46.61 46.59 127.252 127.252 0 0 1 17.06 63.66c.01 22.34-5.88 44.29-17.06 63.65z"
            ></path>
            <path
              fill="#1A73E8"
              d="M255.73 357.21c55.66 0 100.78-45.12 100.78-100.78s-45.12-100.78-100.78-100.78-100.78 45.12-100.78 100.78 45.12 100.78 100.78 100.78z"
            ></path>
            <linearGradient
              id="chrome-logo_svg__c"
              gradientUnits="userSpaceOnUse"
              x1="35.259"
              y1="353.03"
              x2="476.177"
              y2="353.03"
              gradientTransform="matrix(1 0 0 -1 0 514)"
            >
              <stop offset="0" style="stop-color: rgb(217, 48, 37)"></stop>
              <stop offset="1" style="stop-color: rgb(234, 67, 53)"></stop>
            </linearGradient>
            <path
              fill="url(#chrome-logo_svg__c)"
              d="M255.73 129.14h220.45A254.472 254.472 0 0 0 383 35.95a254.524 254.524 0 0 0-347.74 93.21l110.22 190.92.03.02c-11.18-19.35-17.08-41.3-17.08-63.65s5.87-44.31 17.04-63.66a127.164 127.164 0 0 1 46.6-46.6 127.14 127.14 0 0 1 63.66-17.05z"
            ></path>
          </svg>
          <span class="text-xl"> Add To Chrome</span>
        </a>
      </p> 
       <div
        class="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg font-normal py-12 px-4 container mx-auto"
      >
        <div
          class="rounded-lg border border-slate-700 p-8 hover:bg-slate-800/30 hover:shadow-md hover:-translate-y-[2px] transition-all duration-300"
        >
          ✅ Generate blogs on trending topics in your niche
        </div>
        <div
          class="rounded-lg border border-slate-700 p-8 hover:bg-slate-800/30 hover:shadow-md hover:-translate-y-[2px] transition-all duration-300"
        >
          ✅ Generate blogs on trending topics in your niche
        </div>
        <div
          class="rounded-lg border border-slate-700 p-8 hover:bg-slate-800/30 hover:shadow-md hover:-translate-y-[2px] transition-all duration-300"
        >
          ✅ Generate blogs on trending topics in your niche
        </div>
      </div> 
       <div class="my-12">Why over 400K users choose us?</div>
      <div class="grid grid-cols-3 gap-4  container mx-auto  ">
        <div>
          <h2
            class="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#921dfb]/50 via-[#F334F2] to-[#ff0082]/50"
          >
            90%
          </h2>
          <p class="text-base font-normal   mt-2">
            Better UX to use ChatGPT for content on any website
          </p>
        </div>
        <div>
          <h2
            class="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#921dfb]/50 via-[#F334F2] to-[#ff0082]/50"
          >
            100%
          </h2>
          <p class="text-base font-normal  mt-2">
            Better UX to use ChatGPT for content on any website
          </p>
        </div>
        <div>
          <h2
            class="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#921dfb]/50 via-[#F334F2] to-[#ff0082]/50"
          >
            98%
          </h2>
          <p class="text-base font-normal mt-2">
            Better UX to use ChatGPT for content on any website
          </p>
        </div>
      </div> 

       <div class="px-4 sm:px-8 lg:px-40">
        <p class="text-5xl my-20">Try these 25+ free Marketing prompts</p>
        <div
          class="w-full bg-gradient-to-r hover:bg-gradient-to-l from-[#921dfb]/50 via-[#F334F2] to-[#ff0082]/50 p-[2px] rounded-2xl"
        >
          <div class="w-full bg-slate-900/90 rounded-2xl p-4 lg:p-8">
            <div class="grid grid-cols-3 gap-4 text-lg font-normal">
              <div
                class="bg-gray-700 hover:bg-gradient-to-l from-[#921dfb]/40 via-[#F334F2]/40 to-[#ff0082]/40 p-[1px] rounded"
              >
                <p
                  class="w-full h-full px-4 py-2 flex items-center bg-slate-900 hover:bg-slate-900/60 rounded"
                >
                  <svg
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                  >
                    <rect
                      x="3.377"
                      y="5.915"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="#F1F5F9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></rect>
                    <path
                      d="m3.377 7.915 9 6 9-6"
                      stroke="#F1F5F9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  Email Marketing
                </p>
              </div>
              <div
                class="bg-gray-700 hover:bg-gradient-to-l from-[#921dfb]/40 via-[#F334F2]/40 to-[#ff0082]/40 p-[1px] rounded"
              >
                <p
                  class="w-full h-full px-4 py-2 flex items-center bg-slate-900 hover:bg-slate-900/60 rounded"
                >
                  <svg
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                  >
                    <rect
                      x="3.377"
                      y="5.915"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="#F1F5F9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></rect>
                    <path
                      d="m3.377 7.915 9 6 9-6"
                      stroke="#F1F5F9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  Email Marketing
                </p>
              </div>
              <div
                class="bg-gray-700 hover:bg-gradient-to-l from-[#921dfb]/40 via-[#F334F2]/40 to-[#ff0082]/40 p-[1px] rounded"
              >
                <p
                  class="w-full h-full px-4 py-2 flex items-center bg-slate-900 hover:bg-slate-900/60 rounded"
                >
                  <svg
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                  >
                    <rect
                      x="3.377"
                      y="5.915"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="#F1F5F9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></rect>
                    <path
                      d="m3.377 7.915 9 6 9-6"
                      stroke="#F1F5F9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  Email Marketing
                </p>
              </div>
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg font-normal my-8"
            >
              <div
                class="rounded-lg border border-gray-700 bg-gray-900 p-4 lg:p-8"
              >
                <div class="flex space-x-4 items-center mb-4">
                  <span class="p-4 text-2xl bg-slate-700 rounded-md float-left"
                    >🎨</span
                  >
                  <h3 class="text-3xl line-clamp-1">Generate Email Ideas</h3>
                </div>
                <p>
                  Write 10 email ideas to promote new online course about How to
                  leverage LinkedIn for dream job.
                </p>
              </div>
              <div class="rounded-lg border border-gray-700 bg-gray-900 p-4">
                <div class="flex space-x-4 items-center mb-4">
                  <span class="p-4 text-2xl bg-slate-700 rounded-md float-left"
                    >🎨</span
                  >
                  <h3 class="text-3xl line-clamp-1">Generate Email Ideas</h3>
                </div>
                <p>
                  Write 10 email ideas to promote new online course about How to
                  leverage LinkedIn for dream job.
                </p>
              </div>
              <div
                class="rounded-lg border border-gray-700 bg-gray-900 p-4 lg:p-8"
              >
                <div class="flex space-x-4 items-center mb-4">
                  <span class="p-4 text-2xl bg-slate-700 rounded-md float-left"
                    >🎨</span
                  >
                  <h3 class="text-3xl line-clamp-1">Generate Email Ideas</h3>
                </div>
                <p>
                  Write 10 email ideas to promote new online course about How to
                  leverage LinkedIn for dream job.
                </p>
              </div>
              <div
                class="rounded-lg border border-gray-700 bg-gray-900 p-4 lg:p-8"
              >
                <div class="flex space-x-4 items-center mb-4">
                  <span class="p-4 text-2xl bg-slate-700 rounded-md float-left"
                    >🎨</span
                  >
                  <h3 class="text-3xl line-clamp-1">Generate Email Ideas</h3>
                </div>
                <p>
                  Write 10 email ideas to promote new online course about How to
                  leverage LinkedIn for dream job.
                </p>
              </div>
              <div
                class="rounded-lg border border-gray-700 bg-gray-900 p-4 lg:p-8"
              >
                <div class="flex space-x-4 items-center mb-4">
                  <span class="p-4 text-2xl bg-slate-700 rounded-md float-left"
                    >🎨</span
                  >
                  <h3 class="text-3xl line-clamp-1">Generate Email Ideas</h3>
                </div>
                <p>
                  Write 10 email ideas to promote new online course about How to
                  leverage LinkedIn for dream job.
                </p>
              </div>
              <div
                class="rounded-lg border border-gray-700 bg-gray-900 p-4 lg:p-8"
              >
                <div class="flex space-x-4 items-center mb-4">
                  <span class="p-4 text-2xl bg-slate-700 rounded-md float-left"
                    >🎨</span
                  >
                  <h3 class="text-3xl line-clamp-1">Generate Email Ideas</h3>
                </div>
                <p>
                  Write 10 email ideas to promote new online course about How to
                  leverage LinkedIn for dream job.
                </p>
              </div>
              <div
                class="rounded-lg border border-gray-700 bg-gray-900 p-4 lg:p-8"
              >
                <div class="flex space-x-4 items-center mb-4">
                  <span class="p-4 text-2xl bg-slate-700 rounded-md float-left"
                    >🎨</span
                  >
                  <h3 class="text-3xl line-clamp-1">Generate Email Ideas</h3>
                </div>
                <p>
                  Write 10 email ideas to promote new online course about How to
                  leverage LinkedIn for dream job.
                </p>
              </div>
              <div
                class="rounded-lg border border-gray-700 bg-gray-900 p-4 lg:p-8"
              >
                <div class="flex space-x-4 items-center mb-4">
                  <span class="p-4 text-2xl bg-slate-700 rounded-md float-left"
                    >🎨</span
                  >
                  <h3 class="text-3xl line-clamp-1">Generate Email Ideas</h3>
                </div>
                <p>
                  Write 10 email ideas to promote new online course about How to
                  leverage LinkedIn for dream job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
       <div class="container mx-auto">
        <Logos />
      </div> 
      <div
        class="relative border-y border-slate-700 px-4 lg:px-20 py-10 bg-slate-900/50  flex justify-around flex-col md:flex-row md:justify-around"
      >
         <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute top-0 left-0  h-full w-full pointer-events-none z-10"
        >
          <g
            style="mix-blend-mode: hard-light"
            opacity="0.8"
            filter="url(#gradient-mesh-footer_svg__a)"
          >
            <path
              d="m23.678 208.877 2.077-119.226L145.558 0l60.564 107.513-112.764 51.414-69.68 49.95Z"
              fill="#FF00B8"
            ></path>
            <path
              d="M206.122 107.513 345 100.988l-76.792 157.298-40.757-7.48-134.093-91.879 112.764-51.414Z"
              fill="#921DFB"
            ></path>
            <path
              d="m227.451 250.806 21.699 56.348-82.185 2.172-71.222 5.777-2.385-156.176 134.093 91.879Z"
              fill="#FDE50E"
            ></path>
            <path
              d="M10.519 331-29 276.097l52.678-67.22 69.68-49.95 2.385 156.176L10.519 331Z"
              fill="#FDE50E"
            ></path>
          </g>
          <defs>
            <filter
              id="gradient-mesh-footer_svg__a"
              x="-129"
              y="-100"
              width="574"
              height="531"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_4247_36278"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg> 
       <div class="w-full md:w-80  md:text-start ">
        <div class="text-4xl flex items-center space-x-2  ">
          <svg
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-auto z-20"
          >
            <g clip-path="url(#foyer-logo_svg__a)">
              <path
                d="M79.2 0H10.8C4.835 0 0 4.835 0 10.8v68.4C0 85.165 4.835 90 10.8 90h68.4C85.165 90 90 85.165 90 79.2V10.8C90 4.835 85.165 0 79.2 0Z"
                fill="url(#foyer-logo_svg__b)"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.59 20.05a2.7 2.7 0 0 1 3.82 0l9 9a2.7 2.7 0 0 1 0 3.82l-9 9a2.7 2.7 0 0 1-3.82-3.82l7.092-7.09-7.091-7.09a2.7 2.7 0 0 1 0-3.82Zm49 0a2.7 2.7 0 0 1 0 3.82l-7.091 7.09 7.09 7.09a2.7 2.7 0 1 1-3.818 3.82l-9-9a2.7 2.7 0 0 1 0-3.82l9-9a2.7 2.7 0 0 1 3.818 0ZM40.594 37.384a2.7 2.7 0 0 1 3.382 1.772c.101.324.343.578.915.78a3.807 3.807 0 0 0 1 .204c.033-.003.089-.008.162-.018.178-.025.423-.075.682-.171.506-.189.937-.494 1.19-1.072a2.7 2.7 0 1 1 4.948 2.164c-1.007 2.302-2.826 3.437-4.255 3.968a8.676 8.676 0 0 1-2.41.52 5.704 5.704 0 0 1-.261.01h-.045c-.002 0-.003 0-.003-2.7 0 2.7-.001 2.7-.002 2.7h-.043a5.948 5.948 0 0 1-.263-.01 9.199 9.199 0 0 1-2.51-.506c-1.452-.517-3.46-1.703-4.26-4.259a2.7 2.7 0 0 1 1.773-3.382Z"
                fill="#1E293B"
              ></path>
            </g>
            <defs>
              <radialGradient
                id="foyer-logo_svg__b"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(45) scale(127.279)"
              >
                <stop offset="0.576" stop-color="#FAFAF9"></stop>
                <stop offset="0.753" stop-color="#D5BAEC"></stop>
                <stop offset="1" stop-color="#7E22CE"></stop>
              </radialGradient>
              <clipPath id="foyer-logo_svg__a">
                <path fill="#fff" d="M0 0h90v90H0z"></path>
              </clipPath>
            </defs>
          </svg>
          <span class="font-seif text-4xl text-white font-bold z-20">MerLin</span>
        </div>
        <p class="text-xl font-normal text-start mt-4 z-50 ">Open AI’s ChatGPT powered extension to use anywhere!</p>
       </div>
       <ul class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-10 md:mt-0 text-base font-normal">
        <li>Write for us</li>
        <li>Write for us</li>
        <li>Write for us</li>
        <li>Write for us</li>
        <li>Write for us</li>
        <li>Write for us</li>
        <li>Write for us</li>
        <li>Write for us</li>
        <li>Write for us</li>
        <li>Write for us</li>
        <li>Write for us</li>
        <li>Write for us</li>
       </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Logos from "./components/Logos.vue";
</script>

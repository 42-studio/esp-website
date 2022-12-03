<script setup>
import VueWriter from 'vue-writer'
import { useIntersectionObserver } from '../composables/IntersectionObserver.js'

const observables = ref(null)
useIntersectionObserver(observables)

const typerArray = ['Procurement...', 'Inventory...', 'Utilisation...', 'Controls...', 'Incidents...', 'Intel...']
</script>

<template>

  <section class="relative" ref="observables">

    <div>

      <div class="w-6/12 mx-auto md:mr-0 animated delay-3s zoomIn">

        <svg class="mx-auto breath-slate" width="100%" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
             style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1;">
          <path
              d="M302.43,512.797L511.999,722.366L571.519,662.847L571.519,829.5L885.888,515.009C886.669,514.228 887.107,513.169 887.107,512.064C887.107,510.96 886.669,509.901 885.888,509.12L527.748,150.98L527.748,24.005L1008.55,504.687C1010.51,506.643 1011.61,509.297 1011.61,512.064C1011.61,514.832 1010.51,517.485 1008.55,519.442L512,1016L452.481,956.476L452.48,777.917L452.479,777.918L184.423,513.804C183.958,513.346 183.697,512.72 183.699,512.067C183.7,511.414 183.964,510.789 184.432,510.334L511.999,190.66L827.764,510.372C828.689,511.309 828.684,512.816 827.754,513.746L603.262,738.238L603.262,631.103L721.594,512.771C721.781,512.583 721.887,512.329 721.887,512.064C721.887,511.799 721.781,511.545 721.594,511.358L511.999,301.763L302.43,511.332C302.235,511.526 302.126,511.79 302.126,512.064C302.126,512.339 302.235,512.603 302.43,512.797Z"
              style="fill:none;stroke:url(#esp-icon-gradient);stroke-width:4px;" />
              <path
                  d="M15.446,519.442L420.735,924.732L420.735,797.758C420.735,797.758 168.199,545.222 137.987,515.009C136.544,513.567 136.381,511.329 137.498,509.707L496.127,150.98L496.127,24.005C496.127,24.005 76.517,443.615 15.446,504.687C11.371,508.761 11.371,515.368 15.446,519.442Z"
                  style="fill:url(#esp-icon-gradient);stroke:none;stroke-width:0;" />
              <defs>
            <linearGradient id="esp-icon-gradient" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(941.625,1537,-793.807,1537,79.5613,124.359)">
              <stop offset="0"  style="stop-color: #5093ea" />
              <stop offset="1" style="stop-color: #e11b71" />
            </linearGradient>
          </defs>
        </svg>

      </div>

    </div>

    <div class="flex flex-col lg:flex-row">

      <div class="flex flex-col lg:w-1/4 lg:mt-[-40%]">

        <div class="shrink">

          <div class="inline-block mb-8 rounded-full p-2 px-4 text-sm ring-1 ring-slate-300/10 text-slate-200 animated delay-1s fadeInDown">
            It's Time To
          </div>

          <div class=" max-w-2xl animated delay-2s fadeInLeft">

            <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
              Revolutionize<br />Security<br />Investment
            </h1>

            <p class="mt-6 text-lg leading-8 text-slate-300">
              What if you continually fused security <vue-writer :array="typerArray" class="inline-block font-bold"/><span class="animated flash infinite -ml-1">|</span><br/>
              with security threats?
            </p>
            <p class="mt-6 text-lg leading-8 text-slate-300">
              How would that transform enterprise security strategy and investment?
            </p>

            <div class="mt-8">

              <nuxt-link href="/schedule-a-demo" class="button-primary animated delay-5s pulse">
                Lets Talk
                <span class="text-violet-200 ml-2" aria-hidden="true">&rarr;</span>
              </nuxt-link>

              <!--            <a href="#" class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-slate-100 ring-1 ring-slate-300/10 hover:ring-slate-100/20">-->
              <!--              Live demo-->
              <!--              <span class="text-slate-400" aria-hidden="true">&rarr;</span>-->
              <!--            </a>-->

            </div>

          </div>

        </div>

        <div class="grow">

          <div class="my-5 ml-[4rem] mr-5 intersection slow pathing-height">
            <elements-path-bottom-left class="intersection slower pathing-width" />
          </div>

        </div>

      </div>

      <div class="relative lg:pl-32">

        <div class="animated fadeInRight delay-4s">
          <div class="inline-block rounded ring ring-gray-400 ring-opacity-5 overflow-clip max-h-[65vh] mx-auto my-10 lg:my-[5vh] w-full lg:w-[75vw]" style="max-width: 1900px;">
            <img src="@/assets/img/previews/CapabilityCards.jpg" class="hero-preview" alt="ESProfiler Capability Views" />
          </div>
        </div>

      </div>

    </div>

  </section>

</template>

<script setup>

import { SquaresPlusIcon, NewspaperIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'

</script>

<template>

  <div class="h-[15vh] mb-5">
    <div class="v-pathway mx-auto"></div>
  </div>

  <div class="relative -mt-4 lg:mt-8">

    <div class="w-8/12 lg:w-6/12 mx-auto text-center">

      <div class="inline-block mb-8 rounded-full p-2 px-4 text-sm ring-1 ring-slate-300/10 text-slate-200">
        Enterprise Ready
      </div>

      <h2 class="text-3xl sm:text-5xl font-bold tracking-tight">
        Created with Enterprises for Enterprises
      </h2>

      <p class="my-8 text-lg leading-8 text-slate-300">
        ESProfiler has been developed with some of the largest global enterprises in the strictest sectors.
        As a result, ESProfiler offers customers native enterprise-grade features. Including dedicated compute, storage,
        auditing, 2FA, enterprise sign-on and full extensibility through advanced APIs.
      </p>

    </div>

    <div class="flex flex-wrap lg:flex-nowrap space-y-20 lg:space-y-0 lg:space-x-20 text pt-8 text-center lg:text-left justify-center">

      <div class="w-8/12 lg:w-4/12">

        <div class="shrink inline-block rounded-full w-20 h-20 text-sm ring-1 ring-slate-300/10 text-slate-200">
          <squares-plus-icon class="stroke-1 w-[65%] h-[65%] m-[17.5%]" />
        </div>

        <h3 class="text-2xl font-bold tracking-tight sm:text-3xl my-8">
          Threat-centric<br/>Thinking
        </h3>

        <p>
          ESProfiler promotes threat-centric thinking to understanding a business's security posture “think like an attacker to stop an attacker”.
          For the most effective defence we must align our way of thinking.
        </p>

      </div>

      <div class="w-8/12 lg:w-4/12">

        <div class="shrink inline-block rounded-full w-20 h-20 text-sm ring-1 ring-slate-300/10 text-slate-200">
          <newspaper-icon class="stroke-1 w-[65%] h-[65%] m-[17.5%]" />
        </div>

        <h3 class="text-2xl font-bold tracking-tight sm:text-3xl my-8">
          Industry<br/>Recognised
        </h3>

        <p>
          ESP aligns your data with industry-recognized threat-centric attack frameworks by providing a powerful toolset for strategically mapping the coverage and divestment of security assets.
        </p>

      </div>

      <div class="w-8/12 lg:w-4/12">

        <div class="shrink inline-block rounded-full w-20 h-20 text-sm ring-1 ring-slate-300/10 text-slate-200">
          <globe-alt-icon class="stroke-1 w-[65%] h-[65%] m-[17.5%]" />
        </div>

        <h3 class="text-2xl font-bold tracking-tight sm:text-3xl my-8">
          Advanced<br/>Coverage Model
        </h3>

        <p>
          Extending far beyond traditional coverage, our Control Dependency Models capture the defensive logical placement, function, platforms covered and technologies dependencies.
        </p>

      </div>

    </div>

  </div>

  <div class="relative max-w-10/12 md:max-w-6/12 mx-auto mt-[6rem] text-center">
    <nuxt-link href="/schedule-a-demo" class="button-primary">Schedule a Demo</nuxt-link>
  </div>

</template>

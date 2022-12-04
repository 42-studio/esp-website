<script setup>

import { SquaresPlusIcon, NewspaperIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'
import { useIntersectionObserver } from '../composables/IntersectionObserver'

const observables = ref(null)
useIntersectionObserver(observables)

</script>

<template>

  <div ref="observables">

    <div class="h-[15vh] mb-5">
      <div class="intersection v-pathway slow delay-1s pathing-height mx-auto" />
    </div>

    <div class="relative -mt-4 lg:mt-8">

      <div class="w-8/12 lg:w-6/12 mx-auto text-center intersection fadeInDown delay-2s">

        <div class="inline-block my-8 rounded-full p-2 px-4 text-sm ring-1 ring-slate-300/10 text-slate-200">
          Enterprise Ready
        </div>

        <h2 class="text-3xl sm:text-5xl font-bold tracking-tight">
          Created with Enterprises for Enterprises
        </h2>

        <p class="my-8 text-lg leading-8 text-slate-300 text-justify lg:text-center">
          ESProfiler was developed in collaboration with some of the world's largest and most stringent enterprises.
          This has resulted in a platform that offers native enterprise-grade features, such as dedicated
          compute/storage, auditing, 2FA, enterprise sign-on, and full extensibility through advanced APIs.
        </p>

      </div>

      <div class="flex flex-wrap lg:flex-nowrap space-y-20 lg:space-y-0 lg:space-x-20 text pt-8 text-center lg:text-left justify-center">

        <div class="intersection fadeInLeft w-8/12 lg:w-4/12">

          <div class="shrink inline-block rounded-full w-20 h-20 text-sm ring-1 ring-slate-300/10 text-slate-200">
            <squares-plus-icon class="stroke-1 w-[65%] h-[65%] m-[17.5%]" />
          </div>

          <h3 class="text-2xl font-bold tracking-tight sm:text-3xl my-8">
            Holistic<br>Approach
          </h3>

          <p class="text-justify lg:text-left">
            ESProfiler promotes threat-centric thinking to understanding a business's security posture “think like an attacker to stop an attacker”.
            For the most effective defence we must align our way of thinking.
          </p>

        </div>

        <div class="intersection fadeInLeft delay-1s w-8/12 lg:w-4/12">

          <div class="shrink inline-block rounded-full w-20 h-20 text-sm ring-1 ring-slate-300/10 text-slate-200">
            <newspaper-icon class="stroke-1 w-[65%] h-[65%] m-[17.5%]" />
          </div>

          <h3 class="text-2xl font-bold tracking-tight sm:text-3xl my-8">
            Capability<br>Exchange
          </h3>

          <p class="text-justify lg:text-left">
            Integrating directly with our Capability Exchange, a living catalogue of security products, and features
            with associated capabilities. Feature and capability updates are synchronized
            directly with product owners, promoting better adoption and value from your security products.
          </p>

        </div>

        <div class="intersection fadeInLeft delay-2s w-8/12 lg:w-4/12">

          <div class="shrink inline-block rounded-full w-20 h-20 text-sm ring-1 ring-slate-300/10 text-slate-200">
            <globe-alt-icon class="stroke-1 w-[65%] h-[65%] m-[17.5%]" />
          </div>

          <h3 class="text-2xl font-bold tracking-tight sm:text-3xl my-8">
            Unlimited<br />Integrations
          </h3>

          <p class="text-justify lg:text-left">
            An enterprise-ready integration engine unlocks seamless automation and integration across cloud and
            on-premise environments. Choose from a range of pre-built integrations or build your own with inbuilt
            support for the latest JavaScript standard.
          </p>

        </div>

      </div>

    </div>

    <div class="relative max-w-10/12 md:max-w-6/12 mx-auto mt-[6rem] text-center intersection fadeInUp">
      <nuxt-link href="/schedule-a-demo" class="button-primary">Schedule a Demo</nuxt-link>
    </div>

  </div>

</template>

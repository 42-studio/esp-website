<script setup>

import { useIntersectionObserver } from '../composables/IntersectionObserver'

const observables = ref(null)
useIntersectionObserver(observables)

</script>

<template>

  <div ref="observables" class="relative max-w-10/12 md:max-w-6/12 mx-auto mt-8 text-center">

    <div class="intersection fadeInDown">
      <div class="inline-block mb-8 rounded-full p-2 px-4 text-sm ring-1 ring-slate-300/10 text-slate-200">
        The Platform
      </div>
    </div>

    <div class="intersection zoomInDown">
      <img src="https://assets.esprofiler.com/esprofiler/logos/ESP-LOGO-V-DARK.svg" class="mx-[20vw]" />
    </div>

    <div class="mx-auto md:w-8/12 mb-20 intersection fadeIn">
      <p class="my-8 text-lg leading-8 text-slate-300">
        A platform for continuous assurance of your security investments against threat-centric frameworks including
        MITRE ATT&CK®. Utilizing our advanced collider architecture, we combine what your security assets provide,
        how much they cost, and how they are performing. Allowing you to determine where to invest for
        maximum risk reduction.
      </p>
    </div>

  </div>

</template>

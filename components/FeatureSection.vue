<template>

  <div class="relative">

    <div class="min-h-full absolute isolate blur-3xl inset-x-0 top-[25vh] -z-10 transform-gpu">
      <svg class="relative left-[calc(50%+3rem)] max-w-none -translate-x-1/2" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".1"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
        <defs>
          <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="flex flex-col container">

      <div class="flex">

        <div class="lg:w-1/4"/>

        <div class="lg:w-1/2">

          <div class="inline-block mb-8 rounded-full p-2 px-4 text-sm ring-1 ring-slate-300/10 text-slate-200">
            Why?
          </div>

          <div class="max-w-2xl">

            <h2 class="text-2xl font-bold tracking-tight sm:text-5xl">
              Security investment is broken
            </h2>

            <p class="mt-6 text-lg leading-8 text-slate-300">
              Enterprises are spending more and deploying more, but the same issues still exist.
              Breaches are still occurring as a result!
            </p>

          </div>

        </div>

        <div />

      </div>

      <div class="mt-20 max-w-6xl m-auto">
        <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
              <component :is="feature.icon" class="h-8 w-8" aria-hidden="true" />
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8 text-slate-100">{{ feature.name }}</p>
              <p class="mt-2 text-base leading-7 text-slate-300">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script setup>
import { BoltSlashIcon, ShieldExclamationIcon, ScaleIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Security Gaps',
    description:
        'Visibility of security gaps is unclear, spreadsheets are not informative, data formats are inconsistent, business silos keeps data divided.',
    icon: ShieldExclamationIcon
  },
  {
    name: 'Misconfiguration',
    description:
        'Details of product requirements can be illusive, the lack of a detailed cataloged with service and software dependencies means no implementation checklist.',
    icon: WrenchScrewdriverIcon
  },
  {
    name: 'Unused Capability',
    description:
        'Without an inventory data set that you can operationalise, it is almost impossible to keep track of time to implementation leading to products being shelved.',
    icon: BoltSlashIcon
  },
  {
    name: 'Investment Overlap',
    description:
        'A market that does not align in a meaningful and standardized way makes it very difficult to identify overlap when in investing in new capability.',
    icon: ScaleIcon
  }
]
</script>

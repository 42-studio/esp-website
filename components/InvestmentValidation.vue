<script setup>

import { ClipboardDocumentCheckIcon, ClipboardDocumentListIcon, ArrowSmallDownIcon } from '@heroicons/vue/24/outline'

</script>

<template>

  <div class="relative max-w-6xl mx-auto mt-8">

    <div class="h-[15vh] pb-5">
      <div class="v-pathway mx-auto" />
    </div>

    <div class="text-center mb-10">

      <div class="shrink inline-block rounded-full p-2 px-4 text-sm ring-1 ring-slate-300/10 text-slate-200">
        The Questions?
      </div>

    </div>

    <div class="w-6/12 mx-auto text-center">

      <h2 class="text-2xl font-bold tracking-tight sm:text-5xl">
        Continuous Security
        Investment Validation
      </h2>

      <p class="m-8 text-lg leading-8 text-slate-300">
        ESProfiler empowers security leaders to continually answer five powerful questions & make decisions with confidence.
      </p>

    </div>

    <div class="hidden lg:block">

      <div class="flex h-[15vh] w-6/12 mr-auto">

        <div class="inline-block w-6/12" />

        <div class="relative inline-block w-6/12 overflow-clip my-[-2px]">
          <path-bottom-right  />
        </div>

      </div>

      <div class="flex h-[15vh] w-6/12 mr-auto">

        <div class="inline-block w-6/12 pl-6">
          <div class="relative h-full overflow-clip my-[-2px]">
            <path-top-left />
          </div>
        </div>

        <div class="inline-block w-6/12" />

      </div>

    </div>

    <div class="lg:hidden h-[15vh]">
      <div class="v-pathway mx-auto" />
    </div>

    <validation-section class="mt-5" :icon="ClipboardDocumentCheckIcon" title="What do we own?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        Today's security products don't just reside in security teams. Multiple business units utilising independent processes and systems make it hard to ascertain what security products an enterprise owns and the cost.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        ESPROFILER embeds into the enterprise procurement process to continually track security-related contracts. Contracts are indexed using an advanced security-aware search & analytics engine, providing a clear lens over what products the enterprise owns when they expire and how much they cost.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Fusing contractual data with deep security understanding unlocks immediate financial and inventory insight empowering C-level strategy.
      </p>

    </validation-section>

    <validation-section :icon="ClipboardDocumentListIcon" title="What should it do?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        Understanding what security products do and quantifying their benefit is almost impossible in a market lacking standardisation. This ripples through enterprises, resulting in investment overlap and security portfolios that fail to meet security requirements.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        ESPROFILER uses an industry-leading model to quantify what security products do with feature detail against how attackers operate. Building on industry-recognised frameworks such as MITRE ATT&CK and NIST to operationalise threat-informed defence in the enterprise.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Fusing security controls created by security teams with capabilities defined by our model produces a comprehensive picture of what security investments should do from the threats an enterprise faces.
      </p>

    </validation-section>

    <validation-section :icon="ClipboardDocumentListIcon" title="What is deployed?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie.
      </p>

    </validation-section>

    <validation-section :icon="ClipboardDocumentListIcon" title="Are there Gaps / Overlaps?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie.
      </p>

    </validation-section>

    <validation-section :icon="ClipboardDocumentListIcon" title="Is it working?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie.
      </p>

    </validation-section>

    <div class="mb-4">

      <div class="shrink inline-block rounded-full w-14 h-14 text-sm ring-1 ring-slate-300/10 text-slate-200">
        <arrow-small-down-icon class="stroke-1 w-[65%] h-[65%] m-[17.5%]" />
      </div>

    </div>

    <div class="flex h-[15vh] mr-auto">

      <div class="inline-block w-3/12 overflow-clip my-[-2px] mr-auto">
        <div class="relative h-full pl-6">
          <path-bottom-left />
        </div>
      </div>

    </div>

    <div class="flex h-[15vh] mr-auto">

      <div class="inline-block w-3/12 overflow-clip" />

      <div class="inline-block w-3/12 mr-auto overflow-clip my-[-2px]">
        <div class="relative h-full">
          <path-top-right />
        </div>
      </div>

    </div>

  </div>

</template>

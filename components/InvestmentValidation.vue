<script setup>

import { ClipboardDocumentCheckIcon, ClipboardDocumentListIcon, ArrowSmallDownIcon } from '@heroicons/vue/24/outline'
import { useIntersectionObserver } from '../composables/IntersectionObserver'

const observables = ref(null)
useIntersectionObserver(observables)

</script>

<template>

  <div class="relative max-w-6xl mx-auto mt-8" ref="observables">

    <div class="h-[15vh] pb-5">
      <div class="intersection v-pathway slow pathing-height mx-auto" />
    </div>

    <div class="intersection fadeInDown">

      <div class="text-center mb-10">

        <div class="shrink inline-block rounded-full p-2 px-4 text-sm ring-1 ring-slate-300/10 text-slate-200">
          The Solution!
        </div>

      </div>

      <div class="lg:w-6/12 mx-auto text-center">

        <h2 class="text-2xl font-bold tracking-tight sm:text-5xl">
          Continuous Security<br/>
          Investment Validation
        </h2>

        <p class="m-8 text-lg leading-8 text-slate-300">
          ESProfiler is a platform that empowers security leaders to continually answer five powerful questions and make decisions with confidence.
        </p>

      </div>

    </div>

    <div class="hidden overflow-clip lg:block intersection slow zoomIn">

      <div class="flex h-[15vh] w-6/12 mr-auto">

        <div class="inline-block w-6/12" />

        <div class="inline-block w-6/12 my-[-2px]">
            <elements-path-bottom-right />
        </div>

      </div>

      <div class="flex h-[15vh] w-6/12 mr-auto">

        <div class="inline-block w-6/12 pl-6">
          <div class="relative h-full my-[-2px]">
            <elements-path-top-left />
          </div>
        </div>

        <div class="inline-block w-6/12" />

      </div>

    </div>

    <div class="lg:hidden h-[15vh]">
      <div class="v-pathway mx-auto" />
    </div>

    <elements-validation-section class="mt-5 intersection fadeInDown" :icon="ClipboardDocumentCheckIcon" title="What do we own?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        Today's security products don't just reside in your security teams. Multiple business units utilising
        independent processes and systems make it hard to ascertain what security products your enterprise
        owns and the cost.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        ESProfiler embeds into your enterprise procurement process to continually track security-related contracts.
        Contracts are indexed using an advanced security-aware search & analytics engine, providing a clear lens over
        what products your enterprise owns, when they expire and how much they cost.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Fusing contractual data with deep security understanding unlocks immediate financial and inventory insight
        empowering C-level strategy.
      </p>

    </elements-validation-section>

    <elements-validation-section class="intersection fadeInDown" :icon="ClipboardDocumentListIcon" title="What should it do?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        Understanding what your security products do and quantifying their benefit is almost impossible in a market
        lacking standardisation. This ripples through most enterprises, resulting in investment overlap and security
        portfolios that often fail to meet security requirements.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        ESProfiler uses an industry-leading model to quantify what your security products do with feature-level detail
        against how attackers operate. Building on industry-recognised frameworks such as MITRE ATT&CK and NIST to
        operationalise threat-informed defence in your enterprise.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Fusing security controls created by security teams with capabilities defined by ESProfilers model produces a
        comprehensive picture of what security investments should do from the threats your enterprise faces.
      </p>

    </elements-validation-section>

    <elements-validation-section class="intersection fadeInDown" :icon="ClipboardDocumentListIcon" title="What is deployed?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        There is a disconnect between the security capability enterprises acquire and the capability they subsequently
        deploy. This issue causes hidden waste from budgets and incidents from poor security capability utilisation.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        ESProfiler relates product features to security capability. Blending this data with automated usage assertations
        from your product owners enables ESProfiler to highlight unused products/features with security
        implications and financial loss.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Continually showing the delta between security capability acquired and security capability achieved on the
        ground enables security leaders to realise more value from security assets.
      </p>

    </elements-validation-section>

    <elements-validation-section class="intersection fadeInDown" :icon="ClipboardDocumentListIcon" title="Where are our gaps & overlaps?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        Identifying your security gaps and investment overlap is near impossible when you don't know what security
        products you own, what capability they provide, and what you have deployed.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Combining the information answered from each question enables ESProfiler to build a clear picture of what you
        own, what you have deployed and your capability against threats. ESProfilers analytics and visualisation engine
        uses this information to display actionable insight into your security gaps and investment overlap.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        With a deep knowledge of what's powering your security posture,  ESProfiler enables scenario-based modelling of
        product investment and divestment against threats unlocking the next level of strategy and spend optimisation.
      </p>

    </elements-validation-section>

    <elements-validation-section class="intersection fadeInDown" :icon="ClipboardDocumentListIcon" title="Is it working & relevant?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        With your threat actors continuously evolving, your enterprise faces a continual flow of security incidents.
        However, with unclear definitions of what security products should do, understanding if your security
        investment is working and is continually relevant is challenging.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        ESProfiler combines approaches to understand if your security investments are working and relevant. By embedding
        into your post-incident review process and breach attack simulations, ESProfiler links the language of how an
        incident happened to which parts of your investment should have done something about it. Fusing this data with
        threat intelligence provides a holistic view of what's working and relevant, enabling continuous guidance in
        security strategy and investment.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Quantifying what your security should be doing with what's happening in your enterprise and wider industry
        enables continuous threat-driven strategy and investment guidance.
      </p>

    </elements-validation-section>

    <div class="mb-4 intersection fadeInDown">

      <div class="shrink inline-block rounded-full w-14 h-14 text-sm ring-1 ring-slate-300/10 text-slate-200">
        <arrow-small-down-icon class="stroke-1 w-[65%] h-[65%] m-[17.5%]" />
      </div>

    </div>

    <div class="intersection zoomIn">

      <div class="flex mr-auto">

        <div class="inline-block w-5/12 lg:w-3/12 my-[-2px] mr-auto pr-8 lg:pr-0">
          <div class="pl-6 h-[18vh]">
            <elements-path-bottom-left />
          </div>
        </div>

      </div>

      <div class="mr-auto hidden lg:flex">

        <div class="inline-block w-3/12" />

        <div class="inline-block w-3/12 mr-auto my-[-2px]">
          <elements-path-top-right class="aspect-square" />
        </div>

      </div>

    </div>

  </div>

</template>

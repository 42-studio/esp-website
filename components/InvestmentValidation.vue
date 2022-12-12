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
          ESProfiler is a CSIV Platform that empowers security leaders to continually answer five powerful questions and make decisions with confidence.
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

    <elements-validation-section class="mt-5 intersection fadeInRight" :icon="ClipboardDocumentCheckIcon" title="What do we own?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        Today's security products are often acquired and used by multiple business units, each with their own processes
        and systems. This can make it difficult to keep track of what security products your enterprise owns and the
        cost associated with them.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        ESProfiler solves this problem by embedding into your enterprise procurement process to continually track
        security-related contracts. Contracts are indexed using an advanced security-aware search and analytics engine,
        providing a clear view of what products your enterprise owns, when they expire, and how much they cost.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        Fusing contractual data with deep security understanding unlocks immediate financial and inventory insights,
        empowering C-level strategy.
      </p>

    </elements-validation-section>

    <elements-validation-section class="intersection fadeInRight" :icon="ClipboardDocumentListIcon" title="What should it do?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        In a market lacking standardization, it is almost impossible to understand what your security products do and
        quantify their benefits. This can lead to investment overlap and security portfolios that often fail to meet
        security requirements.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        ESProfiler uses an industry-leading model to quantify what your security products do with feature-level detail
        against how attackers operate. This is based on industry-recognized frameworks such as MITRE ATT&CK and NIST to
        operationalise threat-informed strategy in your enterprise.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        By combining security controls created by your security teams with capabilities defined by ESProfiler's model,
        you can gain a comprehensive and actionable understanding of what your security investments should do against
        the threats your enterprise faces. This allows you to make informed and confident decisions about your security
        portfolio and ensure that it effectively meets your needs.
      </p>

    </elements-validation-section>

    <elements-validation-section class="intersection fadeInRight" :icon="ClipboardDocumentListIcon" title="What is deployed?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        The disconnect between the security capabilities that enterprises acquire and the capabilities they actually
        deploy leads to hidden waste in budgets and incidents caused by poor security capability utilization.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        ESProfiler relates product features to security capabilities and blends this data with automated usage
        assertions from product owners. This allows ESProfiler to identify unused products and features
        with security implications and budget waste.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        By continually showcasing the difference between acquired and achieved security capabilities, security leaders
        can get more value from their security assets.
      </p>

    </elements-validation-section>

    <elements-validation-section class="intersection fadeInRight" :icon="ClipboardDocumentListIcon" title="Where are our gaps & overlaps?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        Identifying gaps in your security and overlap in your investments can be impossible when you don't know what
        security products you own, what capabilities they provide, and what you have deployed.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        ESProfiler solves this problem by combining information from each of these questions to create a clear picture
        of your security products, deployed capabilities, and overall security posture. The analytics and visualization
        engine in ESProfiler uses this information to provide actionable insights into your security gaps and
        investment overlap.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        With a deep understanding of what's powering your security posture, ESProfiler allows you to model different
        scenarios of product investment and divestment against threats, unlocking the next level of strategy
        and spend optimization.
      </p>

    </elements-validation-section>

    <elements-validation-section class="intersection fadeInRight" :icon="ClipboardDocumentListIcon" title="Is it working & relevant?">

      <p class="my-8 text-lg leading-8 text-slate-300">
        As your threat actors evolve, your enterprise faces a continual flow of security incidents.
        However, without clear definitions of what your security products should do, it can be challenging to understand
        if your security investment is effective and remains relevant.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        ESProfiler addresses this problem by combining multiple approaches to determine if your security investments are
        working and relevant. By integrating into your post-incident review process and breach attack simulations,
        ESProfiler links the language used to describe an incident to the parts of your investment that should have
        provided the capabilities to address it. By combining this data with threat intelligence,
        ESProfiler provides a holistic view of what's working and relevant, enabling continuous guidance for
        security strategy.
      </p>

      <p class="my-8 text-lg leading-8 text-slate-300">
        By quantifying what your security should be doing in relation to what's happening in your enterprise and
        the wider industry, ESProfiler enables continuous, threat-driven guidance.
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

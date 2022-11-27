<template>

  <div class="fixed top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 dark:bg-transparent">

    <div class="container">

      <div class="flex items-center justify-between py-6 justify-start space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <nuxt-link to="/" class="hover-rise">
            <span class="sr-only">ESProfiler Ltd.</span>
            <img class="h-4 w-auto sm:h-8" src="@/assets/img/ESP-TEXT.svg" alt="" />
          </nuxt-link>
        </div>

        <nav class="flex gap-10 items-center ml-auto text-sm leading-6 text-slate-200">

          <nuxt-link to="/" class="hover:text-violet-400">Home</nuxt-link>
          <nuxt-link to="/about" class="hover:text-violet-400">About</nuxt-link>
          <nuxt-link to="/team" class="hover:text-violet-400">Team</nuxt-link>
          <nuxt-link to="/get-in-touch" class="hover:text-violet-400">Contact</nuxt-link>

          <nuxt-link href="/schedule-a-demo" class="ml-8 button-primary">Schedule a Demo</nuxt-link>

        </nav>


      </div>

    </div>

  </div>

</template>

<script setup>

import { HomeIcon, QuestionMarkCircleIcon, UserGroupIcon, ChatBubbleLeftRightIcon, VideoCameraIcon } from '@heroicons/vue/24/outline'

</script>

<template>

  <div class="fixed top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 dark:bg-transparent">

    <div class="container">

      <div class="flex items-center justify-between py-6">

        <div class="hidden md:flex justify-start">
          <nuxt-link to="/" class="hover-rise">
            <span class="sr-only">ESProfiler Ltd.</span>
            <img class="h-4 w-auto sm:h-8" src="~/assets/img/ESP-TEXT.svg" alt="" />
          </nuxt-link>
        </div>

        <nav class="flex gap-10 items-center justify-center sm:justify-end text-sm leading-6 text-slate-200 ml-4 flex-grow">

          <nuxt-link to="/" class="hover:text-violet-400">
            <span class="hidden md:inline-block">Home</span>
            <home-icon class="md:hidden w-5" />
          </nuxt-link>

          <nuxt-link to="/about" class="hover:text-violet-400">
            <span class="hidden md:inline-block">About</span>
            <question-mark-circle-icon class="md:hidden w-5" />
          </nuxt-link>

          <nuxt-link to="/team" class="hover:text-violet-400">
            <span class="hidden md:inline-block">Team</span>
            <user-group-icon class="md:hidden w-5" />
          </nuxt-link>

          <nuxt-link to="/get-in-touch" class="hover:text-violet-400">
            <span class="hidden md:inline-block">Contact</span>
            <chat-bubble-left-right-icon class="md:hidden w-5" />
          </nuxt-link>

          <div class="flex-grow-1 text-right sm:flex-grow-0">
            <nuxt-link href="/schedule-a-demo" class="sm:button-primary">
              <span class="hidden md:inline-block">Schedule a Demo</span>
              <video-camera-icon class="md:hidden w-5 stroke-violet-400" />
            </nuxt-link>
          </div>

        </nav>


      </div>

    </div>

  </div>

</template>

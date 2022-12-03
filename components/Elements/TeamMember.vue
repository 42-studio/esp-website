<template>

  <div v-if="right" class="flex items-center text-right xl:w-6/12 mb-16">

    <div class="grow pl-4 pr-8 space-y-4">

      <blockquote>
        <p class="md:text-lg md:font-medium">
          <slot />
        </p>
      </blockquote>

      <div class="flex items-center justify-end">
        <div class="font-medium">
          <div class="text-violet-400">
            <a :href="linkedin">
            {{ props.name }}
            </a>
          </div>
          <div class="text-slate-400 text-">
            {{ props.title }}
          </div>
        </div>
      </div>

    </div>

    <div class="shrink">
      <div class="p-1 w-44 aspect-square ring-2 ring-violet-300 overflow-clip member">
        <div class="member w-full h-full" :style="{ backgroundImage: `url(/img/team/${props.photo})` }" />
      </div>
    </div>

  </div>

  <div v-else class="flex items-center text-left xl:w-6/12 mb-16">

    <div class="shrink">
      <div class="p-1 w-44 aspect-square ring-2 ring-violet-300 overflow-clip member">
        <div class="member w-full h-full" :style="{ backgroundImage: `url(/img/team/${props.photo})` }" />
      </div>
    </div>

    <div class="grow pr-4 pl-8 space-y-4">

      <blockquote>
        <p class="md:text-lg md:font-medium">
          <slot />
        </p>
      </blockquote>

      <div class="flex items-center">
        <div class="font-medium">
          <div class="text-violet-400">
            <a :href="linkedin">
              {{ props.name }}
            </a>
          </div>
          <div class="text-slate-400 text-">
            {{ props.title }}
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script setup>

const props = defineProps({

  name: String,
  title: String,
  photo: String,
  linkedin: {
    default: '#',
    type: String
  },
  right: Boolean
})

</script>

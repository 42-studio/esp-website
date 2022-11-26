<template>

  <div class="flex items-center text-right xl:w-6/12 mb-16">

    <div class="grow pl-4 pr-8 space-y-4">

      <blockquote>
        <p class="md:text-lg md:font-medium">
          <slot />
        </p>
      </blockquote>

      <div class="flex items-center justify-end">
        <div class="font-medium">
          <div class="text-violet-400">
            {{ props.name }}
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

</template>

<script setup>

const props = defineProps({

  name: String,
  title: String,
  photo: String

})

</script>

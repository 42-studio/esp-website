<template>

  <div class="grow inline-flex items-center text-right my-8">

    <div class="grow pl-4 pr-8 space-y-4">
      <blockquote>
        <p class="text-lg font-medium">
          <slot />
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-violet-400">
          {{ props.name }}
        </div>
        <div class="text-slate-400">
          {{ props.title }}
        </div>
      </figcaption>
    </div>

    <div class="shrink">
      <div class="p-1 w-52 h-52 ring-2 ring-violet-300 overflow-clip member">
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

<template>

  <div class="grow inline-flex items-center text-left my-8">

    <div class="shrink">
      <div class="p-1 w-52 h-52 ring-2 ring-violet-300 overflow-clip member">
        <div class="member w-full h-full" :style="{ backgroundImage: `url(/img/team/${props.photo})` }" />
      </div>
    </div>

    <div class="grow pr-4 pl-8 space-y-4">

      <blockquote>
        <p class="text-lg font-medium">
          <slot />
        </p>
      </blockquote>

      <div class="flex items-center">

        <div class="font-medium">
          <div class="text-violet-400">
            {{ props.name }}
          </div>
          <div class="text-slate-400">
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
  photo: String

})

</script>

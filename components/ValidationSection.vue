<script setup>

const props = defineProps({
  icon: Function,
  title: String
})

</script>

<template>

  <div>

    <div class="flex items-center">

      <div class="shrink inline-block rounded-full w-14 h-14 text-sm ring-1 ring-slate-300/10 text-slate-200">
        <component :is="props.icon" class="stroke-1 w-[65%] h-[65%] m-[17.5%]" />
      </div>

      <div class="grow pl-8">
        <h3 class="text-2xl font-bold tracking-tight sm:text-3xl">
          {{ props.title }}
        </h3>
      </div>
    </div>

    <div class="flex">

      <div class="shrink py-5">

        <div class="w-14 h-full">
          <div class="v-pathway mx-auto" />
        </div>

      </div>

      <div class="grow pl-8">
        <slot />
      </div>

    </div>

  </div>

</template>

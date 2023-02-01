<script setup>
const props = defineProps({
  articleObject: Object,
  authorObject: Object,
});
</script>

<template>
  <img
    class="w-full mb-7 rounded-md shadow-2xl object-cover"
    :src="props.articleObject.image"
    alt="article image"
  />
  <nuxt-link :href="authorObject._path">
    <img
      class="h-8 w-8 rounded-full inline"
      :src="authorObject.image"
      alt="author"
    />
    <p
      class="inline-block align-middle ml-4 text-sm leading-8 text-slate-300 opacity-80"
    >
      {{
        new Date(articleObject.dateUpdated).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}
    </p>
  </nuxt-link>
  <h3 class="my-5 text-xl font-bold tracking-tight sm:text-2xl">
    {{ articleObject.title }}
  </h3>
  <p>{{ articleObject.description }}</p>
</template>

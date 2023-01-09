<script setup>
// author prop must be a in display from not path
//  e.g.
//    ✅ 'Louis Holt'
//    ❌ 'louis-holt'
//
const props = defineProps({
  date: Date,
  author: String,
});

const { data: author } = await useAsyncData(`content-${props.author}`, () => {
  return queryContent(
    `/blog/author/${props.author.toLowerCase().replaceAll(" ", "-")}`
  )
    .only(["name", "role", "image", "_path"])
    .findOne();
});
</script>

<template>
  <nuxt-link :to="author._path">
    <div class="flex flex-row text-slate-300">
      <img class="h-14 rounded-full" :src="author.image" alt="author" />
      <div>
        <div class="flex flex-row">
          <h4 class="text-xl font-bold">{{ author.name }}</h4>
          <span> • {{ props.date.toLocaleDateString() }}</span>
        </div>
        <p>{{ author.role }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

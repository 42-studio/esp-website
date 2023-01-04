<template>
  <div class="container relative mt-[15vh]">
    <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">Blog</h1>
    <p>{{ articles }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content().fetch();

    return {
      articles,
    };
  },
};
</script>

<script setup>
const { data: articles } = await useAsyncData("content-articles", () => {
  return queryContent("/blog/article").find();
});

const { data: tags } = await useAsyncData("content-tags", () => {
  return Array.from(
    new Set(queryContent("/blog/article").only(["tags"]).find().flat())
  );
});
</script>

<template>
  <div class="container relative mt-[15vh]">
    <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">Blog</h1>
    <p class="mt-6 mb-6 text-lg leading-8 text-slate-300 max-w-2xl">
      Stay tuned to our blog for the latest updates on our innovative
      cybersecurity solutions and insights on how we're helping companies around
      the world protect against evolving threats and improve their overall
      security posture.
    </p>

    <!-- <ul v-for="tag in tags">
      <li>{{ tag }}</li>
    </ul> -->

    <ContentList path="/blog/article">
      <template v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <h2 class="text-xl font-bold tracking-tight sm:text-lg">
            {{ article.title }}
          </h2>
          <p>{{ article.description }}</p>
          <ElementsAuthorWidget
            :author="article.author"
            :date="article.dateUpdated"
          ></ElementsAuthorWidget>

          <nuxt-link :href="article._path">Read more</nuxt-link>
        </div>
      </template>

      <template #not-found>
        <p class="mt-10 italic">No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>

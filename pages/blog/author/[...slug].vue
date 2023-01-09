<script setup>
const { path } = useRoute();

const { data: author } = await useAsyncData(`content-${path}`, () => {
  return queryContent(path)
    .only(["name", "description", "role", "image"])
    .findOne();
});

const { data: authorArticles } = await useAsyncData(
  `content-${path}-articles`,
  () => {
    return queryContent("/blog/article")
      .where({ author: path.split("/").pop() })
      .only(["title"])
      .sort("date-updated")
      .limit(10)
      .find();
  }
);
</script>

<template>
  <div class="container relative mt-[15vh]">
    <article class="prose prose-slate">
      <img :src="author.image" alt="author" />
      <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
        {{ author.name }}
      </h1>
      <p>{{ author.description }}</p>
      <ul v-for="article in authorArticles">
        <li>{{ article.title }}</li>
      </ul>
    </article>
  </div>
</template>

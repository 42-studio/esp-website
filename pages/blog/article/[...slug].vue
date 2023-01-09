<script setup>
const { path } = useRoute();

const { data: article } = await useAsyncData(`content-${path}`, () => {
  return queryContent(path).findOne();
});

const { data: author } = await useAsyncData(`content-${path}-author`, () => {
  return queryContent("/blog/author/")
    .only(["name", "image", "_path"])
    .where({ name: article.value.author })
    .findOne();
});
</script>

<template>
  <div class="container relative mt-[15vh]">
    <article class="prose prose-slate">
      <!-- <ContentDoc>
        <template v-slot="{ doc }"> -->
      <ElementsAuthorWidget
        :author="author.name"
        :date="new Date(article.dateUpdated)"
      ></ElementsAuthorWidget>
      <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
        {{ article.title }}
      </h1>
      <img class="w-full" :src="article.image" alt="Article Heading" />
      <ContentRenderer :value="article" />
      <!-- </template>

        <template v-slot:empty>
          <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
            Blog post content is empty
          </h1>
          <p class="mt-6 max-w-md text-lg leading-8 text-slate-300">
            Sorry, we couldn't find any content for that blog post.
          </p>
        </template>
        <template v-slot:not-found>
          <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
            Blog post not found
          </h1>
          <p class="mt-6 max-w-md text-lg leading-8 text-slate-300">
            Sorry, we couldn't find that blog post. It's possible it may have
            been deleted. Please double check that the URL you entered is
            correct.
          </p>
          <div class="mt-8">
            <nuxt-link
              href="/blog"
              class="button-primary animated delay-5s pulse"
            >
              Explore Blog
              <span class="text-violet-200 ml-2" aria-hidden="true"
                >&rarr;</span
              >
            </nuxt-link>
          </div>
        </template>
      </ContentDoc> -->
    </article>
  </div>
</template>

<style>
/* @tailwind base;
@tailwind components;
@tailwind utilities;

h1 {
  @apply text-4xl font-bold tracking-tight sm:text-6xl;
}
h2 {
  @apply text-3xl font-bold tracking-tight sm:text-5xl;
}
h3 {
  @apply text-2xl font-bold tracking-tight sm:text-4xl;
}
h4 {
  @apply text-xl font-bold tracking-tight sm:text-3xl;
}
h5 {
  @apply font-bold tracking-tight sm:text-2xl;
}
h6 {
  @apply text-sm font-bold tracking-tight sm:text-xl;
}
p {
  @apply mt-6 text-lg leading-8 text-slate-300;
} */
</style>

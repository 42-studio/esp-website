<template>
  <article class="container relative mt-[15vh] prose lg:prose-xl">
    <ContentDoc>
      <template v-slot:not-found>
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
          Blog post not found
        </h1>
        <p class="mt-6 max-w-md text-lg leading-8 text-slate-300">
          Sorry, we couldn't find that blog post. It's possible it may have been
          deleted. Please double check that the URL you entered is correct.
        </p>
        <div class="mt-8">
          <nuxt-link
            href="/blog"
            class="button-primary animated delay-5s pulse"
          >
            Explore Blog
            <span class="text-violet-200 ml-2" aria-hidden="true">&rarr;</span>
          </nuxt-link>
        </div>
      </template>
    </ContentDoc>
    <!-- <h1>{{ page.title }}</h1> -->
    <!-- <nuxt-content :document="page" /> -->
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("blog/test").fetch();
    return {
      page,
    };
  },
};
</script>
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

<script setup>
const { data: blogConfig } = await useAsyncData("blogConfig", () => {
  return queryContent("/blog/_config").findOne();
});

const { data: rawArticles } = await useAsyncData("content-articles", () => {
  return queryContent("/blog/article").find();
});

let articles = [];
for (let article of rawArticles.value) {
  let { data: authorImage } = await useAsyncData(
    `${article.path}-author-image`,
    () => {
      return queryContent(
        `/blog/author/${article.author.toLowerCase().replaceAll(" ", "-")}`
      ).findOne();
    }
  );

  article.author = authorImage.value;

  articles.push(article);
}

const headlineArticle = articles.find(
  (a) => a.title == blogConfig.value.headlineArticle
);

const { data: tags } = await useAsyncData("content-tags", () => {
  return Array.from(
    new Set(queryContent("/blog/article").only(["tags"]).find().flat())
  );
});
</script>

<template>
  <div class="container relative mt-[15vh]">
    <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">Blog</h1>
    <p class="mt-6 mb-24 text-lg leading-8 text-slate-300 max-w-2xl">
      Stay tuned to our blog for the latest updates on our innovative
      cybersecurity solutions and insights on how we're helping companies around
      the world protect against evolving threats and improve their overall
      security posture.
    </p>

    <!-- <ul v-for="tag in tags">
      <li>{{ tag }}</li>
    </ul> -->
    <nuxt-link :href="headlineArticle._path">
      <div class="grid grid-cols-2 gap-8 w-100">
        <img
          class="w-full h-full rounded-lg shadow-2xl object-cover"
          :src="headlineArticle.image"
          alt="header article image"
        />
        <div class="flex flex-col h-full">
          <nuxt-link :href="headlineArticle.author._path">
            <img
              class="h-8 w-8 rounded-full inline"
              :src="headlineArticle.author.image"
              alt="author"
            />
            <p
              class="inline-block align-middle ml-4 text-sm leading-8 text-slate-300 opacity-80"
            >
              {{
                new Date(headlineArticle.dateUpdated).toLocaleDateString(
                  undefined,
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )
              }}
            </p>
          </nuxt-link>
          <h2 class="my-5 text-3xl font-bold tracking-tight sm:text-5xl">
            {{ headlineArticle.title }}
          </h2>
          <p class="text-lg leading-6 text-slate-300">
            {{ headlineArticle.description }}
          </p>
          <div class="justify-self-end">
            <p class="inline-block text-lg align-middle">READ MORE</p>
            <svg
              class="inline-block align-middle ml-2"
              width="14"
              height="14"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 14L14 1M14 1H1M14 1V14"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </nuxt-link>

    <div class="grid grid-cols-3 sm:grid-cols-1">
      <div v-for="article in articles" :key="article._path">
        <ElementsArticleWidget
          :article-object="article"
          :author-object="article.author"
        ></ElementsArticleWidget>
      </div>
    </div>
  </div>
</template>

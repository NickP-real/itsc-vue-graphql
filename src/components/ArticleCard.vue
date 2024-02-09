<script setup lang="ts">
import { type Article } from '@/composables/type'
import { RouterLink } from 'vue-router'

defineProps<{ articles: Article[] }>()
</script>

<template>
  <div
    v-for="article in articles"
    :key="article.articleId"
    class="w-full rounded-2xl overflow-hidden mb-8"
  >
    <div class="bg-content-header p-3 text-xl font-semibold">{{ article.title }}</div>
    <div class="bg-content-body grid-cols-10 grid px-4 py-2 gap-9">
      <div class="col-span-4 place-self-center">
        <img :src="article.imageUrl" alt="article's image" class="rounded-2xl" />
      </div>
      <div class="flex flex-col col-span-6 gap-4 justify-between">
        <div class="text-xl">{{ article.description }}</div>
        <div class="text-xl ml-auto gap-2 flex">
          <RouterLink :to="{ name: 'article-edit', params: { articleId: article.articleId } }">
            <div
              class="bg-primary w-40 py-3 rounded-lg text-white text-xl font-extrabold text-center"
            >
              Edit
            </div>
          </RouterLink>
          <RouterLink :to="{ name: 'article-read-more', params: { articleId: article.articleId } }">
            <div class="bg-info w-40 py-3 rounded-lg text-white text-xl font-extrabold text-center">
              Read More
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

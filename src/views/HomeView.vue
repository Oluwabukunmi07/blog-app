<script setup lang="ts">
import { ref } from "vue";
import type { Post, PostsResponse } from "@/types/post";

const res = await fetch("https://api.oluwasetemi.dev/posts?limit=10");
const data: PostsResponse = await res.json();
const posts = ref<Post[]>(data.data ?? []);
</script>

<template>
  <!-- Home View  -->
  <div class="min-h-screen bg-black">
    <div class="max-w-3xl mx-auto p-8">
      <!-- Header -->
      <h1 class="text-5xl font-bold text-white mb-6 text-center">Bloggggg</h1>

      <!-- Posts -->
      <div class="space-y-6">
        <div
          v-for="post in posts"
          :key="post.id"
          class="border-solid border-gray-300 border-1 p-4 rounded-md cursor-pointer h-full"
        >
          <h2 class="text-3xl font-bold text-white mb-6 text-center">
            {{ post.title }}
          </h2>
          <p class="text-gray-400 mb-4 text-lg text-center">
            {{ post.excerpt ?? post.content.slice(0, 100) }}
          </p>
          <RouterLink
            :to="`/post/${post.id}`"
            class="block text-center text-gray-300 text-sm font-semibold hover:text-white transition-colors"
          >
            Read More →
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

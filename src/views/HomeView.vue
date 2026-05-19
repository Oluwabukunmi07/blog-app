<script setup lang="ts">
import { ref } from "vue";
import type { Post, PostsResponse } from "@/types/post";

const posts = ref<Post[]>([]);
const error = ref("");

try {
  const res = await fetch("https://api.oluwasetemi.dev/posts");
  const data: PostsResponse = await res.json();
  posts.value = data.data ?? [];
} catch {
  error.value = "Failed to load posts. Please try again later.";
}
</script>

<template>
  <!-- Home View  -->
  <div class="min-h-screen bg-black">
    <div class="max-w-2xl mx-auto p-8">
      <!-- Header -->
      <h1 class="text-5xl font-bold text-white mb-10 text-center">Dev Blog</h1>

      <!-- Posts -->
      <div v-if="error" class="text-red-500 text-center mb-6">{{ error }}</div>
      <div v-else class="space-y-6">
        <div
          v-for="post in posts"
          :key="post.id"
          class="border-b border-gray-800"
        >
          <h2 class="text-2xl font-bold text-white mb-4">
            {{ post.title }}
          </h2>

          <!-- Date and tags -->
          <div class="flex items-center gap-3 mb-3">
            <span class="text-gray-500 text-sm">
              {{
                post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : ""
              }}
            </span>
            <span v-if="post.category" class="text-gray-500 text-sm"
              >· {{ post.category }}</span
            >
          </div>

          <p class="text-gray-400 mb-4">
            {{ post.excerpt ?? post.content.slice(0, 100) }}
          </p>

          <RouterLink
            :to="`/post/${post.id}`"
            class="text-gray-300 text-sm font-semibold hover:text-white transition-colors"
          >
            Read More →
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

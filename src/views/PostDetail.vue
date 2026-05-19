<script setup lang="ts">
import { useRoute } from "vue-router";
import type { Post } from "@/types/post";

const route = useRoute();
const id = route.params.id as string;

const res = await fetch("https://api.oluwasetemi.dev/posts/${id}");
const post: Post = await res.json();
</script>

<template>
  <div class="min-h-screen bg-black">
    <div class="max-w-3xl mx-auto p-8">
      <!-- Back Button -->
      <RouterLink
        to="/"
        class="text-gray-400 hover:text-white text-sm mb-6 inline-block transition-colors"
      >
        ← Back to Home
      </RouterLink>

      <!-- Post content -->
      <h1 class="text-4xl font-bold text-white mb-4">{{ post.title }}</h1>
      <p class="text-gray-400 text-sm mb-8">
        {{ post.publishedAt ?? post.createdAt ?? "No date" }}
      </p>
      <p class="text-gray-300 text-lg leading-relaxed">{{ post.content }}</p>
    </div>
  </div>
</template>

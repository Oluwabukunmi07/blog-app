<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-black">
    <div class="text-center">
      <h1 class="text-sm font-bold mb-4 text-gray-600">404</h1>
      <p class="text-white mb-6 text-xl font-bold">Page not found</p>
      <p class="text-gray-400 mb-8 text-sm">
        This page doesn't exist or has been moved
      </p>
    </div>
    <div class="flex space-x-8">
      <RouterLink
        to="/"
        class="text-gray-400 hover:text-white text-sm transition-colors underline"
      >
        Go Home
      </RouterLink>
      <button
        @click="router.back()"
        class="text-gray-400 hover:text-white text-sm transition-colors underline"
      >
        Go Back
      </button>
    </div>
  </div>
</template>

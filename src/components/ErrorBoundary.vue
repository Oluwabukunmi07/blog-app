<script setup lang="ts">
import { ref, onErrorCaptured } from "vue";

const error = ref<string | null>(null);

onErrorCaptured((err: Error) => {
  error.value = err.message;
  return false;
});
</script>

<template>
  <div
    v-if="error"
    class="min-h-screen bg-black flex items-center justify-center"
  >
    <div class="text-center p-8 border border-red-500 rounded-md max-w-md">
      <h2 class="text-2xl font-bold text-red-500 mb-4">Something went wrong</h2>
      <p class="text-gray-400 mb-6">{{ error }}</p>
      <RouterLink
        to="/"
        class="text-gray-300 border border-gray-300 px-4 py-2 rounded hover:text-white hover:border-white transition-colors text-sm"
      >
        ← Back to Home
      </RouterLink>
    </div>
  </div>
  <slot v-else />
</template>

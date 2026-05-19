<script setup lang="ts">
import ErrorBoundary from "./components/ErrorBoundary.vue";
</script>

<template>
  <ErrorBoundary>
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        <div class="flex items-center justify-center h-screen">
          <p class="text-gray-500 text-lg">Loading...</p>
        </div>
      </template>
    </Suspense>
  </ErrorBoundary>
</template>

<style scoped></style>

<script setup lang="ts">
definePageMeta({
  layout: 'default-layout',
})
</script>

<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-2 gap-4" style="height: 85vh">
      <div class="flex flex-col justify-center items-start">
        <p class="mb-4 text-xl text-center">Hi there, I am</p>
        <p class="mb-4 text-6xl text-center">Vincent Lauro</p>
      </div>

      <div class="flex flex-col overflow-auto justify-center items-center">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <Button label="Check" icon="pi pi-check"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* No additional styles needed here as Tailwind classes are used */
</style>
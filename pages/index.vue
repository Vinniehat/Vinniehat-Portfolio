<script setup lang="ts">
import SocialCodeComponent from "~/components/SocialCodeComponent.vue";

definePageMeta({
  layout: 'default-layout',
})
const runtimeConfig = useRuntimeConfig()
const writerPrompts = [
    'Web Developer.',
    'Gamer.'
]
</script>

<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-2 gap-4" style="height: 85vh">
      <div class="flex flex-col justify-center ">
        <p class="mb-4 text-xl">Hi there, I am</p>
        <p class="mb-4 text-6xl">Vincent Lauro</p>
        <VueWriter id="writer-text" class="mb-16 text-4xl" :array="writerPrompts">> </VueWriter>

        <p class="text-gray-500">// Visit my links below!</p>
        <SocialCodeComponent :url="runtimeConfig.public.GITHUB_URL" siteName="GitHub" />
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
#writer-text {
  color: #b314a6;
}
</style>
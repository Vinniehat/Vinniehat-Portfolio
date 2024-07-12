<script setup lang="ts">
defineProps({
  url: String,
  siteName: String,
})
</script>

<template>
<div>
  <p><span class="variable-keyword">const</span> <span class="variable-name">{{ siteName }}</span> =
    <a :href="url" class="variable-string-value underline underline-offset-4">"{{url}}"</a></p>
</div>
</template>

<style scoped>

</style>
<script setup lang="ts">

import NavbarComponent from "~/components/NavbarComponent.vue";
</script>

<template>
  <div id="outer-box" class="">
    <NavbarComponent />
    <slot />
  </div>
</template>


<style scoped>
#outer-box {
  margin: 10px;
  border-color: aqua;
  border-width: 5px;
  background-color: #011627;
}
</style>
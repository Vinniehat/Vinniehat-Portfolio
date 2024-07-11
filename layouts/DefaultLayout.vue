<script setup lang="ts">

import NavbarComponent from "~/components/NavbarComponent.vue";
</script>

<template>
  <div id="inner-box" class="rounded-lg border-2 m-5 border-solid">
    <NavbarComponent id="navbar"/>
    <slot />
  </div>
</template>


<style scoped>
#inner-box {
  border-color: var(--inner-box-border-color);
  background-color: var(--inner-box-color);
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  position: absolute;
}
#navbar {
  margin: 0px 0px 10px 0px !important;
  background-color: transparent;
  border: none;
  border-bottom: 1px;
  border-bottom-style: solid !important;
  border-bottom-color: var(--inner-box-border-color) !important;

}
</style>
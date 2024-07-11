<script setup lang="ts">

import NavbarComponent from "~/components/NavbarComponent.vue";
</script>

<template>
  <div id="inner-box" class="">
    <NavbarComponent id="navbar"/>
    <slot />
  </div>
</template>


<style scoped>
#inner-box {
  margin: 20px;
  border-color: var(--inner-box-border-color);
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
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
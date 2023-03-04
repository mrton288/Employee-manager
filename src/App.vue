<template>
  <TheMenu />
  <div class="main">
    <TheHeader />
    <TheContent />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheContent from "./components/layout/TheContent.vue";
import TheMenu from "./components/layout/TheMenu.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheContent,
    TheMenu,
  },
};
</script>

<style>
#app {
  display: grid;
  grid-template-columns: var(--menu-weight) calc(100% - var(--menu-weight));
  grid-template-rows: var(--header-height) calc(100vh - var(--header-height));
}

@import url("@/style/container.css");
</style>

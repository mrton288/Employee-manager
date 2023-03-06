<template>
  <router-link :to="pathString" class="menu-item">
    <div
      class="ic"
      :style="{
        backgroundPosition: bgcPosition,
      }"
    ></div>
    <div v-if="content" class="content-item">{{ content }}</div>
  </router-link>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    pathString: String,
    content: {
      type: String,
      required: false,
    },
    bgcPosition: {
      type: String,
    },
  },
  computed: {
    backgroundP() {
      return this.bgcPosition;
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.menu-item {
  display: flex;
  height: 44px;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}

.menu-item:hover {
  background-color: #d4d7dc3c;
}
.content-item {
  font-size: 14px;
  margin-left: 12px;
}

/* item 1:  -30px -1585px */
.ic {
  background: url("/src/assets/img/Sprites.64af8f61.svg") no-repeat;
  width: 24px;
  height: 24px;
  margin-left: 12px;
}
</style>
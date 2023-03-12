<template>
  <router-link :to="path" class="menu-item">
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
    path: String,
    content: {
      type: String,
      required: false,
    },
    bgcPosition: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.menu-item {
  position: relative;
  display: flex;
  height: 44px;
  align-items: center;
  /* border-radius: 4px; */
  cursor: pointer;
  white-space: nowrap;
}

.menu-item:hover {
  background-color: #616164;
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

/* .rectangle {
  position: relative;
  width: 100px;
  height: 50px;
  background-color: yellow;
} */

.menu-item.active::before {
  content: "";
  position: absolute;
  top: 0;
  width: 8px;
  height: 100%;
  background-color: #2ca01c; /* Màu nền hình chữ nhật */
}

.menu-item.active {
  position: relative;
  background-color: #58595d;
}
</style>
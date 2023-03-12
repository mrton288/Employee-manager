<template>
  <div
    :class="size"
    class="ic"
    :style="{ backgroundPosition: bgcPosition }"
  ></div>
</template>
<script>
export default {
  props: {
    bgcPosition: {
      type: String,
      required: false,
    },

    size: {
      type: String,
      required: false,
      default: "s-icon-24",
    },
  },
};
</script>
<style scoped>
.ic {
  background: url("/src/assets/img/Sprites.64af8f61.svg") no-repeat;
  cursor: pointer;
}

.icon-arrowdown {
  width: 10px;
  height: 8px;
}

.icon-arrowdown2 {
  width: 8px;
  height: 5px;
}

.icon-12 {
  width: 12px;
  height: 12px;
}

.icon-20 {
  width: 20px;
  height: 20px;
}
</style>
<template>
  <div>
    <!-- Toast message -->
    <div class="toast">
      <div class="toast__left">
        <div class="flex aligin-center">
          <slot></slot>
          <div class="toast__text">
            <strong :style="{ color: colorStatus }"
              >{{ textStatus }}&nbsp;</strong
            >
            {{ textExplain }}
          </div>
        </div>
        <div v-if="additional" class="toast__additional">
          {{ additional }}
        </div>
      </div>
      <slot name="icon1"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    textStatus: {
      type: String,
    },
    textExplain: {
      type: String,
    },

    colorStatus: {
      type: String,
    },
    additional: {
      type: String,
    },
  },
};
</script>
<style scoped>
.toast {
  position: absolute;
  top: 30px;
  right: auto;
  /* transform: translate(-50%); */
  display: flex;
  align-items: center;
  padding: 16px;
  max-width: 650px;
  background-color: #fff;
  justify-content: space-between;
  z-index: 3;
  box-shadow: 0px 1px 5px #ccc, 0px -1px 5px #ccc;
  transform: translateY(calc(100% + 30px));
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35);
}
.toast__additional {
  left: 30px;
  text-decoration: underline;
  color: #1f1f1f;
  font-size: 14px;
  font-weight: 500;
  font-weight: bold;
}

.toast__left {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
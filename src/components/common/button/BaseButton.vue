<template>
  <button
    class="btn btn-base"
    @click="handleClick"
    :style="{ borderRadius: rounded }"
  >
    <slot name="icon1"></slot>
    <span :class="marginIcon">{{ name }}</span>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    handleClick: {
      type: Function,
      default: () => {},
    },
    background: {
      type: Boolean,
      required: false,
      default: true,
    },
    iconBtn: {
      type: Boolean,
      default: false,
    },
    marginIcon: {
      type: String,
    },
    rounded: {
      type: String,
      default: "4px",
    },
  },
};
</script>
<style scoped>
/**Nút base */
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  outline: none;
  /* border: 1px solid #3b3c3f; */
  cursor: pointer;
}

.btn-base {
  padding: 0 16px;
  text-align: center;
  min-width: 80px;
  background-color: #fff;
}

/**Nút bấm chính */
.btn-main {
  background-color: var(--color-green-base);
  border: solid 2px var(--color-green-base);
  color: var(--color-white-base);
}

.btn-main:hover {
  background-color: var(--btn-main-hover);
  border-color: var(--btn-main-hover) !important;
  cursor: pointer;
}

.btn-main:focus {
  outline: none;
  border: solid 2px #000;
}
.btn-main:active {
  background-color: var(--btn-main-active);
  border-color: var(--btn-main-active) !important;
}

.btn-main-important {
  background-color: #e81e1e;
  border: solid 1px #e81e1e;
  color: var(--color-white-base);
}

.btn-main-important:hover {
  background-color: #e72e2e;
  border-color: #e72e2e !important;
  cursor: pointer;
}

.btn-main-important:active {
  background-color: #cc1a1a;
  border-color: #cc1a1a !important;
}

/**Nút bấm phụ */
.btn-extra {
  border: 1px solid var(--color-gray-base);
  background-color: var(--color-white-base);
}

.btn-extra:hover {
  background-color: var(--btn-extra-hover);
  border-color: var(--btn-extra-hover) !important;
  cursor: pointer;
}
.btn-extra:focus {
  outline: none;
  border: solid 1px var(--color-green-base);
}

.btn-extra:active {
  background-color: var(--btn-extra-active);
  border-color: var(--btn-extra-active) !important;
}

.base-icon {
  width: 40px;
}

.base-icon:hover {
  background-color: #e5f0e3;
  cursor: pointer;
}

.btn-base + .btn-base {
  margin-left: 12px;
}

.ml__10 {
  margin-left: 10px;
}
</style>
<template>
  <button class="btn btn-base" @click="handleClick">
    <div v-if="urlIcon"><img :src="urlIcon" alt="" /></div>
    <div>{{ name }}</div>
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
    urlIcon: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>
<style scoped>
/**Nút base */
.btn {
  /* display: inline;
  align-items: center;
  justify-content: center; */
  height: 36px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  outline: none;
}

.btn-base {
  padding: 0 16px;
  text-align: center;
  min-width: 80px;
}

/**Nút bấm chính */
.btn-main {
  background-color: var(--color-green-base);
  border: solid 1px var(--color-green-base);
  color: var(--color-white-base);
}

.btn-main:hover {
  background-color: var(--btn-main-hover);
  border-color: var(--btn-main-hover);
  cursor: pointer;
}

.btn-main:active {
  background-color: var(--btn-main-active);
  border-color: var(--btn-main-active);
}

.btn-main-important {
  background-color: #e81e1e;
  border: solid 1px #e81e1e;
  color: var(--color-white-base);
}

.btn-main-important:hover {
  background-color: #e72e2e;
  border-color: #e72e2e;
  cursor: pointer;
}

.btn-main-important:active {
  background-color: #cc1a1a;
  border-color: #cc1a1a;
}

/* .btn-main:focus {
  border-color: #000;
} */

/**Nút bấm phụ */
.btn-extra {
  border: 1px solid var(--color-gray-base);
}

.btn-extra {
  background-color: var(--color-white-base);
  border-color: var(--color-gray-base);
}

.btn-extra:hover {
  background-color: var(--btn-extra-hover);
  cursor: pointer;
}

.btn-extra:active {
  background-color: var(--btn-extra-active);
  border-color: var(--btn-extra-active);
}

.btn-extra:focus {
  border-color: var(--color-green-base);
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

/* .btn-yes {
  position: absolute;
  width: 79px;
  height: 36px;
  background-color: #50b83c;
  white-space: nowrap;
  text-align: center;
  border-radius: 4px;
  top: 135px;
  right: 20px;
  color: #fff;
  border: none;
}

.btn__cancel {
  width: 80px;
  height: 36px;
  border-radius: 4px;
  background-color: #fff;
  border: solid 1px #e0e0e0;
  cursor: pointer;
}

.btn__cancel:hover {
  background-color: #f6f6f6;
  cursor: pointer;
  border: solid 1px #e6e6e6 !important;
}

.btn__cancel:active {
  background-color: #ebebeb;
  border: none !important;
}

.btn .btn__store {
  display: flex;
  gap: 8px;
}
.btn__store-sub {
  width: 80px;
  height: 36px;
  background-color: #fff;
  border: solid 1px #e0e0e0;
  color: #212121;
  border-radius: 4px;
  cursor: pointer;
}

.btn__store-sub:hover {
  background-color: #f6f6f6;
  cursor: pointer;
  border: solid 1px #e6e6e6 !important;
}

.btn__store-sub:active {
  background-color: #ebebeb;
  border: none !important;
}

.btn__store-add {
  height: 36px;
  background-color: #50b83c;
  color: #ffffff;
  border: solid 1px #e0e0e0;
  padding: 0px 15px;
  border-radius: 4px;
}

.btn__store-add:hover {
  background-color: #5dc748;
  cursor: pointer;
  border: solid 1px #5dc748 !important;
}

.btn__store-add:active {
  background-color: #0f723d;
  border: none !important;
}

.btn__store button:focus,
.popup__footer button:focus {
  outline: none;
  border: solid 1px #50b83c;
} */
</style>
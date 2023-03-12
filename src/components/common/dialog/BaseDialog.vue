<template>
  <div class="blur-model">
    <div class="base-dialog p-24">
      <div class="head mt-24">
        <slot name="icon"></slot>
        <div class="des ml-12">{{ description }}</div>
      </div>
      <div class="line mt-40"></div>
      <div class="flex mt-24" :class="justifyContent">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>
<script>
// import BaseButton from "./BaseButton.vue";
export default {
  name: "BaseDialog",
  //   components: { BaseButton },
  props: {
    description: {
      type: String,
      required: true,
      default: "",
    },
    handleClick: {
      type: Function,
      default: () => {},
    },
    bgcPosition: {
      type: String,
      required: false,
    },
    justifyContent: {
      type: String,
      required: false,
      default: "justify-between",
    },
  },
};
</script>
<style>
.base-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 9999;
  width: 420px;
}

.head {
  display: flex;
  align-items: center;
}
.title {
  color: var(--text-heading);
  font-weight: 700;
  align-items: left;
  font-size: 20px;
  font-style: bold;
}

.des {
  color: var(--text-heading);
  font-weight: 400;
  align-items: left;
  font-size: 14px;
  line-height: 18px;
}

/* .icon {
  background: url("/src/assets/img/Sprites.64af8f61.svg") no-repeat;
  width: 36px;
  height: 36px;
  cursor: pointer;
} */

.line {
  border-bottom: 1px solid #ccc;
}
</style>
<template>
  <!-- Option edit -->
  <div v-if="option" class="edit__option">
    <li v-for="(option, index) in options" :key="index" class="option__line">
      <a>{{ option.func }}</a>
    </li>
  </div>
</template>
<script>
export default {
  props: {
    option: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      options: [
        {
          func: "Nhân bản",
          action: "",
        },
        {
          func: "Xoá",
          action: "",
        },
        {
          func: "Ngừng sử dụng",
          action: "",
        },
      ],
    };
  },
};
</script>
<style>
.edit__option {
  background-color: #fff;
  position: absolute;
  top: 275px;
  right: -68px;
  z-index: 4;
  transform: translate(-100%);
  transition: opacity 0.25s, transform 0.25s, width 0.3s ease;
  border: 1px solid #ccc;
  padding: 2px 1px;
  white-space: nowrap;
  min-width: 120px;
}
.option__line {
  background-color: #fff;
  color: #111;
  padding: 5px 10px;
  font-size: 13px;
  font-weight: 500;
  list-style: none;
  /* display: none; */
}

.option__line:hover {
  background-color: #e8e9ec;
  cursor: pointer;
  color: #2ca01c;
}
</style>
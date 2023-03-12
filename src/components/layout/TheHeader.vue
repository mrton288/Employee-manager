<template>
  <div class="header">
    <div class="header__left">
      <div class="header__left-more"></div>
      <p class="header__left-title">
        CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH QUI PHÚC
      </p>
      <div class="header__left-arrow-down"></div>
    </div>

    <div class="header__right">
      <div class="show-tooltip relative">
        <base-icon
          @click="showToast"
          :bgcPosition="positionIcon.header.bell"
        ></base-icon>
        <base-tooltip contentTooltip="Thông báo"></base-tooltip>
      </div>
      <div class="header__right-user"></div>
      <p class="header__right-name">Nguyễn Văn Mạnh</p>
      <div class="header__right-arrow-down"></div>
    </div>
  </div>
</template>

<script>
import positionIcon from "../../scripts/resources/positionIcon.js";
export default {
  name: "TheHeader",
  components: {},
  props: [""],
  methods: {},
  data() {
    return {
      positionIcon,
    };
  },
};
</script>

<style scoped>
</style>

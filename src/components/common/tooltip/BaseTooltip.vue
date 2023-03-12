<template>
  <div
    class="tooltip"
    :style="{
      backgroundColor: bgcTooltip,
      top: topTooltip,
    }"
  >
    <p
      class="contentTooltip"
      :style="{
        color: textTooltip,
      }"
    >
      {{ contentTooltip }}
    </p>
  </div>
</template>

<script>
export default {
  name: "BaseTooltip",
  props: {
    contentTooltip: {
      type: String,
      requried: true,
      default: "Đây là tooltip",
    },
    bgcTooltip: {
      type: String,
      default: "#000",
    },
    textTooltip: {
      type: String,
      default: "#fff",
    },
    topTooltip: {
      type: String,
      default: "calc(100% + 4px)",
    },
  },
};
</script>

<style>
.show-tooltip {
  display: flex;
  align-items: center;
}

.show-tooltip:hover .tooltip {
  display: block;
}

.tooltip {
  position: absolute;
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #000;
  min-width: 60px;
  padding: 4px 10px;
  display: none;
  z-index: 3;
}

.tooltip > .contentTooltip {
  text-align: center;
  margin: auto;
}
</style>
<template>
  <div class="popup__model" id="form__detail">
    <div class="popup">
      <!-- popup Header -->
      <div class="flex">
        <div class="popup__title">{{ popupTitle }}</div>
        <div class="flex">
          <div class="popup__object" v-if="object1">
            <base-checkbox></base-checkbox>
            <div class="object__employee ml-12">{{ object1 }}</div>
          </div>
          <div class="popup__object" v-if="object2">
            <base-checkbox></base-checkbox>
            <div class="object__producter ml-12">{{ object2 }}</div>
          </div>
        </div>
      </div>

      <div class="popup__exit-tooltip show-tooltip s-icon-24">
        <base-icon
          @click="btnCloseOnClick"
          :bgcPosition="positionIcon.popup.close"
        ></base-icon>
        <base-tooltip contentTooltip="Đóng"></base-tooltip>
      </div>

      <div class="popup__help-tooltip s-icon-24 show-tooltip">
        <base-icon :bgcPosition="positionIcon.popup.help"></base-icon>
        <base-tooltip contentTooltip="Trợ giúp"></base-tooltip>
      </div>

      <!-- popup body -->
      <slot></slot>

      <!-- popup footer -->
      <div class="popup__footer">
        <div class="flex">
          <base-button name="Cất" class="btn-extra" @click="save"></base-button>
          <base-button name="Cất và thêm" class="btn-main"></base-button>
        </div>
        <base-button
          name="Huỷ"
          class="btn-extra"
          tabindex="0"
          @focusout="focusFirstInput"
          @click="btnCloseOnClick"
        ></base-button>
      </div>
    </div>
  </div>
</template>
<script>
import positionIcon from "@/scripts/resources/positionIcon";
export default {
  props: {
    popupTitle: {
      type: String,
      required: false,
      default: null,
    },
    object1: String,
    object2: String,
  },
  data() {
    return {
      positionIcon,
    };
  },
};
</script>
<style>
</style>
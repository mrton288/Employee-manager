<template>
  <div class="flex-col">
    <label v-if="label" class="input__label" :title="titleLabel"
      >{{ label }} <span v-if="require" class="required">*</span></label
    >
    <div class="combobox__base" ref="basecombobox">
      <input
        class="combobox__input"
        type="text"
        v-model="textInput"
        @keydown="inputOnKeyDown"
        :class="{ input__error: invalid }"
        @blur="onValidateBlur"
      />
      <div class="combobox__button" @click="onClickShowData">
        <base-icon
          :bgcPosition="positionIcon.arrowdown"
          :size="'icon-arrowdown'"
        ></base-icon>
      </div>
      <div class="combobox__data" v-show="showData" :style="{ top: otherTop }">
        <a
          v-for="(item, index) in dataArray"
          :key="index"
          class="combobox__data-item"
          :class="{ 'combobox__data-selected': index == indexSelected }"
          @click="onSelectDataItem(item)"
          >{{ propText ? item[propText] : item }}</a
        >
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import MISAEnum from "@/scripts/enums/enum.js";
import positionIcon from "@/scripts/resources/positionIcon";
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: [String, Array, Number],
      default: null,
      required: false,
    },
    label: {
      type: String,
      default: null,
      required: false,
    },

    api: {
      type: String,
      default: null,
      required: false,
    },
    data: {
      type: Array,
      default: null,
      required: false,
    },
    propText: {
      type: String,
      default: null,
      required: true,
    },
    // Khai báo cần lấy giá trị
    propValue: {
      type: String,
      default: null,
      required: false,
    },

    otherTop: {
      type: String,
      required: false,
      default: null,
    },

    require: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  watch: {
    data: function (newData) {
      this.dataArray = newData;
    },
    // textInput: function (newValue) {
    //   this.dataArray = this.dataOrigin.filter((item) =>
    //     item.toLowerCase().includes(newValue)
    //   );
    // Hiển thị list data
    // this.showData = true;
    // },
  },

  methods: {
    /**
     * bind dữ liệu lên  input
     * Author: NVDUC (12/3/2023)
     */
    bindInput() {
      this.textInput = this.modelValue;
      this.showData = false;
    },
    /**
     * Ẩn hiện các combobox data
     * Author: NVDUC (9/3/2023)
     */
    onClickShowData() {
      // if (this.dataOrigin != this.dataArray) {
      //   this.dataArray = this.dataOrigin;
      // }
      this.showData = !this.showData;
    },
    /**Lựu chọn item để hiển thị lên input
     * Author: NVDUC (9/3/2023)
     */
    onSelectDataItem(item) {
      // Hiển thị text của icon lên input
      this.textInput = this.propText ? item[this.propText] : item;
      const value = this.propValue ? item[this.propValue] : item;
      // Cập nhật giá trị vừa chọn
      this.$emit("update:modelValue", value);
      // Ẩn combobox data
      this.showData = false;
    },
    /**
     * Nhập dữ liệu vào input đồng thời hiển thị gợi ý
     * Author: NVDUC (9/3/2023)
     */
    inputOnChange() {
      // Lọc các item trong danh sách dựa vào text nhập vào input
      var dataArray = this.dataOrigin.filter((item) =>
        item.toLowerCase().includes(this.textInput)
      );
      this.showData = true;
      // Hiển thị combobox data
      return dataArray;
    },
    /**Lựu chọn item để hiển thị lên input khi nhấn phím lên xuống
     * Author: NVDUC (9/3/2023)
     */
    inputOnKeyDown() {
      const keyCode = event.keyCode;
      switch (keyCode) {
        case MISAEnum.Keyboard.keydown:
          // Set vào item phía trên hoặc item kế tiếp phía dưới
          this.showData = true;
          if (
            this.indexSelected == null ||
            this.indexSelected == this.dataArray.length - 1
          ) {
            this.indexSelected = 0;
          } else {
            this.indexSelected++;
          }
          break;
        case MISAEnum.Keyboard.keyup:
          this.showData = true;
          // Set vào item phía dưới hoặc item kế tiếp phía trên
          if (!this.indexSelected) {
            this.indexSelected = this.dataArray.length - 1;
          } else {
            this.indexSelected--;
          }
          break;
        case MISAEnum.Keyboard.enter:
          // Thực hiện chon item
          this.onSelectDataItem(this.dataArray[this.indexSelected]);
          break;
        default:
          break;
      }
    },
    /**
     * Validate input phòng ban
     * Author: NVDUC (10/3/2023)
     */
    onValidateBlur() {
      if (this.require && !this.textInput) {
        this.invalid = true;
      } else {
        this.invalid = false;
      }
    },
  },
  async created() {
    if (this.api) {
      var res = await fetch(this.api);
      var resJson = await res.json();
      this.dataArray = resJson;
      this.dataOrigin = resJson;
    } else if (this.data) {
      {
        this.dataArray = this.data;
        this.dataOrigin = this.data;
      }
    }
  },
  mounted() {
    // this.bindInput();

    // this.textInput = this.dataArray[0];
    const element = this.$refs["basecombobox"];
    const rect = element.getBoundingClientRect();
    if (rect.bottom > 300) {
      this.temp = true;
    }
  },
  data() {
    window.xxx = this;
    return {
      positionIcon,
      invalid: false, // Kiểm tra componnent có bắt buộc k
      temp: false, // Biến để đánh dấu vị trí của combobox
      MISAEnum,
      showData: false,
      dataArray: [],
      dataOrigin: [],
      textInput: null,
      indexSelected: null,
      arrowdown: require("@/assets/img/downarrow.png"),
    };
  },
};
</script>
<style>
.combobox__base {
  display: flex;
  height: 36px;
  border-radius: 4px;
  position: relative;
  border: 1px solid #e6e6e6;
}

.combobox__base:has(.combobox__input:focus) {
  border: 1px solid var(--color-green-base);
}
.combobox__input {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
  border: unset;
  outline: unset;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.combobox__button {
  width: 38px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.combobox__button:hover {
  background-color: #ccc;
  cursor: pointer;
}

.combobox__data {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(100% + 4px);
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 100%;
  z-index: 3;
  overflow-y: auto;
}

.combobox__data-item {
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 400;
}

.combobox__base a:hover,
.combobox__data-selected {
  background-color: #2d9e1c;
  color: #fff;
  cursor: pointer;
}
</style>


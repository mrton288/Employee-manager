<template>
  <div class="flex-col">
    <label v-if="label" class="input__label"
      >{{ label }} <span v-if="require" class="required">*</span></label
    >
    <input
      :class="{ input__error: invalid }"
      class="input"
      :type="typeInput"
      v-model="value"
      @blur="onValidateBlur"
    />
  </div>
</template>
<script>
export default {
  name: "BaseDatePicker",
  props: {
    modelValue: [String, Boolean, Number],
    typeInput: {
      type: String,
      required: false,
      default: "text",
    },
    label: {
      type: String,
      required: false,
      default: null,
    },
    require: {
      type: Boolean,
      required: false,
      default: false,
    },
    isFocus: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  watch: {
    value: function (newValue) {
      this.$emit("update:modelValue", newValue);
    },
  },

  computed: {
    // Chuyến sử dụng để format date đã chọn
    dateFormat: function () {
      if (this.value) {
        var data = new Date(this.value);
        // Lấy ra ngày
        let dateValue = data.getDate();
        // Lấy ra tháng
        let monthValue = data.getMonth() + 1;
        // Lẩy ra năm
        let yearValue = data.getFullYear();
        dateValue = dateValue < 10 ? `0${dateValue}` : dateValue;
        monthValue = monthValue < 10 ? `0${monthValue}` : monthValue;
        console.log("Value: ", this.value);
        console.log("Model Value: ", this.value);
        return `${dateValue}/${monthValue}/${yearValue}`;
      }
      return "";
    },
  },

  methods: {
    /**
     * Hàm thực hiện validate dữ liệu khi blur qua ô input
     * Author: NVDUC (4/3/2023)
     */
    onValidateBlur() {
      if (this.require && !this.value) {
        this.invalid = true;
      } else {
        this.invalid = false;
      }
    },
  },
  created() {
    /**
     * Định dạng ngày sinh dd/mm/yy
     * Author: NVDUC (28/2/2023)
     */
    if (this.modelValue) {
      var data = new Date(this.modelValue);
      // Lấy ra ngày
      let dateValue = data.getDate();
      // Lấy ra tháng
      let monthValue = data.getMonth() + 1;
      // Lẩy ra năm
      let yearValue = data.getFullYear();

      dateValue = dateValue < 10 ? `0${dateValue}` : dateValue;
      monthValue = monthValue < 10 ? `0${monthValue}` : monthValue;

      this.value = `${yearValue}-${monthValue}-${dateValue}`;
    }
  },
  mounted() {
    if (this.isFocus) {
      this.setFocus();
    }
  },

  data() {
    return {
      value: "",
      department: "",
      invalid: false,
    };
  },
};
</script>
<style scoped>
@import url("../../../style/components/input.css");
</style>
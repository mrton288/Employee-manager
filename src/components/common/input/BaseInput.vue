<template>
  <div class="flex-col">
    <label v-if="label" class="input__label" :title="titleLabel"
      >{{ label }} <span v-if="require" class="required">*</span></label
    >
    <div class="show-tooltip relative">
      <input
        ref="baseinput"
        :class="{ input__error: invalid }"
        class="input"
        :type="typeInput"
        v-model="value"
        :placeholder="plHolder"
        :style="{ width: widthInput }"
      />
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseInput",
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
    titleLabel: {
      type: String,
    },

    plHolder: {
      type: String,
      required: false,
    },
    widthInput: {
      type: String,
      default: "100%",
    },
  },
  watch: {
    /**
     * Thông tin hiển thị trong input khi nhập liệu
     * Author: NVDUC (4/3/2023)
     */
    value: function (newValue) {
      console.log("Thông tin bên trong: ", newValue);
      this.$emit("update:modelValue", newValue);
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
    /**
     * Hàm thực hiện auto focus vào ô input
     * Author: NVDUC (4/3/2023)
     */
    setFocus() {
      this.$nextTick(function () {
        this.$refs["baseinput"].focus();
      });
    },
  },
  created() {
    this.value = this.modelValue;
  },
  mounted() {
    /**
     * Hàm thực hiện set Focus cho thẻ input 1 cách chủ động
     * nếu đặt prop ở input nào sẽ focus ở input đó
     * Author: NVDUC (4/3/2023)
     */
    if (this.isFocus) {
      this.setFocus();
    }
    // value: function (newValue) {
    //   console.log("Thông tin bên trong: ", newValue);

    // fetch(`https://apidemo.laptrinhweb.edu.vn//api/v1/Employees/{id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.employees = data;
    //   });
    // this.$emit("update:modelValue", this.value);
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
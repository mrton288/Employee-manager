<template>
  <div class="flex-col">
    <label v-if="label" class="input__label"
      >{{ label }} <span v-if="require" class="required">*</span></label
    >
    <input
      ref="baseinput"
      :class="{ input__error: invalid }"
      class="input"
      type="text"
      v-model="value"
      @blur="onValidateBlur"
    />
  </div>
</template>
<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: [String, Boolean, Number],
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
      console.log("Thông tin bên trong: ", newValue);
      this.$emit("update:modelValue", newValue);
    },
    // department: function (newValue) {
    //   console.log("Thông tin bên trong của department: ", newValue);
    //   this.$emit("update:departmentValue", newValue);
    // },
  },

  methods: {
    onValidateBlur() {
      if (this.require && !this.value) {
        this.invalid = true;
      } else {
        this.invalid = false;
      }
    },
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
@import url("@/style/components/input.css");
</style>
<template>
  <!-- Form chi tiết -->
  <base-popup
    popupTitle="Thông tin nhân viên"
    object1="Là khách hàng"
    object2="Là nhà cung cấp"
  >
    <!-- popup Body -->
    <div class="popup__body m-top">
      <div class="popup__body-left flex-col">
        <div class="flex gap-8">
          <base-input
            label="Mã"
            v-model="employee.EmployeeCode"
            :require="true"
            ref="txtEmployeeCode"
            class="w-40p"
          >
            <base-tooltip
              v-show="statusTooltip"
              contentTooltip="Mã không được để trống"
              topTooltip="60%"
            ></base-tooltip
          ></base-input>

          <base-input
            label="Tên"
            :class="'w-60p'"
            v-model="employee.FullName"
            :require="true"
            ref="txtEmployeeName"
          >
            <base-tooltip
              v-show="statusTooltip"
              contentTooltip="Tên không được để trống"
              topTooltip="60%"
            ></base-tooltip>
          </base-input>
        </div>

        <!-- Custom combobox -->
        <base-combobox
          label="Đơn vị"
          ref="txtDepartment"
          :require="true"
          v-model="employee.DepartmentName"
          api="https://apidemo.laptrinhweb.edu.vn/api/v1/Departments"
          propText="DepartmentName"
          propValue="DepartmentId"
          :data="[
            'Phòng Kế Toán',
            'Phòng Nhân Sự',
            'Phòng Công Nghệ Thông Tin',
            'Phòng Hành Chính',
          ]"
        >
          <base-tooltip
            contentTooltip="Tên đơn vị không được để trống"
            topTooltip="60%"
          ></base-tooltip>
        </base-combobox>

        <base-input
          label="Chức danh"
          v-model="employee.PositionName"
        ></base-input>
      </div>

      <div class="popup__body-right">
        <div class="flex gap-8">
          <base-date
            label="Ngày sinh"
            v-model="employee.DateOfBirth"
            ref="dateOfBirth"
            typeInput="date"
            class="w-42p"
          ></base-date>
          <div class="flex-col popup__body-">
            <label class="input__label" for="">Giới tính</label>
            <div class="popup__gender flex">
              <label class="input__label radio">
                <input type="radio" name="gender" value="1" />Nam
                <span></span>
              </label>
              <label class="input__label radio">
                <input type="radio" name="gender" value="0" />Nữ
                <span></span>
              </label>
              <label class="input__label radio">
                <input type="radio" name="gender" value="2" />Khác
                <span></span>
              </label>
            </div>
          </div>
        </div>

        <div class="flex gap-8">
          <base-input
            label="Số CMND"
            v-model="employee.IdentityNumber"
            ref="txtIdentityCard"
            class="w-100p"
          >
            <base-tooltip
              contentTooltip="Số không hợp lệ"
              topTooltip="60%"
            ></base-tooltip
          ></base-input>
          <base-date
            label="Ngày cấp"
            v-model="employee.IdentityDate"
            ref="dateRange"
            typeInput="date"
            class="w-42p"
          ></base-date>
        </div>
        <base-input
          label="Nơi cấp"
          v-model="employee.IdentityPlace"
        ></base-input>
      </div>
    </div>
    <div class="contact-info m-top">
      <base-input
        label="Địa chỉ"
        v-model="employee.Address"
        ref="txtAddress"
      ></base-input>

      <div class="flex gap-8">
        <base-input
          titleLabel="Điện thoại di động"
          label="ĐT di động"
          v-model="employee.PhoneNumber"
          ref="txtPhoneNumber"
        >
          <base-tooltip
            contentTooltip="Số không hợp lệ"
            topTooltip="60%"
          ></base-tooltip
        ></base-input>

        <base-input
          label="ĐT cố định"
          v-model="employee.PhoneNumber"
        ></base-input>

        <base-input
          label="Email"
          v-model="employee.Email"
          plHolder="example@gmail.com"
          ref="txtEmail"
        >
          <base-tooltip
            contentTooltip="Email không hợp lệ"
            topTooltip="60%"
          ></base-tooltip>
        </base-input>
      </div>

      <div class="flex gap-8">
        <base-input
          label="Tài khoản ngân hàng"
          v-model="employee.Email"
        ></base-input>
        <base-input label="Tên ngân hàng" v-model="employee.Email"></base-input>
        <base-input label="Chi nhánh" v-model="employee.Email"></base-input>
      </div>
    </div>
  </base-popup>
</template>
<script>
import positionIcon from "@/scripts/resources/positionIcon";
export default {
  name: "EmployeeDetail",
  props: {
    employeeId: String,
    employeeInput: Object,
  },
  components: {},
  watch: {
    /**
     * Thực hiển thay đổi dữ liệu bên ngoài bảng
     * Author: NVDUC (4/3/2023)
     */
    // employee: {
    //   handler: function (newValue) {
    //     console.log("Thông tin bên ngoài: ", newValue.DateOfBirth);
    //   },
    //   deep: true,
    // },
  },

  methods: {
    /**Set focus về vị trí đầu tiên
     * Author : NVDUC (9/3/2023)
     */
    focusFirstInput() {
      this.$refs["txtEmployeeCode"].setFocus();
      // console.log(this.focusFirstInput);
    },
    /**
     * Ẩn form thôn tin nhân viên
     * Author : NVDUC (2/3/2023)
     */
    btnCloseOnClick() {
      const DU_LIEU_MOI = JSON.stringify(this.employee);
      if (DU_LIEU_MOI !== this.DU_LIEU_CU) {
        alert("Dữ liệu đã bị thay đổi ");
      }
      this.$emit("hideMe");
    },

    updateDate(value) {
      // Chuyển đổi chuỗi ngày tháng thành đối tượng Date để cập nhật biến date
      this.date = new Date(value);
    },
    /**
     * Bind dữ liệu ngày sinh
     * Author: ;NVDUC (2/3/2023)
     */

    bindDate(value) {
      //Gán giá trị ngày
      let date = new Date(value);
      //Lấy ra ngày
      let day = date.getDate().toString().padStart(2, "0");
      //Lấy ra tháng
      let month = (date.getMonth() + 1).toString().padStart(2, "0");
      //Lấy ra năm
      let year = date.getFullYear();
      return `${year}-${month}-${day}`;
    },
    save() {
      console.log(this.employee);
    },
  },

  mounted() {
    this.$refs["txtEmployeeCode"].setFocus();
  },

  created() {
    // console.log(this.employeeId);
    // if (this.employeeId) {
    //   var res = await fetch(
    //     `https://apidemo.laptrinhweb.edu.vn/api/v1/Employees/${this.employeeId}`
    //   );
    //   var resJson = await res.json();
    //   this.employee = resJson;
    // this.employeeIdSelected = employee.EmployeeId;
    // this.empSelected = employee;
    // }
    // Lưu trữ dữ liệu ban đầu trước khi bị chỉnh sửa
    // Chuyển dữ liệu hiện tại "Javascript" sang định dạng JSONs
    this.DU_LIEU_CU = JSON.stringify(this.employeeInput);
    // Chuyển dữ liệu từ prop sang data:
    this.employee = this.employeeInput;
    // console.log(typeof this.employee);
  },
  data() {
    return {
      DU_LIEU_CU: null,
      positionIcon,
      date: new Date(),
      arrowdown: require("@/assets/img/downarrow.png"),
      employee: {
        // EmployeeId: "",
        // EmployeeCode: "",
        // FullName: "",
        // DepartmentName: "", // Tên đơn vị
        // PositionName: "", // Chức danh
        // Gender: "",
        // IdentityNumber: "", // CMND
        // IdentityPlace: "", // Nơi cấp
        // PhoneNumber: "",
        // Email: "",
      },
    };
  },
};
</script>
<style>
.txtEmployeeCode {
  width: 50px;
}
</style>
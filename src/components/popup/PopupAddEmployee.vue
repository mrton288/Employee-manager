<template>
  <!-- Form chi tiết -->
  <div class="popup__model" id="form__detail">
    <div class="popup">
      <!-- popup Header -->
      <!-- <div class="popup__content"> -->
      <div class="flex">
        <div class="popup__title">Thông tin nhân viên</div>
        <div class="flex">
          <div class="popup__object">
            <div class="checkbox cbOther">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </div>
            <div class="object__employee ml-12">Là khách hàng</div>
          </div>
          <div class="popup__object">
            <div class="checkbox cbOther">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </div>
            <div class="object__producter ml-12">Là nhà cung cấp</div>
          </div>
        </div>
      </div>

      <div
        class="popup__exit"
        id="btnCancel"
        title=""
        @click="btnCloseOnClick"
      ></div>
      <div class="popup__help" title=""></div>

      <!-- popup Body -->
      <div class="popup__body m-top">
        <div class="popup__body-left flex-col">
          <div class="flex gap-8">
            <base-input
              label="Mã"
              v-model="employee.EmployeeCode"
              :require="true"
              ref="txtEmployeeCode"
            ></base-input>
            <base-input
              label="Tên"
              v-model="employee.FullName"
              :require="true"
              ref="txtEmployeeName"
            ></base-input>
          </div>

          <div class="popup__body-unit flex-col">
            <label class="input__label" for=""
              >Đơn vị <span class="color-red" tabindex="1">*</span></label
            >

            <!-- Custom combobox -->
            <div id="cbxDepartment" class="dropdown input">
              <input
                id="txtDepartment"
                placeholder="Nhập phòng ban"
                v-model="employee.DepartmentName"
              />
              <!-- <datacbx class="menuDd1 hide" id="menuDropdown1"
                ><li class="option1">Phòng Kế Toán</li>
                <li class="option1">Phòng Nhân Sự</li>
                <li class="option1">Phòng Công Nghệ Thông Tin</li>
                <li class="option1">Phòng Hành Chính</li></datacbx
              > -->
              <div class="bgc-arrowdown" id="active1">
                <img :src="arrowdown" id="paging__arrowdown1" />
              </div>
            </div>
          </div>

          <base-input
            label="Chức danh"
            v-model="employee.PositionName"
          ></base-input>
        </div>

        <div class="popup__body-right">
          <div class="flex gap-8">
            <div class="popup__body-dob flex-col">
              <label class="input__label" for="">Ngày sinh</label>
              <input
                class="input"
                type="date"
                id="dateOfBirth"
                v-model="employee.DateOfBirth"
              />
              <!-- v-model="bindDateOfBirth" -->
            </div>
            <div class="flex-col popup__body-">
              <label class="input__label" for="">Giới tính</label>
              <div class="popup__gender flex">
                <label class="input__label radio">
                  <input type="radio" name="gender" value="1" tabindex="1" />Nam
                  <span></span>
                </label>

                <label class="input__label radio">
                  <input type="radio" name="gender" value="0" tabindex="1" />Nữ
                  <span></span>
                </label>
                <label class="input__label radio">
                  <input
                    type="radio"
                    name="gender"
                    value="2"
                    tabindex="1"
                  />Khác
                  <span></span>
                </label>
              </div>
            </div>
          </div>

          <div class="flex gap-8">
            <base-input
              label="Số CMND"
              title="Số chứng minh nhân dân"
              v-model="employee.IdentityNumber"
              ref="txtIdentityCard"
            ></base-input>

            <div class="popup__body-dateRange flex-col">
              <label class="input__label" for="">Ngày cấp</label>
              <input
                class="input"
                type="date"
                id="dateRange"
                v-model="employee.Identity"
              />
            </div>
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
            label="ĐT di động"
            title="Điện thoại di động"
            v-model="employee.PhoneNumber"
            ref="txtPhoneNumber"
          ></base-input>

          <!-- <div class="flex-col w-26percent">
            <label class="input__label" for="" title="Điện thoại cố định"
              >ĐT cố định</label
            >
            <input class="input checkNumber" type="text" id="" />
          </div> -->

          <base-input
            label="ĐT cố định"
            title="Điện thoại cố định"
            v-model="employee.PhoneNumber"
          ></base-input>

          <base-input
            label="Email"
            v-model="employee.Email"
            placeholder="example@gmail.com"
            ref="txtEmail"
          ></base-input>
        </div>

        <div class="flex gap-8">
          <base-input label="Tài khoản ngân hàng" ref="txtEmail"></base-input>

          <base-input label="Tên ngân hàng" ref="txtEmail"></base-input>

          <base-input label="Chi nhánh" ref="txtEmail"></base-input>
        </div>
      </div>
      <!-- </div> -->

      <!-- popup footer -->
      <div class="popup__footer">
        <div class="btn__store">
          <button @submit="saveData()" class="btn__store-sub">Cất</button>
          <button class="btn__store-add">Cất và thêm</button>
        </div>
        <button class="btn__cancel">Huỷ</button>
      </div>
    </div>
  </div>
</template>
<script>
// import Datepicker from "vue-datepicker";
export default {
  name: "PopupAddEmployee",
  props: ["employeeId", "employeeInput"],
  components: {
    // Datepicker,
  },
  watch: {
    /**
     * Hàm nhận id từ bảng nhân viên
     * Author: NVDUC(2/3/2023)
     */
    // employeeId: function (newValue) {
    //   fetch(`https://apidemo.laptrinhweb.edu.vn/api/v1/Employees/${newValue}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       this.employee = data;
    //       // eslint-disable-next-line no-undef
    //       this.employee.DateOfBirth = this.bindDate(data.DateOfBirth);
    //       this.employee.IdentityDate = this.bindDate(data.IdentityDate);
    //     });
    // },
    employee: {
      handler: function (newValue) {
        console.log("Thông tin bên ngoài: ", newValue.EmployeeCode);
      },
      deep: true,
    },
  },

  methods: {
    /**
     * Ẩn form thôn tin nhân viên
     * Author : NVDUC (2/3/2023)
     */
    btnCloseOnClick() {
      const DU_LIEU_MOI = JSON.stringify(this.employee);
      if (DU_LIEU_MOI != this.DU_LIEU_CU) {
        // alert("Dữ liệu đã bị thay đổi ");
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
  },

  mounted() {
    this.$refs["txtEmployeeCode"].setFocus();
  },

  created() {
    // Lưu trữ dữ liệu cũ
    // Chuyển dữ liệu hiện tại "Javascript" sang định dạng JSONs
    // this.DU_LIEU_CU = JSON.stringify(this.employee);
    // Chuyển dữ liệu từ prop sang data:
    this.employee = this.employeeInput;
  },
  data() {
    return {
      date: new Date(),
      arrowdown: require("@/assets/img/downarrow.png"),
      employee: {
        // employeeCode: "",
        FullName: "Nguyễn Văn Đức",
        // departmentName: "", // Tên đơn vị
        PositionName: "Fresher", // Chức danh
        // dataOfBirth: "",
        // gender: "",
        // identityNumber: "", // CMND
        // identityPlace: "", // Nơi cấp
        // phoneNumber: "",
        // email: "",
      },
    };
  },
};
</script>
<style>
</style>
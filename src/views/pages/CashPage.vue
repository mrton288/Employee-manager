<template>
  <div class="cash-page">
    <!-- Content header -->
    <div class="content__header">
      <p class="content__header-title">Nhân viên</p>

      <base-button
        @click="btnAddEmployee"
        name="Thêm mới nhân viên"
        class="btn-main"
      ></base-button>
    </div>

    <PopupAddEmployee
      v-if="isShowPopup"
      @hideMe="hidePopup"
      :employeeId="employeeIdSelected"
      :employeeInput="empSelected"
    />

    <!-- Content body -->
    <div class="content__body">
      <div class="content__body-uptable">
        <div class="content__body-search">
          <input
            class="search-text input"
            type="text"
            placeholder="Tìm theo mã, tên nhân viên"
          />
          <div class="search-icon"></div>
        </div>
        <div class="content__body-reload"></div>
      </div>
      <!-- Bảng danh sách nhân viên -->
      <TableEmployee></TableEmployee>
      <div class="content__body-footer">
        <p class="footer__total">Tổng số: <strong>1035</strong> bản ghi</p>
        <div class="footer__paging">
          <div class="dropdown input" id="d-select">
            <div id="dropdown__select">
              <div class="selected">20 bản ghi trên 1 trang</div>
            </div>
            <ul class="menuDd hide" id="menuDropdown">
              <li class="option">10 bản ghi trên 1 trang</li>
              <li class="option">20 bản ghi trên 1 trang</li>
              <li class="option">30 bản ghi trên 1 trang</li>
              <li class="option">50 bản ghi trên 1 trang</li>
              <li class="option">100 bản ghi trên 1 trang</li>
            </ul>
            <div class="bgc-arrowdown" id="active">
              <img id="paging__arrowdown" :src="arrowdown" />
            </div>
          </div>
          <div class="paging__switch">
            <div class="switch__prev">Trước</div>
            <div class="switch__number switch__number-selected">1</div>
            <div class="switch__number">2</div>
            <div class="switch__number">3</div>
            <p class="more_number">...</p>
            <div class="switch__number">52</div>
            <div class="switch__next">Sau</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopupAddEmployee from "../../views/employee/PopupAddEmployee.vue";
import TableEmployee from "../../views/employee/TableEmployee.vue";
export default {
  name: "CashPage",
  components: {
    PopupAddEmployee,
    TableEmployee,
  },
  // Dùng để nhận dữ liệu từ ngoài vào, Không thể thay đổi được
  props: [""],
  created() {},
  methods: {
    /**
     * Thực hiện hiển thị form
     * Author: NVDUC(2/3/2023)
     */
    showPopup() {
      this.isShowPopup = true;
    },
    /**
     * Thực hiện ẩn form
     * Author: NVDUC(2/3/2023)
     */
    hidePopup() {
      this.isShowPopup = false;
    },
    /**
     * Hiển thị form chi tiết nhân viên
     * Author: NVDUC (28/2/2023)
     */
    btnAddEmployee() {
      this.isShowPopup = true;
    },

    /**
     * Validate số CMND
     * Author: NVDUC (1/3/2023)
     */
    isIdentityNumber(value) {
      let temp = /(([0-9]{9,12})\b)/;
      return temp.test(value);
    },

    /**
     * Thực hiện validate dữ liệu trên form Thông tin nhân viên
     * Author: NVDUC (1/3/2023)
     */
    // thực hiện gán lại thông báo error khi đã có dữ liệu
    // validate() {
    //   this.errors = {
    //     employeeCode: "",
    //     fullName: "",
    //     departmentName: "", // Tên đơn vị
    //     positionName: "", // Chức danh
    //     dataOfBirth: "",
    //     gender: "",
    //     identityNumber: "", // CMND
    //     identityPlace: "", // Nơi cấp
    //     phoneNumber: "",
    //     email: "",
    //   };
    //   if (!this.employee.employeeCode) {
    //     this.errors.employeeCode = Message.MessageEmployee.Code;
    //   }
    //   if (!this.employee.fullName) {
    //     this.errors.fullName = Message.MessageEmployee.Name;
    //   }
    //   if (!this.employee.departmentName) {
    //     this.errors.departmentName = Message.MessageEmployee.DepartmentName;
    //   }
    //   if (!this.isIdentityNumber(this.employee.identityNumber)) {
    //     this.errors.identityNumber = Message.MessageEmployee.IdentityNumber;
    //   }
    // },
  },

  mounted() {},
  data() {
    return {
      empSelected: {},
      employees: [],
      employeeIdSelected: null,
      isShowPopup: false,
      arrowdown: require("@/assets/img/downarrow.png"),
      /**
       * Dùng để chứa các lỗi
       */
      errors: {
        employeeCode: "",
        fullName: "",
        departmentName: "", // Tên đơn vị
        positionName: "", // Chức danh
        dataOfBirth: "",
        gender: "",
        identityNumber: "", // CMND
        identityPlace: "", // Nơi cấp
        phoneNumber: "",
        email: "",
      },

      /**
       * Dùng để chứa thông tin bảng nhân viên
       */
      employee: {
        employeeCode: "",
        fullName: "",
        departmentName: "", // Tên đơn vị
        positionName: "", // Chức danh
        dataOfBirth: "",
        gender: "",
        identityNumber: "", // CMND
        identityPlace: "", // Nơi cấp
        phoneNumber: "",
        email: "",
      },
    };
  },
};
</script>
<style scoped>
.abstract-page {
  height: calc(100vh - 56px);
  align-items: center;
  font-size: 30px;
}
</style>
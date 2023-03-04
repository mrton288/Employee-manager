<template>
  <div class="content">
    <!-- Content header -->
    <div class="content__header">
      <p class="content__header-title">Nhân viên</p>
      <button @click="btnAddEmployee" class="content__header-add">
        Thêm mới nhân viên
      </button>
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
      <div class="content__body-table">
        <table id="tableEmployee">
          <thead>
            <tr>
              <th class="text__algin-left" type="checkbox">
                <div class="checkbox select-all">
                  <input type="checkbox" id="checkAll" />
                  <span class="checkmark"></span>
                </div>
              </th>
              <th class="text__algin-left" model-name="EmployeeCode">
                MÃ NHÂN VIÊN
              </th>
              <th class="text__algin-left" model-name="FullName">
                TÊN NHÂN VIÊN
              </th>
              <th class="text__algin-left" model-name="Gender">GIỚI TÍNH</th>
              <th class="text__align-center" model-name="DateOfBirth">
                NGÀY SINH
              </th>
              <th
                class="text__algin-left"
                title="Số chứng minh nhân dân"
                model-name="IdentityNumber"
              >
                SỐ CMND
              </th>
              <th class="text__algin-left" model-name="IdentityPlace">
                NƠI CẤP
              </th>
              <th
                class="text__algin-left"
                title="Điện thoại di động"
                model-name="PhoneNumber"
              >
                ĐT DI ĐỘNG
              </th>
              <th class="text__algin-left" model-name="Email">EMAIL</th>
              <th class="text__algin-left" model-name="PositionName">
                CHỨC DANH
              </th>
              <th class="text__algin-left" model-name="DepartmentName">
                TÊN ĐƠN VỊ
              </th>
              <th class="text__align-right" model-name="Salary">LƯƠNG</th>
              <th class="text__align-center" model-name="" type="editfunction">
                CHỨC NĂNG
              </th>
            </tr>
          </thead>
          <tbody class="content__scroll">
            <tr
              @dblclick="rowOnDblclick(item)"
              v-for="(item, index) in employees"
              :key="index"
            >
              <td>
                <div class="checkbox">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </div>
              </td>
              <td class="text__algin-left">{{ item.EmployeeCode }}</td>
              <td class="text__algin-left">{{ item.FullName }}</td>
              <td class="text__algin-left">{{ formatGender(item.Gender) }}</td>
              <td class="text__algin-center">
                {{ formatDateOfBirth(item.DateOfBirth) }}
              </td>
              <td class="text__algin-left">{{ item.IdentityNumber }}</td>
              <td class="text__algin-left">{{ item.IdentityPlace }}</td>
              <td class="text__algin-left">{{ item.PhoneNumber }}</td>
              <td class="text__algin-left">{{ item.Email }}</td>
              <td class="text__algin-left">{{ item.PositionName }}</td>
              <td class="text__algin-left">{{ item.DepartmentName }}</td>
              <td class="text__align-right">{{ formatMoney(item.Salary) }}</td>
              <td>
                <div class="edit__function">
                  <button @click="btnEditFunction(item)" class="edit__button">
                    Sửa
                  </button>
                  <div class="edit__arrowdown" id="target__edit"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Content footer -->

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
import PopupAddEmployee from "../popup/PopupAddEmployee.vue";
import MISAEnum from "../../scripts/enum/enum.js";
import MISA from "../../scripts/resources/info.js";
// import TableEmployee from "../table/TableEmployee.vue";
// import toolTip from "../../scripts/resources/toolTip.js";
import Message from "../../scripts/resources/message.js";

export default {
  name: "TheContent",
  components: {
    PopupAddEmployee,
    // TableEmployee,
  },
  // Dùng để nhận dữ liệu từ ngoài vào, Không thể thay đổi được
  props: [""],
  created() {
    fetch("https://apidemo.laptrinhweb.edu.vn/api/v1/Employees/")
      .then((res) => res.json())
      .then((data) => {
        this.employees = data;
      });
  },
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
     * Click đúp chuột thì hiển thị form chi tiết
     * Author: NVDUC (2/3/2023)
     */
    rowOnDblclick(employee) {
      this.isShowPopup = true;
      this.employeeIdSelected = employee.EmployeeId;
      this.empSelected = employee;
    },
    /**
     * Hàm xử lý gender ra data cho table
     */
    formatData(col, data) {
      switch (col.formatType) {
        case "Decimal":
          break;
        case "Date":
          return this.formatDateOfBirth(data);
        default:
          return data;
      }
    },
    /**
     * Định dạng ngày sinh dd/mm/yy
     * Author: NVDUC (28/2/2023)
     */
    formatDateOfBirth(data) {
      try {
        data = new Date(data);
        // Lấy ra ngày
        let dateValue = data.getDate();
        // Lấy ra tháng
        let monthValue = data.getMonth() + 1;
        // Lẩy ra năm
        let yearValue = data.getFullYear();
        if (dateValue < 10) {
          dateValue = `0${dateValue}`;
        }
        if (monthValue < 10) {
          monthValue = `0${monthValue}`;
        }
        return `${dateValue}/${monthValue}/${yearValue}`;
      } catch (error) {
        return error;
      }
    },

    /**
     * Định dạng lương hiển thị theo VND
     * Author: NVDUC (28/2/2023)
     */
    formatMoney(data) {
      try {
        const config = {
          style: "currency",
          currency: "VND",
          maximumFractionDigits: 9,
        };
        const formated = new Intl.NumberFormat("vi-VN", config).format(data);
        return formated;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hiển thị ra giới tính từ dữ liệu
     * Author: NVDUC (28/2/2023)
     */
    formatGender(data) {
      try {
        switch (data) {
          case MISAEnum.Gender.Female:
            return MISA.TextGender.Female;
          case MISAEnum.Gender.Male:
            return MISA.TextGender.Male;
          case MISAEnum.Gender.Other:
            return MISA.TextGender.Other;
          default:
            break;
        }
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Thực hiện validate dữ liệu trên form Thông tin nhân viên
     * Author: NVDUC (1/3/2023)
     */
    validate() {
      // thực hiện gán lại thông báo error khi đã có dữ liệu
      this.errors = {
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
      };
      if (!this.employee.employeeCode) {
        this.errors.employeeCode = Message.MessageEmployee.Code;
      }
      if (!this.employee.fullName) {
        this.errors.fullName = Message.MessageEmployee.Name;
      }
      if (!this.employee.departmentName) {
        this.errors.departmentName = Message.MessageEmployee.DepartmentName;
      }
      if (!this.isIdentityNumber(this.employee.identityNumber)) {
        this.errors.identityNumber = Message.MessageEmployee.IdentityNumber;
      }
    },
    save() {
      alert("Hello");
      console.log("hello");
    },
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
  // methods: {},
};
</script>

<style></style>

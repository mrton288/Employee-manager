<template>
  <div class="cash-page">
    <!-- Dialog -->
    <!-- <base-dialog
      description="Mã nhân viên &lt;NV-001&gt; đã tồn tại trong hệ thống, vui lòng kiểm tra lại"
      :justifyContent="'justify-center'"
    >
      <template v-slot:icon
        ><base-icon size="s-icon-36" :bgcPosition="dialog.warning"></base-icon
      ></template>
      <template v-slot:button
        ><base-button class="btn-main" name="Đồng ý"></base-button
      ></template>
    </base-dialog> -->
    <base-dropdown
      :option="isShowOptionFunction"
      @showOption="toggleFunction"
    ></base-dropdown>
    <!-- Toast message -->

    <base-toast
      v-if="isToast"
      textStatus="Thành Công!"
      textExplain="Công việc bị đã bị
          xoá"
      additional="Hoàn tác"
      colorStatus="var(--color-green-base)"
    >
      <base-icon
        :size="'icon-20'"
        :bgcPosition="positionIcon.iconSuccess"
      ></base-icon>
      <template v-slot:icon1>
        <base-icon
          :size="'icon-12'"
          :bgcPosition="positionIcon.exitToast"
        ></base-icon>
      </template>
    </base-toast>
    <!--  -->
    <EmployeeDetail
      v-if="isShowPopup"
      @hideMe="hidePopup"
      :employeeId="employeeIdSelected"
      :employeeInput="employeeSelected"
    />
    <!-- Content header -->
    <div class="content__header">
      <p class="content__header-title">Nhân viên</p>

      <base-button
        @click="btnAddEmployee"
        name="Thêm mới nhân viên"
        class="btn-main"
      ></base-button>
    </div>

    <!--  -->
    <div class="content__body">
      <div class="flex justify-between aligin-center">
        <div class="uptable__left">
          <base-button
            name="Thực hiện hàng loạt"
            :marginIcon="'mr-10'"
            rounded="50px"
          >
            <base-icon
              :handleClick="showDeleteAll"
              :bgcPosition="positionIcon.arrowdown"
              :size="'icon-arrowdown'"
            ></base-icon>
          </base-button>
        </div>
        <div class="uptable__right">
          <base-input
            widthInput="260px"
            v-model="employee.FullName"
            plHolder="Tìm theo mã, tên nhân viên"
          >
            <div class="show-tooltip absolute search-icon-tooltip s-icon-24">
              <base-icon :bgcPosition="positionIcon.content.search"></base-icon>
              <base-tooltip contentTooltip="Tìm kiếm"></base-tooltip>
            </div>
          </base-input>
          <div class="show-tooltip relative">
            <base-icon :bgcPosition="positionIcon.content.reload"></base-icon>
            <base-tooltip contentTooltip="Tải lại"></base-tooltip>
          </div>
        </div>
      </div>
      <!-- Bảng danh sách nhân viên-->
      <base-table
        :columns="this.employeeTitle"
        :data="this.employees"
        hasWidget="CHỨC NĂNG"
        @showMe="showPopup"
      >
      </base-table>

      <!-- Footer table -->
      <div class="content__body-footer">
        <p class="footer__total">Tổng số: <strong>1035</strong> bản ghi</p>
        <div class="footer__paging">
          <!-- Dropdown -->
          <base-combobox
            ref="inputRecordNumber"
            :data="recordNumber"
            otherTop="-184px"
          ></base-combobox>
          <!-- Paging -->
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
import EmployeeDetail from "@/views/employee/EmployeeDetail.vue";
import positionIcon from "@/scripts/resources/positionIcon";

export default {
  name: "CashPage",
  props: {
    // employeeIdSelected: String,
    // empSelected: String,
  },
  components: {
    EmployeeDetail,
  },
  created() {
    fetch("https://apidemo.laptrinhweb.edu.vn/api/v1/Employees/")
      .then((res) => res.json())
      .then((data) => {
        this.employees = data;
        // this.employeeIdSelected = employee.EmployeeId;
      });
  },

  watch: {},
  methods: {
    /**
     * Click đúp chuột thì hiển thị form chi tiết
     * Author: NVDUC (2/3/2023)
     */
    // rowOnDblclick(employee) {
    //   this.isShowPopup = true;
    //   this.employeeIdSelected = employee.EmployeeId;
    //   this.empSelected = employee;
    // },
    /**
     * Thực hiện hiển thị form
     * Author: NVDUC(2/3/2023)
     */
    showPopup(item) {
      this.isShowPopup = true;
      this.employeeIdSelected = item.EmployeeId;
      this.employeeSelected = item;
    },
    /**
     * Thực hiện hiển thị option ở ô "sửa"
     * Author: NVDUC(10/3/2023)
     */
    toggleFunction() {
      this.isShowOptionFunction = !this.isShowOptionFunction;
    },
    /**
     * Thực hiện ẩn form
     * Author: NVDUC(2/3/2023)s
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
  },

  mounted() {},
  data() {
    return {
      isShowOptionFunction: false,
      positionIcon,
      employeeSelected: {}, // Lưu thông tin của employee vừa chọn
      employeeIdSelected: null, // Lưu id của employee vừa chọn
      employees: [], // Lưu các đối tượng employee hiện tại
      recordNumber: [
        "10 bản ghi trên 1 trang",
        "20 bản ghi trên 1 trang",
        "30 bản ghi trên 1 trang",
        "50 bản ghi trên 1 trang",
        "100 bản ghi trên 1 trang",
      ],
      employeeTitle: [
        {
          title: "MÃ NHÂN VIÊN",
          modelName: "EmployeeCode",
          width: "w-200",
        },
        {
          title: "TÊN NHÂN VIÊN",
          modelName: "FullName",
          width: "w-200",
        },
        {
          title: "GIỚI TÍNH",
          modelName: "Gender",
          width: "w-200",
        },
        {
          title: "NGÀY SINH",
          modelName: "DateOfBirth",
          textAlign: "text__algin-center",
          width: "w-200",
        },
        {
          title: "SỐ CMND",
          modelName: "IdentityNumber",
          toolTip: "Số chứng minh nhân dân",
        },
        {
          title: "NƠI CẤP",
          modelName: "IdentityPlace",
          width: "w-200",
        },
        {
          title: "ĐT DI ĐỘNG",
          modelName: "PhoneNumber",
          toolTip: "Điện thoại di động",
          width: "w-200",
        },
        {
          title: "EMAIL",
          modelName: "Email",
          width: "w-260",
        },
        {
          title: "CHỨC DANH",
          modelName: "PositionName",
          width: "w-200",
        },
        {
          title: "TÊN ĐƠN VỊ",
          modelName: "DepartmentName",
          width: "w-200",
        },
        {
          title: "LƯƠNG",
          modelName: "Salary",
          textAlign: "text__algin-right",
          width: "w-200",
        },
      ],
      isShowPopup: false,
      arrowdown: require("@/assets/img/downarrow.png"),
      employee: {
        EmployeeId: "",
        EmployeeCode: "",
        FullName: "",
        DepartmentName: "", // Tên đơn vị
        PositionName: "Fresher", // Chức danh
        DataOfBirth: "",
        Gender: "",
        IdentityNumber: "", // CMND
        IdentityPlace: "", // Nơi cấp
        PhoneNumber: "",
        Email: "",
      },
    };
  },
};
</script>
<style scoped>
/* .abstract-page {
  height: calc(100vh - 56px);
  align-items: center;
  font-size: 30px;
} */
</style>
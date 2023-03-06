<template>
  <div class="content__body-table">
    <!-- Custom table -->
    <table>
      <thead>
        <tr>
          <th v-if="hasCheckbox">
            <!-- Custom checkbox -->
            <div class="checkbox select-all">
              <input type="checkbox" id="checkAll" />
              <span class="checkmark"></span>
            </div>
          </th>
          <th v-for="(col, index) in columns" :key="index">
            {{ col.title }}
          </th>
          <th v-if="hasWidget">{{ hasWidget }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, indexItem) in data" :key="indexItem">
          <td v-if="hasCheckbox">
            <!-- Custom checkbox -->
            <div class="checkbox select-all">
              <input type="checkbox" id="checkAll" />
              <span class="checkmark"></span>
            </div>
          </td>
          <td v-for="(col, indexCol) in columns" :key="indexCol">
            {{ formatData(item[col.modelName], col.modelName) }}
          </td>
          <td v-if="hasWidget">
            <div class="edit__function">
              <button @click="btnEditForm" class="edit__button">Sửa</button>
              <div class="edit__arrowdown" id="target__edit"></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Phân trang -->
    <div v-if="pagination"></div>
  </div>
</template>
<script>
import MISAEnum from "../../scripts/enum/enum.js";
import MISA from "../../scripts/resources/info.js";
export default {
  name: "BaseTable",
  components: {},
  props: {
    /**
     * Danh sách cấu hình cột của table 
     * gồm các thuộc tính 
     * title : 
        width: 
        data-field:
        formatType:  tiền, số , chữ, enum
        enumName: tên enum để gender ra dữ liệu
        dataAlign: căn chỉnh 
        sortable: cho phép sắp xếp hay ko 

     */

    columns: {
      type: Array,
    },

    data: {
      type: Array,
    },

    dataField: {
      type: Array,
      required: true,
    },

    hasCheckbox: {
      type: Boolean,
      default: true,
    },
    /**
     * Có cột chức năng không
     */
    hasWidget: {
      type: String,
      required: false,
      default: "",
    },

    // toolTip

    /**
     * Có phân trang không
     */
    pagination: {},

    btnEditForm: {
      type: Function,
      default: () => {},
    },
  },

  methods: {
    /**
     * Hàm xử lý data cho table
     * Author: NVDUC (5/3/2023)
     */
    formatData(data, dataField) {
      switch (dataField) {
        case "Salary":
          return this.formatMoney(data);
        case "DateOfBirth":
          return this.formatDateOfBirth(data);
        case "Gender":
          return this.formatGender(data);
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
     * Bind dữ liệu khi click vào sửa
     * Author: NVDUC (1/3/2023)
     */
    //   btnEditFunction(data) {
    //     this.employeeItem.employeeCode = data.EmployeeCode;
    //     this.employeeItem.fullName = data.FullName;
    //     this.employeeItem.departmentName = data.DepartmentName;
    //     this.employeeItem.positionName = data.PositionName;
    //     this.employeeItem.dataOfBirth = data.DataOfBirth;
    //     this.employeeItem.gender = data.Gender;
    //     this.employeeItem.identityNumber = data.IdentityNumber;
    //     this.employeeItem.identityPlace = data.IdentityPlace;
    //     this.employeeItem.phoneNumber = data.PhoneNumber;
    //     this.employeeItem.email = data.Email;
    //   },
    // },
  },
};
</script>
<style>
</style>
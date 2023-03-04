<template>
  <div>
    <!-- Custom table -->
    <table>
      <thead>
        <tr>
          <th v-if="hasCheckbox"></th>
          <th v-for="(col, index) in columns" :key="index">
            {{ col.title }}
          </th>
          <th v-if="hasWiget">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, indexItem) in data" :key="indexItem">
          <td v-if="hasCheckbox"></td>

          <td v-for="(col, indexCol) in columns" :key="indexCol">
            {{ formatData(col, item[col.dataField]) }}
          </td>
          <td v-if="hasWiget"></td>
        </tr>
      </tbody>
    </table>
    <!-- Phân trang -->
    <div v-if="pagination"></div>
  </div>
</template>

<script>
export default {
  name: "TableEmployee",
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
    // dbcShow: {
    //   type: Boolean,
    // },
    columns: {
      type: Array,
    },

    data: {
      type: Array,
    },

    hasCheckbox: {
      type: Boolean,
    },
    /**
     * Có cột chức năng không
     */
    hasWiget: {},

    /**
     * Có phân trang không
     */
    pagination: {},
  },

  methods: {
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
  data() {
    return {};
  },
};
</script>
<style>
</style>
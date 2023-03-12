<template>
  <base-table
    :columns="this.employeeTitle"
    :data="this.employees"
    hasWidget="CHỨC NĂNG"
    :btnEditForm="rowOnDblclick(this.employees)"
  ></base-table>
</template>

<script>
export default {
  name: "EmployeeTable",
  components: {},
  created() {
    fetch("https://apidemo.laptrinhweb.edu.vn/api/v1/Employees/")
      .then((res) => res.json())
      .then((data) => {
        this.employees = data;
      });
  },

  watch: {
    // employees: function (newValue) {
    //   console.log(newValue);
    // },
  },
  methods: {
    /**
     * Click đúp chuột thì hiển thị form chi tiết
     * Author: NVDUC (2/3/2023)
     */
    rowOnDblclick(employee) {
      this.isShowPopup = true;
      this.employeeIdSelected = employee.EmployeeId;
      this.empSelected = employee;
    },
  },

  data() {
    return {
      employees: [],
      employeeTitle: [
        {
          title: "MÃ NHÂN VIÊN",
          modelName: "EmployeeCode",
        },
        {
          title: "TÊN NHÂN VIÊN",
          modelName: "FullName",
        },
        {
          title: "GIỚI TÍNH",
          modelName: "Gender",
        },
        {
          title: "NGÀY SINH",
          modelName: "DateOfBirth",
        },
        {
          title: "SỐ CMND",
          modelName: "IdentityNumber",
          toolTip: "Số chứng minh nhân dân",
        },
        {
          title: "NƠI CẤP",
          modelName: "IdentityPlace",
        },
        {
          title: "ĐT DI ĐỘNG",
          modelName: "PhoneNumber",
          toolTip: "Điện thoại di động",
        },
        {
          title: "EMAIL",
          modelName: "Email",
        },
        {
          title: "CHỨC DANH",
          modelName: "PositionName",
        },
        {
          title: "TÊN ĐƠN VỊ",
          modelName: "DepartmentName",
        },
        {
          title: "LƯƠNG",
          modelName: "Salary",
        },
      ],
    };
  },
};
</script>
<style>
</style>
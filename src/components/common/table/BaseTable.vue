<template>
  <div class="content__body-table">
    <!-- Custom table -->
    <!-- <base-loading v-if="!isShowLoading"></base-loading> -->
    <table>
      <thead>
        <tr>
          <th v-if="hasCheckbox">
            <base-checkbox></base-checkbox>
          </th>
          <th
            v-for="(col, index) in columns"
            :key="index"
            :class="col.textAlign"
          >
            {{ col.title }}
          </th>
          <th v-if="hasWidget">{{ hasWidget }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, indexItem) in data"
          :key="indexItem"
          @dblclick="handleDisplay(item)"
        >
          <td v-if="hasCheckbox">
            <base-checkbox></base-checkbox>
          </td>
          <td
            v-for="(col, indexCol) in columns"
            :key="indexCol"
            :class="col.textAlign"
          >
            <!-- <span class="show-tooltip relative"> -->
            {{ formatData(item[col.modelName], col.modelName) }}
            <!-- <base-tooltip
                :contentTooltip="formatData(item[col.modelName], col.modelName)"
              ></base-tooltip>
            </span> -->
          </td>
          <!-- Hiển thị editfunction -->
          <td v-if="hasWidget">
            <!-- Nút chức năng -->
            <div class="edit__function">
              <button class="edit__button" @click="handleDisplay">Sửa</button>
              <base-icon
                class="edit__arrowdown"
                :bgcPosition="positionIcon.editArrowdown"
                :class="'icon-arrowdown2'"
                @click="displayFunction"
                ref=""
              ></base-icon>
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
import MISAEnum from "@/scripts/enums/enum.js";
import MISA from "@/scripts/resources/info.js";
import positionIcon from "@/scripts/resources/positionIcon";
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
    /**
     * Có phân trang không
     */
    pagination: {},
  },

  methods: {
    /**
     * Thực hiện hiển thị option ở ô "sửa"
     * Author: NVDUC(10/3/2023)
     */
    displayFunction() {
      this.$emit("showOption");
    },
    /**
     * Click chuột thì hiển thị form chi tiết
     * idSelected: Lưu id của employee vừa chọn
     * Author: NVDUC (2/3/2023)
     */
    handleDisplay(item) {
      this.$emit("showMe", item);
    },
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
  },
  data() {
    return {
      positionIcon,
    };
  },
};
</script>
<style>
.edit__function {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
}

.edit__button {
  color: #639ec8;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.edit__arrowdown {
  position: relative;
  padding: 10px 10px;
  border: 1px solid transparent;
}

.edit__arrowdown-border {
  border: 1px solid #0075c0;
}
</style>
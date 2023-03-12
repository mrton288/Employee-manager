<template>
  <div class="menu">
    <div class="menu__header">
      <div class="menu__icon"></div>
      <img class="menu__logo" :src="logo" alt="Logo" />
    </div>
    <div class="menu__body">
      <div v-for="item in menuItem" :key="item.title">
        <menu-item
          :class="{ active: this.currentPath === item.path }"
          :bgcPosition="item.position"
          :content="item.title"
          :pathString="item.path"
          v-bind="item"
          @click="changeCurrentPath(item.path)"
        >
        </menu-item>
      </div>
    </div>
  </div>
</template>
<script>
import MenuItem from "../common/menuitem/MenuItem.vue";
export default {
  name: "TheMenu",
  components: {
    MenuItem,
  },
  watch: {
    menuItem: function (params) {
      console.log(params);
    },
  },
  methods: {
    /**
     *  Thay đổi currentPath nhận path mới
     *  -> active đúng item trên menu
     *  Author: NVDUC (6/3/2023)
     */
    changeCurrentPath(path) {
      this.currentPath = path;
    },
  },
  created() {
    this.currentPath = "/" + location.href.split("/")[2];
  },
  data() {
    return {
      currentPath: "",
      menuItem: [
        {
          title: "Tổng quan",
          position: "-30px -1630px",
          path: "/abstract",
        },
        {
          title: "Tiền mặt",
          position: "-73px -1628px",
          path: "/",
        },
        {
          title: "Tiền gửi",
          position: "-117px -1628px",
          path: "/deposit",
        },
        {
          title: "Mua hàng",
          position: "-161px -1628px",
          path: "/deposit",
        },
        {
          title: "Bán hàng",
          position: "-204px -1628px",
          path: "/deposit",
        },
        {
          title: "Quản lý hoá đơn",
          position: "-249px -1628px",
          path: "/deposit",
        },
        {
          title: "Kho",
          position: "-291px -1628px",
          path: "/deposit",
        },
        {
          title: "Công cụ dụng cụ",
          position: "-335px -1630px",
          path: "/deposit",
        },
        {
          title: "Tài sản cố định",
          position: "-378px -1630px",
          path: "/deposit",
        },
        {
          title: "Thuế",
          position: "-423px -1630px",
          path: "/deposit",
        },
        {
          title: "Giá thành",
          position: "-467px -1628px",
          path: "/deposit",
        },

        {
          title: "Tổng hợp",
          position: "-510px -1628px",
          path: "/deposit",
        },
        {
          title: "Ngân sách",
          position: "-378px -1659px",
          path: "/deposit",
        },
        {
          title: "Báo cáo",
          position: "-547px -1628px",
          path: "/deposit",
        },
        {
          title: "Phân tích tài chính",
          position: "-204px -1664px",
          path: "/deposit",
        },
      ],
      logo: require("@/assets/img/Logo_Module_TiengViet_White.66947422.svg"),
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

.menu {
  height: 100vh;
  width: 200px;
  background-color: #38393d;
}

.menu__header {
  display: flex;
  align-items: center;
  height: 56px;
}

.menu__header:hover {
  cursor: pointer;
}

.menu__icon {
  background: url("/src/assets/img/Sprites.64af8f61.svg") no-repeat -424px -86px;
  width: 24px;
  height: 24px;
  margin-left: 16px;
}

.menu__logo {
  height: 36px;
  margin-left: 16px;
}

.menu__body {
  height: calc(100vh - 56px);
  color: #fff;
  overflow: auto;
  word-wrap: unset;
  min-width: 200px;
}
</style>

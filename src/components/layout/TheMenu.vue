<template>
  <div class="menu">
    <div class="menu__header">
      <div class="menu__icon"></div>
      <img class="menu__logo" :src="logo" alt="Logo" />
    </div>
    <div class="menu__body">
      <div class="menu__body-item bgc-selected">
        <div class="menu__body-logo-item1"></div>
        <div class="menu__body-content">Tổng quan</div>
      </div>

      <div class="menu__body-item">
        <div class="menu__body-logo-item2"></div>
        <div class="menu__body-content">Tiền mặt</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item3"></div>
        <div class="menu__body-content">Tiền gửi</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item4"></div>
        <div class="menu__body-content">Mua hàng</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item5"></div>
        <div class="menu__body-content">Bán hàng</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item6"></div>
        <div class="menu__body-content">Quản lý hoá đơn</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item7"></div>
        <div class="menu__body-content">Kho</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item8"></div>
        <div class="menu__body-content">Công cụ dụng cụ</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item9"></div>
        <div class="menu__body-content">Tài sản cố định</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item10"></div>
        <div class="menu__body-content">Thuế</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item11"></div>
        <div class="menu__body-content">Giá thành</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item12"></div>
        <div class="menu__body-content">Tổng hợp</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item13"></div>
        <div class="menu__body-content">Ngân sách</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item14"></div>
        <div class="menu__body-content">Báo cáo</div>
      </div>
      <div class="menu__body-item">
        <div class="menu__body-logo-item15"></div>
        <div class="menu__body-content">Phân tích tài chính</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheMenu",
  data() {
    return {
      logo: require("@/assets/img/Logo_Module_TiengViet_White.66947422.svg"),
    };
  },
};
</script>

<style></style>

<template>
  <div>
    <!-- Toast message -->

    <!-- Toast success -->
    <div class="toast__success">
      <div class="toast__left">
        <div class="toast__icon"></div>
        <p class="toast__text">
          <strong class="text-success">Thành Công! </strong>Công việc bị đã bị
          xoá
        </p>
      </div>
      <div class="toast__right">
        <div class="toast__additional">Hoàn tác</div>
        <div class="toast__exit"></div>
      </div>
    </div>

    <!-- Toast warning -->
    <div class="toast__wraning">
      <div class="toast__left">
        <div class="toast__icon-warning"></div>
        <p class="toast__text">
          <strong class="text-warning">Cảnh báo! </strong>Dữ liệu của bạn đã bị
          thay đổi bởi người dùng khác
        </p>
      </div>
      <div class="toast__exit"></div>
    </div>

    <!-- Toast error -->
    <div class="toast__error">
      <div class="toast__left">
        <div class="toast__icon-error"></div>
        <p class="toast__text-error">
          <strong class="text-error">Lỗi! </strong>Không thể cập nhật được dữ
          liệu. Vui lòng kiểm tra lại kết nối internet <br /><span
            class="toast__additional"
            >Xem hướng dẫn</span
          >
        </p>
      </div>
      <div class="toast__exit"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>
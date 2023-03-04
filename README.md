## Cấu trúc thư mục

-   scr: source code:
    -   main.js: file goc
    -   App.vue: component goc
    -   assets: hinh anh, font chu,
    -   components: chua cac component con

1. Components

-   3 thành phần:
    -   Template : html
    -   Script: js
    -   style: css
        -   Hỗ trợ scss
        -   scoped style: style dành riêng cho components

2. Tạo components

    - Tạo file .vue
    - import
    - Khai báo

3. Root element:
    - Bắt buộc
4. Two ways binding:
    - Bind dữ liệu 2 chiều

-   Phụ thuộc vào kiểu element

-   Lifecycle : Vòng đời của componnet trong Vue

-   Binding:
    -   value binding: {{ }}
    -   property binding:
    -   v-bind: [ten thuoc tinh]= "bien"
        -   viết tắt: dấu 2 chấm .........Vd: :class="isShow"
    -   style and class binding:
        :class
-   Model:
    -   Liên kết element với property
-   Event handling:
    -   Bắt sự kiện từ các element
    -   v-on: [tên sự kiện] = "jfdah"
        -   viết tắt: @ ...... Vd: @click="increment"
    -   Prevent default event:
        -   Huỷ bỏ event mặc định của element đi
-   ref: Ánh xạ đến element hiện tại ............. this.$refs.(refname)

*

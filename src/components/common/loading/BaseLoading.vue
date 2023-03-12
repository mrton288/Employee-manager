<template>
  <div class="loading">
    <img class="img-loading" src="@/assets/loading.svg" alt="" />
  </div>
</template>
<script>
export default {};
</script>
<style>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #0000004f;
}

@-webkit-keyframes rotateCircle {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
  }
}
/* Standard syntax */
@keyframes rotateCircle {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
  }
}

.img-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotateCircle 2s linear 0s infinite;
  -webkit-animation: rotateCircle 2s linear 0s infinite;
  -moz-animation: rotateCircle 2s linear 0s infinite;
  -o-animation: rotateCircle 2s linear 0s infinite;
}
</style>
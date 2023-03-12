<template>
  <div class="checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
  </div>
</template>
<script>
export default {};
</script>
<style>
/* The container */
.checkbox {
  position: relative;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 3px;
}

/* Hide the browser's default checkbox */
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 1;
  margin: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
  background-color: white;
  border: 1px solid var(--color-green-base);
}

/* .checkbox input:checked > td {
  background-color: #f7f7f7;
} */

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox .checkmark:after {
  left: 9px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: solid var(--border-input-focus);
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
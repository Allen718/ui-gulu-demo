<template>
  <div class="toast">
    <slot></slot></div>
</template>

<script>

  export default {
    name: "Toast"
  }
</script>

<style lang="scss" scoped>
.toast{
  $font-size:14px;
  $toast-height:40px;
  $toast-bg: rgba(65, 105, 225, 0.75);
  position:absolute;
  top:0;
  left:50%;
  transform: translateX(-50%);
  font-size:$font-size;
  line-height: 1.8;
  height:$toast-height;
  display: flex;
 align-items: center;
  background:$toast-bg ;
  color:white;
  padding: 0 16px;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(65, 105, 225, 0.50)

}
</style>
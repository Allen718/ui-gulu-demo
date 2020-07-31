<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>

  </div>
</template>
<script>
  export default {
    name: "Tabs-head",
    inject:['eventBus'],
    created(){
    }
  }
</script>

<style lang="scss" scoped>
.tabs-head{
  $tabs-head-height:40px;
   border:1px solid red;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  height: $tabs-head-height;
  .actions-wrapper{
    margin-left: auto;
  }
}
</style>
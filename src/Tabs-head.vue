<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>
<script>
  export default {
    name: "Tabs-head"
  }
</script>

<style lang="scss" scoped>
.tabs-head{

}
</style>
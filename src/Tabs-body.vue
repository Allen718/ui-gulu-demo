<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabs-body",
    inject:['eventBus'],
    created(){
    }
  }
</script>

<style lang="scss" scoped>

</style>
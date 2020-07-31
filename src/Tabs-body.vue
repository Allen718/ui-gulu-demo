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
      console.log('这是爸爸给body')
      console.log(this.eventBus)
    }
  }
</script>

<style lang="scss" scoped>

</style>
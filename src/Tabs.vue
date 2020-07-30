<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabs",
    props:{
      selectedTab:{
        type:String,
        required:true,
        default:'sports'
      },
      direction:{
        type:String,
        default:'horizontal',
        validator(value){
          return['horizontal','vertical'].indexOf(value)>=0
        }
      }
    },
    created() {
      // this.$emit('update:selected',xxx)
    }
  }
</script>

<style lang="scss" scoped>
.tabs{

}
</style>
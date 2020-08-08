<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from "vue"

  export default {
    name: "Tabs",
    props: {
      selectedTab: {
        type: String,
        required: true,

      },
      direction: {
        type: String,
        default: "horizontal",
        validator(value) {
          return ["horizontal", "vertical"].indexOf(value) >= 0
        }
      },

    },
    mounted() {
      if(this.$children.length===0){
       console&&console.warn&&console.warn('g-tabs里面应该只有g-head和g-body')
      }
     this.$children.forEach((vm)=>{
       if(vm.$options.name==='Tabs-head'){
         vm.$children.forEach((item)=>{
          if(item.$options.name==='Tabs-item'&& item.name===this.selectedTab){
            this.eventBus.$emit("update:selected", this.selectedTab,item)
          }
         })
       }
     })

    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    methods: {},

    provide() {
      return {
        eventBus: this.eventBus
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>
<template>
  <div class="tabs" >
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
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
      },

    },
    mounted() {
this.eventBus.$emit('update:selected',this.selectedTab)
    },
    data(){
      return {
        eventBus: new Vue()
      }
    },
    methods:{

    },

    provide(){
      return{
        eventBus:this.eventBus
      }
    }
  }
</script>

<style lang="scss" scoped>
.tabs{

}
</style>
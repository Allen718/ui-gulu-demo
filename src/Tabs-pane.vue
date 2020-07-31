<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabs-pane",
    props:{
      name:{
        type:[String,Number],
        required:true,
      }
    },
    inject:['eventBus'],
    data(){
      return{
        active:false
      }
    },
    mounted() {
      this.eventBus.$on('update:selected',(selectedTab)=>{
        this.active=this.name===selectedTab
      })
    },
    computed:{
      classes(){
        return{active:this.active}
      }
  },
    created(){

    },
  }
</script>

<style lang="scss" scoped>
.tabs-pane{
  &.active{
    background: blue;
  }
}
</style>
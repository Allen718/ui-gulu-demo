<template>
  <div class="tabs-item" :class="classes" @click="update"><slot></slot></div>
</template>

<script>
  export default {
    name: "Tabs-item",
    data(){
      return{active:false}
    },
    props:{
      disabled:{
        type:Boolean,
        default:false
      },
      name:{
        type:[String,Number],
        required:true,
      }
    },
    inject:["eventBus"],
    created(){
      this.eventBus.$on('update:selected',(selectedTab,vm)=>{
        console.log(vm.$el)
        this.active = this.name === selectedTab;
      })
    },
    methods:{
    update(){
        this.eventBus.$emit('update:selected',this.name,this)
      }
    },
    computed:{
      classes(){
        return{active:this.active}
      }
    }
  }
</script>

<style lang="scss" scoped>
.tabs-item{
padding: 0 2em;
  display: flex;
  align-items: center;
  height:100%;
  &.active{
  color: blue;

}
}
</style>
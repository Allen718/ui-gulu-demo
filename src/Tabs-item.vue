<template>
  <div class="tabs-item" :class="classes" @click="update" :dataname="this.name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabs-item",
    inject:["eventBus"],
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
    created(){
      if(this.eventBus){
        this.eventBus.$on('update:selected',(selectedTab)=>{
          this.active = this.name === selectedTab;

        })
      }

    },
    methods:{
    update(){
      if(this.disabled){
        return
      }else{
        if(this.eventBus){
          this.eventBus.$emit('update:selected',this.name,this)
          this.$emit('click',this)
        }

      }

      }
    },
    computed:{
      classes(){
        return{active:this.active,
        disabled: this.disabled
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $blue:blue;
  $disabled-text-color: grey;
.tabs-item{
padding: 0 2em;
  display: flex;
  align-items: center;
  height:100%;
  position:relative;
  &.active{
  color: $blue;
}
  &.disabled{
color:$disabled-text-color;
    cursor: not-allowed;
  }
}
</style>
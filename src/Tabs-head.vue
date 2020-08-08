<template>
  <div class="tabs-head" ref="tabsHead">
    <slot>
    </slot>
    <div class="line" ref="line"></div>
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
      this.eventBus.$on('update:selected',(selectedTab,vm)=>{
      let{top:top1,left:left1}=this.$refs.tabsHead.getBoundingClientRect()
        let {width,height,top,left}=vm.$el.getBoundingClientRect()
        this.$refs.line.style.width=`${width}px`
        this.$refs.line.style.left=`${left-left1}px`

        console.log(this.$refs.line.getBoundingClientRect())
      })
    }
  }
</script>

<style lang="scss" scoped>
.tabs-head{
  $tabs-head-height:40px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  height: $tabs-head-height;
  border-bottom: 1px solid #dddddd;
  position: relative;
  >.line{
    position:absolute;
    border:1px solid blue;
    bottom:0;
    transition:all 350ms
  }
  >.actions-wrapper{
    margin-left: auto;
    display:flex;
    justify-content: center;
    align-items: center;
    >button{
      margin-right:2em;
    }
  }
}
</style>
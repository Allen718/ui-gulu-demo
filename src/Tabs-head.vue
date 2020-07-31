<template>
  <div class="tabs-head">
    <slot></slot>
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
   mounted(){
      this.eventBus.$on('update:selected',(selectedTab,vm)=>{
        let {width,left}=vm.$el.getBoundingClientRect()
        this.$refs.line.style.width=`${width}px`
        this.$refs.line.style.left=`${left}px`

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
  position:relative;
  >.line{
    position:absolute;
    bottom:0;
    border:1px solid blue;
    transition:all 350ms
  }
  >.actions-wrapper{
    margin-left: auto;
  }
}
</style>
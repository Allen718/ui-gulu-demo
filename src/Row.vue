<template>
  <div class="g-row" :style="rowStyle" :class="rowClass" >
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "Row",
    props: {
      gutter: {
        type:[String, Number]},
      align:{
        type:String,
        validator (value) {
          return ['bottom', 'top', 'center'].includes(value)
        }
      }
    },
    mounted() {
      this.$children.forEach((vm) => {vm.gutter = this.gutter})
    },
    computed:{
      rowStyle(){
        let gutter=this.gutter
        return {
          marginLeft:(-gutter/2)+'px',marginRight:(-gutter/2)+'px'
        }
      },
      rowClass () {
        let {align} = this
        return [align && `align-${align}`]
      }
    },

  }
</script>

<style lang="scss" scoped>
  .g-row {
    &.align-bottom{align-items:flex-end }
    &.align-top{align-items:flex-start }
    &.align-center{align-items:center }
    display: flex;
    flex-wrap: wrap;
  }
</style>
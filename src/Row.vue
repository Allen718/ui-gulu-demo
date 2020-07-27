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
        type:string,
        validator (value) {
          return ['left', 'right', 'center'].includes(value)
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
    &.align-right{justify-content:flex-end }
    &.align-left{justify-content:flex-start }
    &.align-center{justify-content:center }
    display: flex;
  }
</style>
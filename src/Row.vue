<template>
  <div class="g-row" :style="rowStyle" >
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "Row",
    props: {
      gutter: [String, Number]
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
      }
    }
  }
</script>

<style scoped>
  .g-row {
    display: flex;
  }
</style>
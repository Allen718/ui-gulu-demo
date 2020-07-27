<template>
  <div class="g-row" :style="{
    marginLeft:(-gutter/2)+'px',marginRight:(-gutter/2)+'px'
  }" >
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
    }
  }
</script>

<style scoped>
  .g-row {
    display: flex;
  }
</style>
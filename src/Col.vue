<template>
  <div class="g-col" :class="[`col-${span}`]"><slot></slot></div>
</template>

<script>
  export default {
    name: "Col",
    props:{
      span:[Number,String]
    }
  }
</script>

<style lang="scss" scoped>
  $class-prefix:col-;
.g-col{
border:1px solid red;
  height:100px;
  width:50%;
  $class-prefix:col-;
  @for $n from 1 through 24{
    &.#{$class-prefix}#{$n}{
    width:($n/24)*100%;
  }
  }
}
</style>
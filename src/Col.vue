<template>
  <div class="g-col" :class="colClass"
   :style="colStyle">
    <div style="border: 1px solid red">
      <slot/>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Col",
    props:{
      span:[Number,String],
    offset:[Number,String],

    },
    data(){
      return {
        gutter:0
      }
    },
    computed:{
      colStyle(){
       let  gutter=this.gutter
        return {
          paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'
        }
      },
      colClass(){
        let span=this.span
        let offset=this.offset
        return [span&&`col-${span}`,offset&&`offset-${offset}`]
      }
    }

  }
</script>

<style lang="scss" scoped>

  $class-prefix:col-;
.g-col{
  height:100px;
  width:50%;
  $class-prefix:col-;
  @for $n from 1 through 24{
    &.#{$class-prefix}#{$n}{
    width:($n/24)*100%;
  }
  }
  $class-prefix:offset-;
  @for $n from 1 through 24{
    &.#{$class-prefix}#{$n}{
      margin-left:($n/24)*100%;
    }
  }
}
</style>
<template>
  <div class="g-col" :class="colClass"
       :style="colStyle">
      <slot/>
  </div>
</template>
<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (["span", "offset"].indexOf(key)===-1) {
        valid = false
      }
    })
    return valid
  }

  export default {
    name: "Col",
    props: {
      span: {
        type: [Number,String]
      },
      offset: {
        type: [Number,String]
      },
      ipad: {type: Object, validator},
      narrowPc: {type: Object, validator},
      pc: {type: Object, validator},
      widePc: {type: Object, validator}
    },
    data() {
      return {
        gutter: 0
      }
    },
    methods:{
      createClasses(obj,str=''){
        if(!obj){return []}
        let arr=[]
        if(obj.span){
          arr.push(`col${str}-${obj.span}`)
        }
        if(obj.offset){
          arr.push(`offset${str}-${obj.offset}`)
        }
        return arr
      }
  },
    computed: {
      colStyle() {
        let gutter = this.gutter
        return {
          paddingLeft: gutter / 2 + "px", paddingRight: gutter / 2 + "px"
        }
      },
      colClass() {
        let {span, offset, ipad, narrowPc, pc, widePc} = this
       let createClasses=this.createClasses
        return [
          ...createClasses({span, offset}),
          ...createClasses(ipad,'-ipad'),
          ...createClasses(narrowPc,'-narrowPc'),
         ...createClasses(pc,'-pc'),
         ...createClasses(widePc,'-widePc')
        ]
      }
    },


  }
</script>

<style lang="scss" scoped>
  $class-prefix: col-;
  .g-col {
    height: 50px;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
    @media (min-width: 576px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 768px) {
      $class-prefix: col-narrowPc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrowPc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 992px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 0 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1200px) {
      $class-prefix: col-widePc-;
      @for $n from 0 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-widePc-;
      @for $n from 0 through 24 {
        &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>
<template>
  <div class="g-col" :class="colClass"
       :style="colStyle">
    <div style="border: 1px solid red">
      <slot/>
    </div>

  </div>
</template>

<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!["span", "offset"].includes(key)) {
        valid = false
      }

    })
    return valid
  }

  export default {
    name: "Col",

    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
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
    computed: {
      colStyle() {
        let gutter = this.gutter
        return {
          paddingLeft: gutter / 2 + "px", paddingRight: gutter / 2 + "px"
        }
      },
      colClass() {
        let {span, offset, ipad, narrowPc, pc, widePc} = this
        return [span && `col-${span}`,
          offset && `offset-${offset}`,
          ipad && `col-ipad-${ipad.span}`,
          narrowPc &&`col-narrowPc-${narrowPc.span}`,
          pc && `col-pc-${pc.span}`,
          widePc && `col-widePc-${widePc.span}`
        ]
      }
    },


  }
</script>

<style lang="scss" scoped>

  $class-prefix: col-;
  .g-col {
    height: 100px;
    width: 50%;
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
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1200px) {
      $class-prefix: col-widePc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-widePc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>
<template>
  <div class="wrapper" :class="addClass">
  <div class="toast" ref="toast" >
    <slot v-if="!enableHtml"></slot>
    <div v-html="$slots.default[0]" v-else></div>
    <div class="line" v-if="closeButton"   ref="line"></div>
    <div v-if="closeButton" class="close" @click="onClickClose">{{closeButton.text}}</div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      autoClose: {
        type: [Boolean,Number],
        default: 3,
        validator(value) {
         if(value===true||typeof value==="number"){
           return true
         }else{
           return false
         }
        }
      },
      closeButton: {
        type: Object,
        // default() {
        //   return {
        //     text: "关闭", callback: undefined
        //   }
        // }
      },
      enableHtml: {
        type: Boolean,
        default: false,
      },
      position: {
        type: String,
        default: 'bottom',
        validator(value) {
          return ["top", "middle", "bottom"].indexOf(value) >= 0
        }
      }

    },
    methods: {
      closeToast() {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      onClickClose() {
        this.closeToast()
        if (this.closeButton.callback && typeof this.closeButton.callback === "function") {
          this.closeButton.callback()
        }
      },
      autoCloseToast() {
        if(this.autoClose){
          setTimeout(() => {
            this.closeToast()
          }, this.autoClose * 1000)
        }

      },
      updateStyle() {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      }

    },
    mounted() {
      this.autoCloseToast()
      this.updateStyle()

    },
    computed: {
      addClass() {
        return {[`position-${this.position}`]: true}
      }
    },
  }

</script>

<style lang="scss" scoped>
  $animation-time:300ms;
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(65, 105, 225, 0.75);
  @keyframes slideUp {
    0%{opacity:0;transform:translateY(100%)}
    100%{opacity:1;transform:translateY(0%) }
  }
  @keyframes slideDown {
    0%{opacity:0;transform:translateY(-100%)}
    100%{opacity:1;transform:translateY(0%) }
  }
  @keyframes fade-in {
    0%{opacity:0;}
    100%{opacity:1; }
  }
  .wrapper{
    position: absolute;
    left:50%;
    &.position-top{
      top: 0;
      transform: translateX(-50%);
      z-index: 30;
      >.toast{
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slideDown $animation-time;
      }
    }
    &.position-middle{
      top: 50%;
      transform: translate(-50% ,-50%);
      .toast{
        animation: fade-in $animation-time ;
      }
    }
    &.position-bottom{
      bottom:0;
      transform: translateX(-50%);
      >.toast{
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slideUp $animation-time;
      }
    }
  }
  .toast {

    font-size: $font-size;
    line-height: 1.5;
    min-height: $toast-min-height;
    display: flex;
    align-items: center;
    background: $toast-bg;
    color: white;
    padding: 0 16px;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(65, 105, 225, 0.50);

    > .line {
      border-left: 1px solid white;
      height: 100%;
      margin-left: 16px;
    }

    > div {
      flex-shrink: 0;
      text-align: center;
      padding-left: 12px;
    }
  }
</style>
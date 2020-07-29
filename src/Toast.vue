<template>
  <div class="wrapper" :class="addClass">
  <div class="toast" ref="toast" >
    <slot v-if="!enableHtml"></slot>
    <div v-html="$slots.default[0]" v-else></div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      closeDelay: {
        type: Number,
        default: 50,
      },
      closeButton: {
        type: Object,
        default() {
          return {
            text: "关闭", callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false,
      },
      position:{
        type:String,
        validator (value){
          ['left','middle','bottom'].indexOf(value)
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
        setTimeout(() => {
          this.closeToast()
        }, this.closeDelay * 1000)
      },
      updateStyle() {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      }

    },
    mounted() {
      this.autoCloseToast()
      this.updateStyle()

    }
  }

</script>

<style lang="scss" scoped>
  .toast {

    font-size: $font-size;
    line-height: 1.8;
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

    > span {
      display: block;
      flex-shrink: 0;
      text-align: center;
      padding-left: 16px;
    }
  }
</style>
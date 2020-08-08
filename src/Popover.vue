<template>
  <div class="popover"  ref="popover">
    <div v-show="visible" class="content-wrapper" ref="contentWrapper" :class="{[ `position-${this.position}`]:true}">
      <slot name="content" :close="this.close"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>

</template>

<script>
  export default {
    name: "Popover",
    data() {
      return {
        visible: false
      }
    },
    computed:{
      openEvent(){
        if(this.trigger==='click')
        { return 'click'}else{
          return 'mouseenter'
        }

      },
      closeEvent(){
        if(this.trigger==='click')
        { return 'click'}else{
          return 'mouseLeave'
        }
      }
    },
    props: {
      position: {
        type: String,
        default: "top",
        validator(value) {
          return ["top", "bottom", "left", "right"].indexOf(value) >= 0
        }

      },
      trigger:{
        type:String,
        default:'click',
        validator(value){
          return['click','hover'].indexOf(value)>=0
        }
      }
    },
    mounted() {
      if(this.openEvent==='click'){
        this.$refs.popover.addEventListener('click',this.Click)
      }else{
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }



    },
    // destroyed () {
    //   if (this.trigger === 'click') {
    //     this.$refs.popover.removeEventListener('click', this.Click)
    //   } else {
    //     this.$refs.popover.removeEventListener('mouseenter', this.open)
    //     this.$refs.popover.removeEventListener('mouseleave', this.close)
    //   }
    // },
    methods: {
      positionContent() {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        let {width, left, top, bottom, height} = triggerWrapper.getBoundingClientRect()
        let height1 = contentWrapper.getBoundingClientRect().height
        const position = {
          top: {top: top + window.scrollY, left: left + window.scrollX},
          bottom: {top: top + window.scrollY + height, left: left + window.scrollX},
          left: {top: top - (height1 - height) / 2 + window.scrollY, left: left + window.scrollX},
          right: {top: top - (height1 - height) / 2 + window.scrollY, left: left + width + window.scrollX}
        }
        contentWrapper.style.top = position[this.position].top + "px"
        contentWrapper.style.left = position[this.position].left + "px"
      },
      eventHandler(e) {
        if (this.$refs.contentWrapper && (this.$refs.contentWrapper.contains(e.target)) || this.$refs.popover.contains(e.target)) {
        } else {
          this.close()
        }
      },
      open() {
        this.visible = !this.visible
        setTimeout(() => {
          this.positionContent()
          document.addEventListener("click", this.eventHandler)

        },0)
      },
      close() {
        this.visible = false
        document.removeEventListener("click", this.eventHandler)

      },
      Click(e) {
        if (this.$refs.triggerWrapper.contains(e.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }


      }
    },

  }
</script>

<style lang="scss" scoped>
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;

    > span {
      display: inline-block;
    }
  }

  .content-wrapper {
    font-size: 14px;
    border: 1px solid $border-color;
    position: absolute;
    background-color: #ffffff;
    /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);*/
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.8));
    padding: 0.5em 1em;
    max-width: 20em;
    border-radius: $border-radius;

    &::after, &::before {
      content: '';
      width: 0;
      height: 0;
      border: 10px solid transparent;
      position: absolute;
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;

      &::after, &::before {
        left: 10px;

      }

      &::after {
        border-top-color: #ffffff;
        top: calc(100% - 2px);
      }

      &::before {
        border-top-color: #333333;
        top: 100%
      }
    }

    &.position-bottom {
      margin-top: 10px;

      &::after, &::before {
        left: 10px;
      }

      &::after {
        border-bottom-color: #ffffff;
        bottom: calc(100% - 2px);
      }

      &::before {
        border-bottom-color: #333333;
        bottom: 100%;
      }

    }

    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;

      &::after, &::before {
        right: 0;
        top: 6px;
        transform: translateX(100%);
      }

      &::after {
        border-left-color: #ffffff;
        transform: translateX(calc(100% - 2px));

      }

      &::before {
        border-left-color: #333333;
      }

    }

    &.position-right {
      margin-left: 10px;

      &::after, &::before {
        left: 0;
        top: 6px;
        transform: translateX(-100%);
      }

      &::after {
        border-right-color: #ffffff;
        transform: translateX(calc(-100% + 2px));
      }

      &::before {
        border-right-color: #333333;
      }
    }
  }
</style>
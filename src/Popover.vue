<template>
  <div class="popover" @click="Click" ref="popover">
    <div v-if=" visible" class="content-wrapper" ref="contentWrapper">
      <slot name="content"></slot>
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
    methods: {
      positionContent() {
          document.body.appendChild(this.$refs.contentWrapper)
          let { left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX + "px"
          this.$refs.contentWrapper.style.top = top + window.scrollY + "px"

        },
      eventHandler(e) {
        if (this.$refs.contentWrapper && (this.$refs.contentWrapper.contains(e.target))||this.$refs.popover.contains(e.target)) {
        } else {
          this.close()
        }
      },
      open() {
        this.visible=!this.visible
        setTimeout(() => {
          this.positionContent()
          document.addEventListener("click", this.eventHandler)
        }, 0)
      },
      close(){
        this.visible=false
        document.removeEventListener("click", this.eventHandler)
      },
      Click(e) {
        if (this.$refs.triggerWrapper.contains(e.target)) {
          if (this.visible === true) {
            this.close()
          }else{
            this.open()
            console.log('关闭吧')
          }
        }


      }
    },

  }
</script>

<style lang="scss" scoped>
  .popover {

    display: inline-block;
    vertical-align: top;
  }

  .content-wrapper {
    border: 1px solid red;
    position: absolute;
    transform: translateY(-100%);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
  }
</style>
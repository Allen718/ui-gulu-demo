<template>
  <div class="popover" @click="Click" ref="popover">
    <div v-if=" visible" class="content-wrapper" ref="contentWrapper" :class="{[ `position-${this.position}`]:true}">
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
    props:{
      position:{
        type:String,
        default:'top',
        validator(value){
         return  ['top','bottom','left','right'].indexOf(value)>=0
        }

      }
  },
    methods: {
      positionContent() {
          document.body.appendChild(this.$refs.contentWrapper)
        const{contentWrapper,triggerWrapper}=this.$refs
        let { width,left, top,bottom,height} = triggerWrapper.getBoundingClientRect()
        let height1=contentWrapper.getBoundingClientRect().height
        contentWrapper.style.left = left + window.scrollX + "px"
        if(this.position==='top'){
         contentWrapper.style.top = top+ window.scrollY + "px"
        }else if(this.position==='bottom'){
          contentWrapper.style.top = bottom+ window.scrollY + "px"
        }else if(this.position==='left'){
          contentWrapper.style.top = top-(height1-height)/2+ window.scrollY + "px"
          contentWrapper.style.left = left + window.scrollX + "px"
        }else if(this.position==='right'){
          contentWrapper.style.top = top-(height1-height)/2+ window.scrollY + "px"
          contentWrapper.style.left = left +width+ window.scrollX + "px"
        }
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
  $border-color:#333;
  $border-radius:4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    >span{
      display: inline-block;
    }
  }

  .content-wrapper {
    border: 1px solid $border-color;
    position: absolute;
    background-color: #ffffff;
    /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);*/
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.8));
    padding: 0.5em 1em;
    max-width: 20em;
    border-radius: $border-radius;
    &::after,&::before{
      content:'';
      width:0;
      height:0;
      border:10px solid transparent;
      position:absolute;
     }
    &.position-top{
     transform: translateY(-100%);
      margin-top: -10px;
      &::after,&::before{
        left:10px;

      }
      &::after{border-top-color: #ffffff;
        top:calc(100% - 2px);
      }
      &::before{border-top-color:#333333; top:100%}
    }
    &.position-bottom{
      margin-top: 10px;
      &::after,&::before{
        left:10px;
      }
      &::after{border-bottom-color: #ffffff;bottom:calc(100% - 2px);}
      &::before{border-bottom-color:#333333;bottom:100%;}

    }
    &.position-left{
    transform: translateX(-100%);
      margin-left: -10px;
      &::after,&::before{
        right:0;
        top:6px;
       transform: translateX(100%);
      }
      &::after{
        border-left-color: #ffffff;
        transform: translateX(calc(100% - 2px));

      }
      &::before{border-left-color:#333333;
    }

    }
    &.position-right{
margin-left: 10px;
      &::after,&::before{
       left:0;
        top:6px;
        transform: translateX(-100%);
      }
      &::after{
        border-right-color: #ffffff;
        transform: translateX(calc(-100% + 2px));
      }
      &::before{border-right-color:#333333;
      }
    }
  }
</style>
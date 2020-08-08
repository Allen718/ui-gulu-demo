<template>
  <div style="padding: 30px 0">
    <p>普通按钮，可以做成不可点击状态</p>
    <g-button>按钮</g-button>
    <g-button disabled >按钮</g-button>
    <p>带有图标的按钮</p>
    <g-button icon="setting" >
      点击
    </g-button>
    <g-button icon="download" icon-position="right">下载</g-button>
    <p>带有动画的按钮</p>
    <g-button icon="setting" icon-position="left" :loading="loading" @click="loading=!loading">
      点击
    </g-button>
    <g-button loading>上传</g-button>
    <p>一组按钮的样式</p>
    <g-button-group>
      <g-button class="g-button" icon="left">上一页</g-button>
      <g-button class="g-button">更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <div @click="ontoggle" style="padding: 20px 0;"> 代码预览</div>
    <div style="padding: 20px 0;" v-if="this.open" >
      <pre>
       <code>
         {{html}}
       </code>
      </pre>
    </div>
  </div>
</template>

<script>
  import Button from "../../../src/Button"
  import ButtonGroup from "../../../src/Button-group"

  export default {
    components: {
      "g-button": Button,
      "g-button-group": ButtonGroup
    },
    data() {
      return {
        loading: false,
        open:true,
        html: `

 <g-button>按钮</g-button>
 <g-button disabled >按钮</g-button>
    <g-button icon="setting" icon-position="left" :loading="loading" @click="loading=!loading">
      点击
    </g-button>
    <g-button icon="download" icon-position="right">下载</g-button>
    <g-button loading>上传</g-button>
    <button-group>
      <g-button class="g-button" icon="left">上一页</g-button>
      <g-button class="g-button">更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </button-group>`,

      }
    },
    methods:{
      ontoggle(){
        this.open=!this.open
      }
    },

  }
</script>


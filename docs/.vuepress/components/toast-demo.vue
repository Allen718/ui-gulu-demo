<template>
    <div style="margin: 20px ">
      <p>消息可以从上方 中间 或是下方弹出，默认为3s关闭,当然也可以自己控制时间，或是不需要自动关闭</p>
      <a-button @click="showToastTop">上方弹出</a-button>
      <a-button @click="showToastMiddle">中间弹出</a-button>
      <a-button @click="showToastBottom">下方弹出</a-button>
      <p>
        <a-button @click="toggle1=!toggle1">代码预览</a-button>
      </p>
      <div v-if="toggle1">
        <pre>
          <code>
           {{html1}}
          </code>
        </pre>
      </div>
      <div>
        <p>支持手动关闭，并触发其他事件</p>
        <a-button @click="closeToast">手动关闭</a-button>
        <p>
          <a-button @click="toggle2=!toggle2">代码预览</a-button>
        </p>
        <div v-if="toggle2">
        <pre>
          <code>
           {{html2}}
          </code>
        </pre>
        </div>
      </div>
      <p>支持使用HTML片段</p>
      <a-button @click="showHtml">支持html</a-button>
      <p><a-button @click="toggle3=!toggle3">代码预览</a-button></p>
      <div v-if="toggle3">
        <pre>
          <code>
           {{html3}}
          </code>
        </pre>
      </div>
    </div>

</template>

<script>
  import Toast from "../../../src/Toast";
  import Button from "../../../src/Button";
  import plugin from "../../../src/plugin";
  import Vue from "vue"

  Vue.use(plugin)
  export default {
    components: {
      "a-toast": Toast,
      "a-button": Button
    },
    data() {
      return {
        toggle1: false,
        toggle2: false,
        toggle3:false,
        html1: `
      <a-button @click="showToastTop" >上方弹出</a-button>
      <a-button @click="showToastMiddle">中间弹出</a-button>
      <a-button @click="showToastBottom">下方弹出</a-button>
        showToastTop() {
        this.$toast("这是一条提示消息", {position:'top' })
      },
      showToastMiddle() {
        this.$toast("这是一条提示消息", {position:'middle' })
      },
      showToastBottom() {
        this.$toast("这是一条提示消息", {position:'bottom' })
      },

      `,
        html2: `
         <a-button @click="closeToast" >手动关闭</a-button>
         closeToast() {
        this.$toast("你当前的余额不足", {
          closeButton: {
            text: "知道啦", callback: () => {
              console.log("我知道了")}
          }
        })
      }
        `,
        html3:`
          <a-button @click="showHtml">支持html</a-button>
          showHtml(){
        this.$toast("这是一条<strong style='color: red'>提示</strong>消息",
        {position: "middle",enableHtml: true})
      }


        `,
      }
    },
    methods: {
      showToastTop() {
        this.$toast("这是一条提示消息", {position: "top"})
      },
      showToastMiddle() {
        this.$toast("这是一条提示消息", {position: "middle"})
      },
      showToastBottom() {
        this.$toast("这是一条提示消息", {position: "bottom"})
      },
      closeToast() {
        this.$toast("你当前的余额不足", {
          position: "middle",
          closeButton: {
            text: "知道啦", callback: () => {
              console.log("我知道了")
            }
          }
        })
      },
      showHtml(){
        this.$toast("这是一条<strong style='color: red'>提示</strong>消息", {position: "bottom",enableHtml: true})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
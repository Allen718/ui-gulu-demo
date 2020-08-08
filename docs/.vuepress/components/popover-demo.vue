<template>
  <div>
    <p>点击展示，支持四个方向</p>
    <a-popover>
      <template slot="content">
        <div>
          这是内容 这是内容这是内容这是内容这是内容这是内容这是内容
        </div>
      </template>
      <a-button>上方</a-button>
    </a-popover>
    <a-popover position="bottom">
      <template slot="content">
        <div>
          这是一条提示信息
        </div>
      </template>
      <a-button>下方</a-button>
    </a-popover>
    <a-popover position="left">
      <template slot="content">
        <div>
          这是一条提示信息
        </div>
      </template>
      <a-button>左方</a-button>
    </a-popover>
    <a-popover position="right">
      <template slot="content">
        <div>
          这是一条提示信息
        </div>
      </template>
      <a-button>右方</a-button>
    </a-popover>
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
    <p>支持hover展示</p>
    <a-popover position="top" trigger="hover">
      <template slot="content">
        <div>
          这是一条提示信息
        </div>
      </template>
      <a-button>hover</a-button>
    </a-popover>
    <p><a-button @click="toggle2=!toggle2">代码预览</a-button></p>
    <div v-if="toggle2">
      <pre>
        <code>
          {{html2}}
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
  import Popover from "../../../src/Popover";
  import Button from "../../../src/Button";

  export default {
    components: {
      "a-popover": Popover,
      "a-button": Button

    },
    data() {
      return {
        toggle1:false,
        toggle2:false,
        html1: `
<a-popover>
      <template slot="content">
        <div>
          这是内容 这是内容这是内容这是内容这是内容这是内容
        </div>
      </template>
      <a-button>上方</a-button>
    </a-popover>
    <a-popover position="bottom">
      <template slot="content">
        <div>
          这是一条提示信息
        </div>
      </template>
      <a-button>下方</a-button>
    </a-popover>
    <a-popover position="left">
      <template slot="content">
        <div>
          这是一条提示信息
        </div>
      </template>
      <a-button>左方</a-button>
    </a-popover>
    <a-popover position="right">
      <template slot="content">
        <div>
          这是一条提示信息
        </div>
      </template>
      <a-button>右方</a-button>
    </a-popover>
`,
        html2:`
    <a-popover position="top" trigger="hover">
      <template slot="content">
        <div>
          这是一条提示信息
        </div>
      </template>
      <a-button>hover</a-button>
    </a-popover>

        `,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
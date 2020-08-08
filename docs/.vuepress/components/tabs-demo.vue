<template>
  <div>
      <a-tabs selected-tab="sports">
        <a-tabs-head>
          <a-tabs-item name="women" >美女</a-tabs-item>
          <a-tabs-item name="finance">财经</a-tabs-item>
          <a-tabs-item name="sports">体育</a-tabs-item>
        </a-tabs-head>
        <a-tabs-body>
          <a-tabs-pane name="women">美女相关内容</a-tabs-pane>
          <a-tabs-pane name="finance">财经相关内容</a-tabs-pane>
          <a-tabs-pane name="sports">体育相关内容</a-tabs-pane>
        </a-tabs-body>
      </a-tabs>
    <p>Tabs 组件提供了选项卡功能，默认选中第三个标签页，也可以通过selectedTab来设置切换</p>
    <a-button>代码预览</a-button>
    <div>
      <pre>
        <code>
          {{html1}}
        </code>
      </pre>
    </div>
    <div>

    </div>
    <p>支持不可点击以及tabs栏自定义触发器</p>
    <a-tabs selected-tab="game">
      <a-tabs-head>
        <template slot="actions">
      <button >设置</button>
    </template>
        <a-tabs-item name="TV" disabled>电视</a-tabs-item>
        <a-tabs-item name="file">电影</a-tabs-item>
        <a-tabs-item name="game">游戏</a-tabs-item>
      </a-tabs-head>
      <a-tabs-body>
        <a-tabs-pane name="Tv">电视相关内容</a-tabs-pane>
        <a-tabs-pane name="file">电影相关内容</a-tabs-pane>
        <a-tabs-pane name="game">游戏相关内容</a-tabs-pane>
      </a-tabs-body>
    </a-tabs>
    <p>可以使得有些选框不可点击</p>
    <a-button>代码预览 </a-button>
    <div>
      <pre >
        <code>{{html2}}</code>
      </pre>
    </div>
    <div>

  </div>
  </div>
</template>

<script>
  import Tabs from "../../../src/Tabs";
  import TabsBody from'../../../src/Tabs-body'
  import TabsHead from '../../../src/Tabs-head'
  import TabsItem from '../../../src/Tabs-item'
  import TabsPane from '../../../src/Tabs-pane'
  import Button from "../../../src/Button";
  export default {
    name: "tabs-demo",

    components:{
      'a-tabs':Tabs,
      'a-tabs-head':TabsHead,
      'a-tabs-body':TabsBody,
      'a-tabs-item':TabsItem,
      'a-tabs-pane':TabsPane,
      'a-button':Button,
    },
    data(){
    return{
      html1:`
       <a-tabs >
        <a-tabs-head>
          <a-tabs-item name="women" >美女</a-tabs-item>
          <a-tabs-item name="finance">财经</a-tabs-item>
          <a-tabs-item name="sports">体育</a-tabs-item>
        </a-tabs-head>
        <a-tabs-body>
          <a-tabs-pane name="women">美女相关内容</a-tabs-pane>
          <a-tabs-pane name="finance">财经相关内容</a-tabs-pane>
          <a-tabs-pane name="sports">体育相关内容</a-tabs-pane>
        </a-tabs-body>
      </a-tabs>
      `,
      html2:`
       <a-tabs selected-tab="game">
      <a-tabs-head>
        <template slot="actions">
      <button >设置</button>
    </template>
        <a-tabs-item name="TV" disabled>电视</a-tabs-item>
        <a-tabs-item name="file">电影</a-tabs-item>
        <a-tabs-item name="game">游戏</a-tabs-item>
      </a-tabs-head>
      <a-tabs-body>
        <a-tabs-pane name="Tv">电视相关内容</a-tabs-pane>
        <a-tabs-pane name="file">电影相关内容</a-tabs-pane>
        <a-tabs-pane name="game">游戏相关内容</a-tabs-pane>
      </a-tabs-body>
    </a-tabs>

      `
    }
    }
  }
</script>

<style lang="scss" scoped>

</style>
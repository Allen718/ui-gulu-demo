<template>
  <div>
    <a-layout style="height: 50vh">
      <a-header style="background-color: #72BCEF;height: 32px"></a-header>
      <a-content style="background-color: #51A1EA;"></a-content>
      <a-footer style="background-color: #72BCEF; height: 40px"></a-footer>
    </a-layout>
    <a-button style="margin: 10px 0">代码预览</a-button>
    <div>
     <pre>
       <code>
         {{html1}}
       </code>
     </pre>
    </div>
    <a-layout style="height: 300px">
      <a-header style="height: 42px;background-color: #72BCEF"></a-header>
      <a-layout>
        <a-sider style="background-color:#51A0EA;width:200px"></a-sider>
        <a-content style="background-color: #488EE9"></a-content>
      </a-layout>
      <a-footer style="height: 42px;background-color:#7DBCEA"></a-footer>
    </a-layout>
    <a-layout style="height: 300px;margin: 30px 0">
      <a-header style="height: 42px;background-color: #72BCEF"></a-header>
      <a-layout>
        <a-content style="background-color: #488EE9"></a-content>
        <a-sider style="background-color:#51A0EA;width:200px"></a-sider>
      </a-layout>
      <a-footer style="height: 42px;background-color:#7DBCEA"></a-footer>
    </a-layout>
    <a-button style="margin: 10px 0">代码预览</a-button>
    <div>
     <pre>
       <code>
         {{html2}}
       </code>
     </pre>
    </div>
  </div>
</template>

<script>
  import Layout from "../../../src/Layout";
  import Header from "../../../src/Header";
  import Sider from "../../../src/Sider";
  import Content from "../../../src/Content";
  import Footer from "../../../src/Footer";
  import Button from "../../../src/Button";

  export default {
    components: {
      "a-layout": Layout,
      "a-header": Header,
      "a-sider": Sider,
      "a-content": Content,
      "a-footer": Footer,
      "a-button": Button
    },
    data() {
      return {
        html1: `
   <a-layout style="height: 50vh">
      <a-header style="background-color: #72BCEF;height: 32px"></a-header>
      <a-content style="background-color: #51A1EA;"></a-content>
      <a-footer style="background-color: #72BCEF; height: 40px" ></a-footer>
   </a-layout>
            `,
        html2: `

     <a-layout style="height: 300px">
       <a-header style="height: 42px;background-color: #72BCEF"></a-header>
       <a-layout >
          <a-sider style="background-color:#51A0EA;width:200px"></a-sider>
           <a-content style="background-color: #488EE9"></a-content>
       </a-layout>
       <a-footer style="height: 42px;background-color:#7DBCEA"></a-footer>
   </a-layout>
   <a-layout style="height: 300px;margin: 30px 0">
     <a-header style="height: 42px;background-color: #72BCEF"></a-header>
     <a-layout >
       <a-content style="background-color: #488EE9"></a-content>
       <a-sider style="background-color:#51A0EA;width:200px"></a-sider>
     </a-layout>
     <a-footer style="height: 42px;background-color:#7DBCEA"></a-footer>
   </a-layout>

      `,
      }
    },

  }
</script>

<style lang="scss" scoped>

</style>
<template >
  <div class="inputWrapper">
    <a-input class="input" value="请输入密码"></a-input>
    <a-input class="input" value="lisa" disabled ></a-input>
    <a-input class="input" value="请输入密码" error="密码不得少于六个字符" ></a-input>
    <a-input class="input" value="只读" readonly></a-input>
    <div>代码预览</div>
    <div >
    <pre>
      <code>
        {{html}}
      </code>
    </pre>
    </div>
    <p>双向绑定</p>
    <p>预览</p>
    <a-input v-model="value" style="font-size: 32px" ></a-input>
   <div>{{value}}</div>
    <p>代码</p>
    <div>
      <pre>
        <code>
          {{html1}}
        </code>
      </pre>

    </div>
  </div>

</template>

<script>
  import Input from "../../../src/Input";
  export default {
    components:{
      'a-input':Input
    },
    data(){
      return{
        value:123,
        html:`<a-input class="input" value="请输入密码"></a-input>
    <a-input class="input" value="lisa" disabled ></a-input>
    <a-input class="input" value="请输入密码" error="密码不得少于六个字符" ></a-input>
    <a-input class="input" value="只读" readonly></a-input>`,
        html1:`   <a-input v-model="value"  ></a-input>
                   <div>{{value}}</div>
                        `,

      }
    },
  methods:{
    inputChange(){

    }
  }
  }
</script>

<style lang="scss" scoped>
  .inputWrapper{
    padding: 30px 0;
    >.input{
      margin: 20px;
    }
  }


</style>
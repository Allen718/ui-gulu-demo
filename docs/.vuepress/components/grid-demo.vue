<template>
  <div class="total">
    <a-row>
      <a-col :span="12" style="background-color: #72BCEF"></a-col>
      <a-col :span="12" style="background-color: #51A1EA"></a-col>
    </a-row>
    <a-row style="margin: 10px 0">
      <a-col :span="8" style="background-color: #72BCEF "></a-col>
      <a-col :span="8" style="background-color: #51A1EA"></a-col>
      <a-col :span="8" style="background-color:#72BCEF "></a-col>
    </a-row>
    <p>上图看见的是最简单的样式，我们可以自己的需求将一行划分为几份，总格数为24,如果想要三分，就是每份8，四分就是每份6，以此类推</p>
    <a-button @click="toggle1=!toggle1" icon="right" icon-position="right">代码预览</a-button>
    <div v-if="toggle1">
      <pre>
        <code>
    {{html1}}
        </code>
       </pre>
    </div>
    <div>
      <a-row style="margin: 10px 0">
        <a-col :span="6" style="background-color: #72BCEF "></a-col>
        <a-col :span="6"  :offset="3" style="background-color: #51A1EA"></a-col>
        <a-col :span="6" :offset="3" style="background-color:#72BCEF "></a-col>
      </a-row>
      <a-row>
        <a-col :span="4" style="background-color: #72BCEF "></a-col>
        <a-col :span="12" :offset="1" style="background-color: #51A1EA "></a-col>
        <a-col :span="4" :offset="3" style="background-color: #72BCEF "></a-col>
      </a-row>
    </div>
    <p>在划分格子的基础上，如果我们希望各栅栏之间有间隙，只需要加一个offset属性就可以做到，但是需要遵守每一行24格原则，无论是span还是offset总数加起来不能超24</p>
    <a-button @click="toggle2=!toggle2" icon="right" icon-position="right">代码预览</a-button>
    <div v-if="toggle2">
      <pre>
        <code>
    {{html2}}
        </code>
       </pre>
    </div>
    <div>
      <a-row :gutter="10" style="margin: 10px 0">
        <a-col :span="6"><div style="background-color: #72BCEF;min-height:30px;">1</div></a-col>
        <a-col :span="6"><div style="background-color: #51A1EA;min-height:30px;">2</div></a-col>
        <a-col :span="6"><div style="background-color: #72BCEF;min-height:30px;">3</div></a-col>
        <a-col :span="6"><div style="background-color: #51A1EA;min-height:30px;">4</div></a-col>
      </a-row>
    </div>
    <p>做平均布局的时候，我们有时候需要的是两个栅格之间的间隙的距离是固定像素，而并不像上面那样以空格算，而是精准的像素，我们只需要将给row一个gutter属性</p>
    <a-button @click="toggle3=!toggle3" icon="right" icon-position="right">代码预览</a-button>
    <div v-if="toggle3">
      <pre>
        <code>
    {{html3}}
        </code>
       </pre>
    </div>
    <div>
      <a-row align="top" >
        <a-col :span="4" style="background-color: #51A1EA;height: 50px" ></a-col>
        <a-col :span="12" :offset="2" style="background-color: #72BCEF;height: 30px"></a-col>
        <a-col :span="4" :offset="2" style="background-color: #51A1EA; height:60px"></a-col>
      </a-row>
    </div>
    <p>align-top</p>
    <a-row align="center" >
      <a-col :span="4" style="background-color: #51A1EA;height: 50px" ></a-col>
      <a-col :span="12" :offset="2" style="background-color: #72BCEF;height: 30px"></a-col>
      <a-col :span="4" :offset="2" style="background-color: #51A1EA; height:60px"></a-col>
    </a-row>
    <p>align-center</p>
    <a-row align="bottom" >
      <a-col :span="4" style="background-color: #51A1EA;height: 50px" ></a-col>
      <a-col :span="12" :offset="2" style="background-color: #72BCEF;height: 30px"></a-col>
      <a-col :span="4" :offset="2" style="background-color: #51A1EA; height:60px"></a-col>
    </a-row>
    <p>align-bottom</p>
    <a-button @click="toggle4=!toggle4" icon="right" icon-position="right">代码预览</a-button>
    <div v-if="toggle4" style="margin: 10px 0">
      <pre>
        <code>
    {{html4}}
        </code>
       </pre>
    </div>
    <div>
      <p>响应式布局，根据页面宽度不同，出现不同的宽度，给出ipad narrow-pc pc 属性，默认为手机模式</p>
      <a-row  style="margin: 10px 0">
        <a-col :span="24"  :ipad="{span:'11',offset:'0'}" :narrow-pc="{span:'8',offset:'0'}"  :pc="{span:'6',offset:'0'}" style="background-color: #51A1EA">1</a-col>
        <a-col :span="24"  :ipad="{span:'11',offset:'2'}" :narrow-pc="{span:'12',offset:'4' }" :pc="{span:'18',offset:'0'}" style="background-color: #72BCEF">2</a-col>
      </a-row>
      <a-button @click="toggle5=!toggle5" icon="right" icon-position="right">代码预览</a-button>
      <div v-if="toggle5">
        <pre>
          <code>
            {{html5}}
          </code>
        </pre>
      </div>
    </div>
  </div>

</template>

<script>
  import Col from "../../../src/Col";
  import Row from "../../../src/Row";
  import Button from "../../../src/Button";

  export default {
    components: {
      "a-row": Row,
      "a-col": Col,
      'a-button':Button
    },
    data() {
      return {
        toggle1:false,
        toggle2:false,
        toggle3:false,
        toggle4:false,
        toggle5:false,
        html1: `
  <a-row>
      <a-col :span="12" style="background-color: #72BCEF"></a-col>
       <a-col :span="12" style="background-color: #51A1EA"></a-col>
    </a-row>
    <a-row style="margin: 10px 0">
      <a-col :span="8" style="background-color: #72BCEF "></a-col>
      <a-col :span="8" style="background-color: #51A1EA"></a-col>
      <a-col :span="8" style="background-color:#72BCEF "></a-col>
    </a-row>
    `,
        html2:`

      <a-row style="margin: 10px 0">
        <a-col :span="6" style="background-color: #72BCEF "></a-col>
        <a-col :span="6"  :offset="3" style="background-color: #51A1EA"></a-col>
        <a-col :span="6" :offset="3" style="background-color:#72BCEF "></a-col>
      </a-row>
      <a-row>
        <a-col :span="4" style="background-color: #72BCEF "></a-col>
        <a-col :span="12" :offset="1" style="background-color: #51A1EA "></a-col>
        <a-col :span="4" :offset="3" style="background-color: #72BCEF "></a-col>
      </a-row>

        `,
        html3:`

       <a-row :gutter="10">
        <a-col :span="6"><div style="background-color: #72BCEF;min-height:30px;">1</div></a-col>
        <a-col :span="6"><div style="background-color: #51A1EA;min-height:30px;">2</div></a-col>
        <a-col :span="6"><div style="background-color: #72BCEF;min-height:30px;">3</div></a-col>
        <a-col :span="6"><div style="background-color: #51A1EA;min-height:30px;">4</div></a-col>
      </a-row>

        `,
        html4:`
      <a-row align="top" >
        <a-col :span="4" style="background-color: #51A1EA;height: 50px" ></a-col>
        <a-col :span="12" :offset="2" style="background-color: #72BCEF;height: 30px"></a-col>
         <a-col :span="4" :offset="2" style="background-color: #51A1EA; height:60px"></a-col>
      </a-row>
      <a-row align="center" >
        <a-col :span="4" style="background-color: #51A1EA;height: 50px" ></a-col>
        <a-col :span="12" :offset="2" style="background-color: #72BCEF;height: 30px"></a-col>
         <a-col :span="4" :offset="2" style="background-color: #51A1EA; height:60px"></a-col>
      </a-row>
      <a-row align="botton" >
        <a-col :span="4" style="background-color: #51A1EA;height: 50px" ></a-col>
        <a-col :span="12" :offset="2" style="background-color: #72BCEF;height: 30px"></a-col>
         <a-col :span="4" :offset="2" style="background-color: #51A1EA; height:60px"></a-col>
      </a-row>
        `,
        html5:`
       <a-row  >
        <a-col :span="24"  :ipad="{span:'11',offset:'0'}" :narrow-pc="{span:'8',offset:'0'}"  :pc="{span:'6',offset:'0'}" style="background-color: #51A1EA">1</a-col>
        <a-col :span="24"  :ipad="{span:'11',offset:'2'}" :narrow-pc="{span:'12',offset:'4' }" :pc="{span:'18',offset:'0'}" style="background-color: #72BCEF">2</a-col>
      </a-row>

        `
      }
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  .total{
    *{
      box-sizing: border-box;
    }
  }

</style>
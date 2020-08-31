<template>
  <div>
    <p>单项面板展开</p>
    <a-collapse :selected="['2']">
      <a-collapse-item title="篮球" name="1" >内容：篮球运动是1891年由美国人詹姆斯·奈史密斯发明的。</a-collapse-item>
      <a-collapse-item title="足球" name="2">内容：足球，有"世界第一运动"的美誉，是全球体育界最具影响力的单项体育运动之一</a-collapse-item>
      <a-collapse-item title="羽毛球" name="3">内容：现代羽毛球运动起源于英国</a-collapse-item>
      </a-collapse>
     <p><a-button @click="toggle1=!toggle1">代码预览</a-button></p>
  <div v-if="toggle1">
    <pre>
      <code>
        {{html1}}
      </code>
    </pre>
  </div>
    <p>多项面板同时展开</p>
    <a-collapse :selected="['2','3']" :single="false">
      <a-collapse-item title="篮球" name="1" >内容：篮球运动是1891年由美国人詹姆斯·奈史密斯发明的。</a-collapse-item>
      <a-collapse-item title="足球" name="2">内容：足球，有"世界第一运动"的美誉，是全球体育界最具影响力的单项体育运动之一</a-collapse-item>
      <a-collapse-item title="羽毛球" name="3">内容：现代羽毛球运动起源于英国</a-collapse-item>
    </a-collapse>
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
  import Collapse from "../../../src/Collapse";
  import CollapseItem from '../../../src/Collapse-item'
  import Button from "../../../src/Button";
  export default {
    components:{"a-collapse":Collapse,
                'a-collapse-item':CollapseItem,
                 'a-button':Button
    },
    data(){
      return {
        toggle1:false,
        toggle2:false,
        html1:`
    <a-collapse selected="['2']">
         <a-collapse-item title="篮球" name="1" >内容：篮球运动是1891年由美国人詹姆斯·奈史密斯发明的。</a-collapse-item>
         <a-collapse-item title="足球" name="2">内容：足球，有"世界第一运动"的美誉，是全球体育界最具影响力的单项体育运动之一</a-collapse-item>
         <a-collapse-item title="羽毛球" name="3">内容：现代羽毛球运动起源于英国</a-collapse-item>
    </a-collapse>

        `,
        html2:`
    <a-collapse :selected="['2','3']" :single="false">
      <a-collapse-item title="篮球" name="1" >内容：篮球运动是1891年由美国人詹姆斯·奈史密斯发明的。</a-collapse-item>
      <a-collapse-item title="足球" name="2">内容：足球，有"世界第一运动"的美誉，是全球体育界最具影响力的单项体育运动之一</a-collapse-item>
      <a-collapse-item title="羽毛球" name="3">内容：现代羽毛球运动起源于英国</a-collapse-item>
    </a-collapse>

        `,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
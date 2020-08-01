const expect = chai.expect;
import Vue from "vue"
import Tabs from "../src/Tabs"
import TabsHead from "../src/Tabs-head"
import TabsBody from "../src/Tabs-body"
import TabsItem from "../src/Tabs-item"
import TabsPane from "../src/Tabs-pane"

Vue.component("g-tabs", Tabs)
Vue.component("g-tabs-head", TabsHead)
Vue.component("g-tabs-body", TabsBody)
Vue.component("g-tabs-pane", TabsPane)
Vue.component("g-tabs-item", TabsItem)
Vue.config.productionTip = false
Vue.config.devtools = false
describe("Tabs", () => {
    it("存在.", () => {
      expect(Tabs).to.be.exist
    })
    it("Tab可以接受name", (done) => {
      let div = document.createElement("div")
      document.body.appendChild(div)
      div.innerHTML = `
     <g-tabs selected-tab="finance">
    <g-tabs-head>
      <g-tabs-item name="women" >美女</g-tabs-item>
      <g-tabs-item name="finance">财经</g-tabs-item>
      <g-tabs-item name="sports">体育</g-tabs-item>
      <template slot="actions">
         <button >设置</button>
      </template>
    </g-tabs-head>
    <g-tabs-body>
      <g-tabs-pane name="women">假设有很多美女</g-tabs-pane>
      <g-tabs-pane name="finance">最近基金大涨</g-tabs-pane>
      <g-tabs-pane name="sports">乔丹死后的一段岁月</g-tabs-pane>
    </g-tabs-body>
    </g-tabs>`
      const vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        let x = vm.$el.querySelector(`.tabs-item[dataname='finance']`)
        expect(x.classList.contains("active")).to.eq(true)
        done()
      })

    })
it('它可以接受direction',()=>{})

  }
)

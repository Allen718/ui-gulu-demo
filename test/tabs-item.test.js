const expect = chai.expect;
import Vue from "vue"
import Tabs from "../src/Tabs"
import TabsHead from '../src/Tabs-head'
import TabsBody from '../src/Tabs-body'
import TabsItem from '../src/Tabs-item'
import TabsPane from '../src/Tabs-pane'
Vue.component("g-tabs", Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-tabs-item',TabsItem)
Vue.config.productionTip = false
Vue.config.devtools = false
describe("Tabs-item", () => {
    it("存在.", () => {
      expect(TabsItem).to.be.ok
    })
  it('接受 name 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
      }
    }).$mount()
    expect(vm.$el.getAttribute('dataname')).to.eq('xxx')
  })
  it('接受 disabled 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name:'xxx',
        disabled: true,
      }
    }).$mount()
    const callback = sinon.fake();
    vm.$on('click',callback)
    vm.$el.click()
     expect(callback).to.have.not.been.called
    expect(vm.$el.classList.contains('disabled')).to.eq(true)
  })
  }
)

import Popover from "../src/Popover";
const expect = chai.expect;
import Vue from "vue"
import Col from "../src/Popover"

Vue.config.productionTip = false
Vue.config.devtools = false
describe("popover", () => {
  it("存在.", () => {
    expect(Popover).to.be.exist
  })
  it("可以设置position.", () => {

    Vue.component("g-popover", Popover)
    const div = document.createElement("div")
    document.body.appendChild(div)
    div.innerHTML = ` 
     <g-popover>
      <template position="bottom">
        <div>这是内容 这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容关闭</div>
      </template>
      <g-button>点我</g-button>
    </g-popover>
     `
    const vm = new Vue({
      el: div
    })
    console.log(vm.$el)
    setTimeout((done) => {


    })
  })
})
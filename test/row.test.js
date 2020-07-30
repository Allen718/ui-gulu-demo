
const expect = chai.expect;
import Vue from "vue"
import Col from "../src/Col"
import Row from "../src/Row"
Vue.config.productionTip = false
Vue.config.devtools = false
describe("Row", () => {
    it("存在.", () => {
      expect(Row).to.be.ok
    })
    it("可以设置gutter.", () => {
      Vue.component("g-row", Row)
      Vue.component("g-col", Col)
      const div = document.createElement("div")
      document.body.appendChild(div)
      div.innerHTML = ` 
     <g-row gutter="20">
      <g-col span="12"></g-col>
      <g-col span="12"></g-col>
      </g-row>`
      const vm = new Vue({
        el: div
      })
      setTimeout((done) => {
        const row = vm.$el.querySelector(".row")
        expect(getComputedStyle(row).marginLeft).to.eq("-10px")
        expect(getComputedStyle(row).marginRight).to.eq("-10px")
        const cols = vm.$el.querySelectorAll(".col")
        expect(getComputedStyle(cols[0]).paddingRight).to.eq("10px")
        expect(getComputedStyle(cols[1]).paddingLeft).to.eq("10px")
        done()
        vm.$el.remove()
        vm.$destroy()
      })
    })
      it("可以设置align", () => {
        const div = document.createElement("div")
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        let vm = new Constructor({
            propsData: {
              align: "left"
            }
          }
        ).$mount(div)
        setTimeout((done)=>{
          const RowElement = vm.$el
          expect(getComputedStyle(RowElement).justifyContent).to.equal("flex-start")
          done()
          div.remove()
          vm.$destroy()
        })

      })
  }
)

import {describe} from "mocha";

const expect = chai.expect;
import Vue from "vue"
import Toast from "../src/Toast"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Toast", () => {
  it("存在", () => {
    expect(Toast).to.be.ok
  })
  describe("props", () => {
    const Constructor = Vue.extend(Toast)
    let vm
    const div = document.createElement("div")
    document.body.appendChild(div)
    it("可以设置autoClose", () => {
      vm = new Constructor({
        propsData: {
          closeDelay: 2,

        }
      }).$mount(div)
      vm.$on("close", (deep) => {
          expect(document.body.contains(vm.$el)).to.equal(false)
          deep()
          vm.$el.remove()
          vm.$destroy()
        }
      )


    })

    it("可以设置closeButton", (done) => {
      const callback = sinon.fake();
      vm = new Constructor({
        propsData: {
          closeButton: {text: "知道啦", callback}
        }
      }).$mount()
      let closeButton = vm.$el.querySelector(".close")
      expect(closeButton.textContent.trim()).to.eq("知道啦")
     setTimeout(()=>{
       closeButton.click()
     },200)
      done()

      expect(callback).to.have.been.called
    })
    it('接受 enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {enableHtml: true}
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })
    it('接受 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
})
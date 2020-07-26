import {describe} from "mocha";

const expect = chai.expect;
import Vue from "vue"
import Input from "../src/Input"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Input", () => {
    it("存在", () => {
      expect(Input).to.be.ok
    })

    describe("props", () => {
      const Constructor = Vue.extend(Input)
      let vm
      afterEach(() => {
        vm.$destroy()
      })
      it("可以设置value", () => {
        vm = new Constructor({
          propsData: {
            value: "张三",
          }
        }).$mount()
        const inputElement = vm.$el.querySelector("input")
        expect(inputElement.value).to.equal("张三")

      })

      it("可以设置disabled", () => {

        vm = new Constructor({
          propsData: {
            disabled: true,
          }
        }).$mount()
        const inputElement = vm.$el.querySelector("input")
        expect(inputElement.disabled).to.equal(true)

      })
      it("可以设置readonly", () => {
        vm = new Constructor({
          propsData: {
            readonly: true,
          }
        }).$mount()
        const inputElement = vm.$el.querySelector("input")
        expect(inputElement.readOnly).to.equal(true)
      })
      it("可以设置error", () => {
        vm = new Constructor({
          propsData: {
            error: "你设置的密码有误",
          }
        }).$mount()
        const useElement = vm.$el.querySelector("use")
        console.log(vm.$el)
        const spanElement = vm.$el.querySelector("span")
        expect(useElement.getAttribute("xlink:href")).to.equal("#i-error")
        expect(spanElement.innerText).to.equal("你设置的密码有误")
      })
    })
    describe("事件", () => {
      const Constructor = Vue.extend(Input)
      let vm
      afterEach(() => {
        vm.$destroy()
      })
      it("支持change/input/focus/blur事件", () => {
        ["change", "input", "focus", "blur"].forEach((eventName) => {
          vm = new Constructor(

          ).$mount()
          const callback = sinon.fake();
          vm.$on(eventName, callback)
          //触发input的change事件
          let event = new Event(eventName)
          let inputElement = vm.$el.querySelector("input")
          inputElement.dispatchEvent(event)
          expect(callback).to.have.been.called

        })
      })

    })


  }
)

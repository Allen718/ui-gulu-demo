import Vue from "vue"
import Button from './Button'
import Icon from "./Icon";
import Buttongroup from './Button-group'
Vue.component('g-button', Button)
Vue.component('icon',Icon)
Vue.component('button-group',Buttongroup)
new Vue({
  el:'#app',
data:{
    loading1:false,
  loading2:false,
  loading3:false
}
})
//测试用例
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading:true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-load-5')
  vm.$el.remove()
  vm.$destroy()
}
{
const div = document.createElement('div')
document.body.appendChild(div)
const Constructor = Vue.extend(Button)
const vm = new Constructor({
  propsData: {
    icon: 'settings'
  }
})
vm.$mount(div)
let svg = vm.$el.querySelector('svg')
let {order} = window.getComputedStyle(svg)
expect(order).to.eq('1')
vm.$el.remove()
vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})
  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}
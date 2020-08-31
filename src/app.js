import Vue from 'vue'
import Collapse from "./Collapse";
import CollapseItem from './Collapse-item'
Vue.component("g-collapse",Collapse)
Vue.component("g-collapse-item",CollapseItem)
new Vue({
  el:'#app'
})
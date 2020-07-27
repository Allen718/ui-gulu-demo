import Vue from "vue";
import Button from './Button';
import Icon from "./Icon";
import Buttongroup from './Button-group';
import Input from './Input'
Vue.component('g-input',Input)
Vue.component('g-button', Button)
Vue.component('icon',Icon)
Vue.component('button-group',Buttongroup)
new Vue({
  el:'#app',
data:{
    loading1:false,
  loading2:false,
  loading3:false,
  message:'你好'
},
methods:{
    inputChange(e){
      console.log(e.target.value)
    }
}
})

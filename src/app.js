import Vue from "vue";
import Button from './Button';
import Icon from "./Icon";
import Buttongroup from './Button-group';
import Input from './Input'
import Row from "./Row";
import Col from './Col';
import Layout from "./Layout";
import Header from "./Header";
import Content from "./Content";
import Sider from "./Sider";
import Footer from "./Footer";
Vue.component('g-input',Input)
Vue.component('g-button', Button)
Vue.component('icon',Icon)
Vue.component('button-group',Buttongroup)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-sider',Sider)
Vue.component('g-footer',Footer)
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

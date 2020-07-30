import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import Buttongroup from "./Button-group";
import Input from "./Input"
import Row from "./Row";
import Col from "./Col";
import Layout from "./Layout";
import Header from "./Header";
import Content from "./Content";
import Sider from "./Sider";
import Footer from "./Footer";
import Toast from "./Toast";
import plugin from "./plugin";
import Tabs from "./Tabs";
import TabsHead from './Tabs-head'
import TabsBody from './Tabs-body'
import TabsItem from'./Tabs-item'
import TabsPane from './Tabs-pane'
Vue.component("g-input", Input)
Vue.component("g-button", Button)
Vue.component("icon", Icon)
Vue.component("button-group", Buttongroup)
Vue.component("g-row", Row)
Vue.component("g-col", Col)
Vue.component("g-layout", Layout)
Vue.component("g-header", Header)
Vue.component("g-content", Content)
Vue.component("g-sider", Sider)
Vue.component("g-footer", Footer)
Vue.component("g-toast", Toast)
Vue.use(plugin)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-tabs-item',TabsItem)
new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: "你好"
  },
  methods: {
    showToast() {
      this.$toast("我是message", {
          enableHtml: false, closeButton: {
            text: "你好", callback: () => {
              console.log("我知道了")
            }
          },position:'bottom',autoClose:1
        }
      )
    }
  }
})



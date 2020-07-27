### vue ui 框架学习笔记
#### 准备阶段
1. 创建一个目录，写一个README.md,介绍一下这个项目，并在github上创建一个仓库，将这个文件上传。
2. 声明一下这个项目的版权，具体可以看阮一峰的图片，一般使用MIT，具体步骤，在github新建仓库上面新建一个文件。叫LICENSE,按步骤向下做就可以。
3. 使用npm 使用命令行 npm init ,然后会出现一系列选项，版本控制填一下，一般如果先已经初始化仓库，并上传过代码，那么仓库地址就会出现。
初始化完成以后，会在目录中出现一个package.json文件。
4. 安装vue npm vue，将node_modules加入.gitignore
5.开始网页书写，index.html 引入vue，使用`<script src="./node_modules/vue/dist/vue.min.js"></script>`
6. 创建一个button按钮，先使用js创建。
```
Vue.component('g-button',{
  template:`
    <button>hi</button>`

})
```
7.书写button的样式，由于我么做的button 要通用最好不要将宽高这些写死，而是变成变量。
```$xslt
 --button-height: 32px;
      --font-size: 14px;
.g-button {
      font-size: var(--font-size);
      height: var(--button-height);
          }
```
8. 安装parcel 打包工具，npm install -D parcel-bundler,-D的意思是开发者使用
9. 将button按钮组合起来。成为一个单文件组件，使得app.js成为入口
10.使用parcel 来运行我们的项目 具体位置在'./node_modules/.bin/parcel index.html
11. 页面不显示按钮，使用的vue 版本有问题，将package.json 文件添加一个
```
 "alias": {
    "vue":"./node_modules/vue/dist/vue.common.js"
}
```
然后再次运行 ./node_modules/.bin/parcel index.html --no-cache 
12. button 按钮的内容应该使用<slot>插槽，不能写死这个按钮。
13. 引入svg 图标,设置一下icon样式，关于icon的名字应该有外部数据，使用props传入 ` <use :xlink:href="`#i-${name}`"></use>`
14. 让用户可以自定义引入的icon图标到底是放在左边，还是右边，再来一个props`props:['name','iconPosition']`,然后`:class="{[`icon-${iconPosition}`]:true}`
通过css让图标的位置交换，flex布局中有一个叫做order的属性。
15. 在vue中有一个功能叫做
```$xslt
iconPosition:{
    type:String,
    default:'left',
    validator(value){
      return value === 'left' || value === 'right'
    }//可以让外部输入不对的情况下报错
```
16 用到icon的地方较多，将icon 封装成一个单独的vue组件,在app.js声明一下成为全局通用，名字外部传值。
17. 增加显示菊花状态，即加载中状态，采用动画声明一个动画
```
@keyframes spin {
   0%{transform: rotate(0deg)}

  100%{transform:rotate(360deg);
  }}
.loading{
      animation: spin 1s infinite linear;
    }


```
18. 给button 添加点击事件，当button 被点击时才会出现菊花状态
```
<button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
 <icon  v-if="loading"   class="loading icon" name="load-5"></icon>
    <icon class=" icon"  v-if='icon&&!loading' :name='icon'></icon>
  <g-button icon="setting" icon-position="left" :loading="loading3" @click="loading3=!loading3">
    按钮
  </g-button>
```
单元测试
npm i -D chai 
然后开始书写单元测试,开始的时候就用简单的块隔开
```$xslt
import chai from 'chai'//npm install -D chai
import spies from 'chai-spies'//npm install -D chai-spies
chai.use(spies)
const expect = chai.expect
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
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})//声明这个间谍函数
  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}

```
单元测试，自动化测试
各种插件`npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies`
根目录下新建一个karma.config.js,内容看文件夹
根目录下新建一个test目录，下面新建一个button.test.js文件，然后内容参考文件
创建测试脚本
在 package.json 里面找到 scripts 并改写 scripts

 "scripts": {
     "dev-test": "parcel watch test/* --no-cache && karma start",
     "test": "parcel build test/* --no-minify && karma start --single-run"
 },
 运行测试脚本
 要么使用 npm run test 一次性运行,npm run dev-test 进行 watch（终端一直开着不停）
 使用外部机器来自动测试，只要在github上push一次，那么就会自动测试一次
 教程
 Travis ci ,使用github账号，选中需要测试仓库，本地根目录下新建一个.travis.yml的文件，并上传github
 发布npm包，使得我们造的轮子可以给大家使用
 原则上，只有通过测试以后才可以上传，否则等着被喷死
 首先去npmjs.com 官网上注册一个账号，记得一定要vertufy 邮箱，否则上传失败，
 更改一下npm 的registry，淘宝源就是错误的，配置文件，C:\Users\Administrator.DESKTOP-P22D82G/.npmrc 注销
 npm adduse 登录成功，并且不是使用淘宝源就算成功了，npm publish 上传
 上传之前看一下package.json ,比如项目名，然后"main"看看入口文件
创建 index.js，在 index.js 里将你想要导出的内容全部导出
 使用过程中我们发现报错说 import 语法有问题，那时因为 node 目前确实不支持 import，我们需要用 babel 转译 import
 你可以要求使用者自己用 babel 来转译
 你也可以转义好了再给他用
  parcel build index.js --no-minify （本来不应该加 --no-minify 的，奈何不加会有 bug，HTML 压缩把 slot 标签全删了）
 将 package.json 的 main 改为 dist/index.js
 使用 npm link 或者 yarn link 来加速调试
 你每次修改源码之后，有两条路让别人得到最新效果
 更新 package.json 里的 version，然后 npm publish。别人通过 npm update xxx 来更新。
 如果你只是为了本地调试，可以在项目目录使用 npm link，然后在使用之处运行 npm link xxx，就是最新了
 


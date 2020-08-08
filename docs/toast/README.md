---
title:toast
---
# toast弹出框
toast 组件常用于主动操作后的反馈提示，例如当点击按钮时出现的一个弹框。
#### 效果图及代码预览
<toast-demo></toast-demo>
#### options
|参数|说明|类型|可选值|默认值
|------|---------------|---------|---------|---------|
|position|位置表明提示框出现的位置|String|top/middle /bottom|top
|autoClose|可以设置是否自动关闭或是出现在界面的时间|String/number|---|3
|closeButton|支持手动关闭提示框，并且可以触发其他事件相关逻辑|Object|----|---
|enableHtml|支持html格式内容|Boolean|true/false|false
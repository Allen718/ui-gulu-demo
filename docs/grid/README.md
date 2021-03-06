---
title:grid栅栏布局
---
# grid 栅栏布局
#### 概述
- 采用24格栅栏系统，基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来
- 用户可以根据自己的需求来决定每行的盒子数量个数及是否需要空格或是间隙
- 利用栅栏可以更加快速与方便的做出我们大多数页面所需要的布局。更重要的是这个栅栏系统可以根据需求变成响应式，默认为移动端。
- 通过row在水平方向建立一组column（简写col）
- 你的内容应当放置于col内，并且，只有col可以作为row的直接元素
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，四个等宽的列可以使用 <a-col :span="6" /> 来创建
#### 效果图预览
<grid-demo></grid-demo>
#### options
1. 关于Row

|参数|说明|类型|可选值|默认值
|------|---------------|---------|---------|---------|
|gutter|用于调整栅格之间的间距|Number|---|0|
|align|栅格的垂直对齐方式|String|'top'/'center'/bottom |---|

2. 关于Col的API

|参数|说明|类型|可选值|默认值
|------|---------------|---------|---------|---------|
|span|栅格的宽度，最大值为24|String|'0','1','2'...|---|
|offset|栅格的间距，最大值为24|String|'0'，'1','2'...|---|
| ipad| >576px 响应式栅格可为栅格数或间距|Object|{span:'4',offset:'3}...|---|
| narrowPc| >768px 响应式栅格可为栅格数或间距|Object|{span:'4',offset:'3}...|---|
| pc | >992px 响应式栅格可为栅格数或间距|Object|{span:'4',offset:'3}...|---|
| widthPc| >1200px 响应式栅格可为栅格数或间距|Object|{span:'4',offset:'3}...|---|
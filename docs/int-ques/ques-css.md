# Css 相关

## line-height:150%与 1.5 啥区别

- 150%是根据父元素的字体大小计算出行高，并且子元素依然沿用这个计算后的行高。

- 而 1.5 则是根据子元素自己字体的大小去乘以 1.5 来计算行高。另，1.5em 等也是按照 150%的情况来算的。

例：

```html
<!--当line-height:150%的效果，父元素的行高为150%时，会根据父元素的字体大小先计算出行高值然后再让子元素继承。所以当line-height:150%时，字元素的行高等于16px * 150% = 24px：-->
<div style="line-height:150%;font-size:16px;background: skyblue;">
  父元素内容
  <div style="font-size:30px;background: red;">
    Web前端开发<br />
    line-height行高问题
  </div>
</div>

<hr />

<!--当line-height:1.5em的效果，父元素的行高为150%时，会根据父元素的字体大小先计算出行高值然后再让子元素继承。所以当line-height:1.5em时，子元素的行高等于16px * 1.5em = 24px：-->
<div style="line-height: 1.5em;font-size:16px;background: skyblue;">
  父元素内容
  <div style="font-size:30px;background: red;">
    Web前端开发<br />
    line-height行高问题
  </div>
</div>

<hr />

<!--当line-height:1.5的效果，父元素行高为1.5时，会根据子元素的字体大小动态计算出行高值让子元素继承。所以，当line-height:1.5时，子元素行高等于30px * 1.5 = 45px：-->
<div style="line-height: 1.5;font-size:16px;background: skyblue;">
  父元素内容
  <div style="font-size:30px;background: red;">
    Web前端开发<br />
    line-height行高问题
  </div>
</div>
```

## 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？行内元素和块级元素有什么区别

- 行内元素有：

```html
<a href=""></a>
<span></span>
<img src="" alt="" />
<input type="text" />
<select name="" id=""></select>
<strong></strong>
```

> ⾏内元素不可以设置宽⾼，不独占⼀⾏

- 块级元素有：

```html
<div></div>
<ul></ul>
<ol></ol>
<li></li>
<h1></h1>
<h2></h2>
<p></p>
```

> 块级元素可以设置宽⾼，独占一行

- 空元素有：

> 空(void)元素：只有单标签

```html
<br />
<hr />
<link rel="stylesheet" href="" />
<input type="text" />
<img src="" alt="" />
```

## display: none; 与 visibility: hidden; 的区别

> 相同点：都是让元素不可见

区别：

- display: none; 会让元素从状态树中消失，渲染不会站位任何空间
- visibility: hidden; 不会让元素从状态树中消失，渲染元素会继续占据空间

> 简答一句话就是：
>
> display: none; 隐藏后不占位
>
> visibility: hidden; 隐藏后仍占占位

- display: none; 是非继承属性，⼦孙节点消失由于元素从渲染树消失造成，通过修改

  子孙节点属性无法显示

- visibility: hidden; 是继承属性，子孙节点消失由于继承 了 hidden ，通过设置 visibility: visible; 可以让子孙节点显式

> 简单一句话就是：
>
> 设置 display: none; 的子孙元素都不能再显示
>
> 设置 visibility: hidden; 的子孙元素可以通过给子孙元素设置 visibility: visible; 进行显示

代码演示：

```css
.box {
  width: 300px;
  height: 300px;
  background: red;
  display: none;
}
.box2 {
  width: 100px;
  height: 100px;
  background: green;
  /* display: block; */
  /* visibility: hidden; */
}
```

```html
<div class="box">
  <div class="box2"></div>
</div>
```

当 box 设置了：`display: none;` 只后，那么给 box2 设置 `display: block;`还是 `visibility: hidden;`，都不能让 box2 显示

那么要是这样的样式：

```css
.box {
  width: 300px;
  height: 300px;
  background: red;
  visibility: hidden;
}
.box2 {
  width: 100px;
  height: 100px;
  background: green;
  visibility: visible;
}
```

当 box 设置了：`visibility: hidden;` 只后，那么只要给 box2 设置 `visibility: visible;`即可让 box2 显示

## display、float、position 的关系

- 如果 display 取值为 none ，那么 position 和 float 都不起作⽤，这种情况下元素不

  产⽣框

- 否则，如果 position 取值为 absolute 或者 fixed ，框就是绝对定位的， float 的计

  算值为 none ， display 根据下⾯的表格进⾏调整。

- 否则，如果 float 不是 none ，框是浮动的， display 根据下表进⾏调整

- 否则，如果元素是根元素， display 根据下表进⾏调整

- 其他情况下 display 的值为指定值

- 总结起来：绝对定位、浮动、根元素都需要调整 **display**

## 清除浮动的几种方式，各自的优缺点

- ⽗级 div 定义 height

```html
<style>
  .box {
    background: skyblue;
    height: 60px;
  }

  .box .item {
    width: 100px;
    border: 2px solid black;
    float: left;
  }
</style>

<div class="box">
  <div class="item">1</div>
  <div class="item">1</div>
  <div class="item">1</div>
</div>
```

- 结尾处加空 div 标签 clear:both

```html
<style>
  .box {
    background: skyblue;
  }

  .box .item {
    width: 100px;
    border: 2px solid black;
    float: left;
  }

  .box .clear {
    clear: both;
  }
</style>

<div class="box">
  <div class="item">1</div>
  <div class="item">1</div>
  <div class="item">1</div>
  <div class="clear"></div>
</div>
```

- ⽗级 div 也浮动

```html
<style>
  .box {
    background: skyblue;
    height: 60px;
    float: left;
  }

  .box .item {
    width: 100px;
    border: 2px solid black;
    float: left;
  }
</style>

<div class="box">
  <div class="item">1</div>
  <div class="item">1</div>
  <div class="item">1</div>
</div>
```

- 结尾处加 br 标签 clear:both

```html
<style>
  .box {
    background: skyblue;
    height: 60px;
  }

  .box .item {
    width: 100px;
    border: 2px solid black;
    float: left;
  }
</style>

<div class="box">
  <div class="item">1</div>
  <div class="item">1</div>
  <div class="item">1</div>
  <br />
</div>
```

- ⽗级 div 定义 overflow:hidden （BFC）

```html
<style>
  .box {
    background: skyblue;
    height: 60px;
    overflow: hidden;
  }

  .box .item {
    width: 100px;
    border: 2px solid black;
    float: left;
  }
</style>

<div class="box">
  <div class="item">1</div>
  <div class="item">1</div>
  <div class="item">1</div>
</div>
```

- ⽗级 div 定义伪类 :after

```html
<style>
  .box {
    background: skyblue;
  }

  .box::after {
    content: '';
    display: block;
    clear: both;
  }

  .box .item {
    width: 100px;
    border: 2px solid black;
    float: left;
  }
</style>

<div class="box">
  <div class="item">1</div>
  <div class="item">1</div>
  <div class="item">1</div>
</div>
```

> 推荐使用最后两种方式

## 为什么要初始化 CSS 样式

- 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的⻚⾯显示差异。

- 当然，初始化样式会对 SEO 有⼀定的影响，但⻥和熊掌不可兼得，但力求影响最小的情况下初始化

## css sprite 是什么？有什么优缺点

> css sprite 是什么？
>
> sprite：精灵

- 多数人称之为叫**Css 精灵**，或叫**精灵图**，是将多个小图片拼到一张图片上，通过背景图片定位的方式和元素尺寸调节出要展示的背景图案

> 有什么优点？

- 减少 HTTP 的请求次数，极⼤地提高页面加载速度
- 增加图片信息重复度，提高压缩比，较少图片大小
- 更换方便，值需要在一张或几张图上修改样式即可

> 缺点

- 图⽚合并麻烦
- 维护麻烦，修改⼀个图片可能需要从新布局整个图片样式

> 精灵图举例：

现在有这样一个精灵图：

![img](http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ2trftl/45NBuzDIW489QBoVep5mcR2653VxdmVum93y2OkENJh9tOM8sXpwvPF*A85Z6q0lMtqwMt8HuWUqXM8THK6aiAndkLBPYRY*woyCaIY5qC0!/r)

想要完成下面的成品样子：

![img](http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ2trftl/45NBuzDIW489QBoVep5mce.*uiCr8tDJnVJmY8kXlITw12NToSsSIUiIHgMdrlvRJESUVJQyyY5GmLfxCmaJYKQXkKS8Y*t3G1WBVr1WFLQ!/r)

通过背景图片定位的方式可以很轻松是完成，代码如下

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      ol li {
        width: 60px;
        height: 60px;
      }

      .item1 {
        background: url(http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ2trftl/45NBuzDIW489QBoVep5mcR2653VxdmVum93y2OkENJh9tOM8sXpwvPF*A85Z6q0lMtqwMt8HuWUqXM8THK6aiAndkLBPYRY*woyCaIY5qC0!/r)
          no-repeat;
      }

      .item2 {
        background: url(http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ2trftl/45NBuzDIW489QBoVep5mcR2653VxdmVum93y2OkENJh9tOM8sXpwvPF*A85Z6q0lMtqwMt8HuWUqXM8THK6aiAndkLBPYRY*woyCaIY5qC0!/r)
          no-repeat;
        background-position: -60px 0px;
      }

      .item3 {
        background: url(http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ2trftl/45NBuzDIW489QBoVep5mcR2653VxdmVum93y2OkENJh9tOM8sXpwvPF*A85Z6q0lMtqwMt8HuWUqXM8THK6aiAndkLBPYRY*woyCaIY5qC0!/r)
          no-repeat;
        background-position: -120px 0px;
      }

      .item4 {
        background: url(http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ2trftl/45NBuzDIW489QBoVep5mcR2653VxdmVum93y2OkENJh9tOM8sXpwvPF*A85Z6q0lMtqwMt8HuWUqXM8THK6aiAndkLBPYRY*woyCaIY5qC0!/r)
          no-repeat;
        background-position: 0px -60px;
      }

      .item5 {
        background: url(http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ2trftl/45NBuzDIW489QBoVep5mcR2653VxdmVum93y2OkENJh9tOM8sXpwvPF*A85Z6q0lMtqwMt8HuWUqXM8THK6aiAndkLBPYRY*woyCaIY5qC0!/r)
          no-repeat;
        background-position: -60px -60px;
      }

      .item6 {
        background: url(http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ2trftl/45NBuzDIW489QBoVep5mcR2653VxdmVum93y2OkENJh9tOM8sXpwvPF*A85Z6q0lMtqwMt8HuWUqXM8THK6aiAndkLBPYRY*woyCaIY5qC0!/r)
          no-repeat;
        background-position: -120px -60px;
      }

      .item7 {
        background: url(http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ2trftl/45NBuzDIW489QBoVep5mcR2653VxdmVum93y2OkENJh9tOM8sXpwvPF*A85Z6q0lMtqwMt8HuWUqXM8THK6aiAndkLBPYRY*woyCaIY5qC0!/r)
          no-repeat;
        background-position: 0px -120px;
      }

      .item8 {
        background: url(http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ2trftl/45NBuzDIW489QBoVep5mcR2653VxdmVum93y2OkENJh9tOM8sXpwvPF*A85Z6q0lMtqwMt8HuWUqXM8THK6aiAndkLBPYRY*woyCaIY5qC0!/r)
          no-repeat;
        background-position: -60px -120px;
      }

      .item9 {
        background: url(http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ2trftl/45NBuzDIW489QBoVep5mcR2653VxdmVum93y2OkENJh9tOM8sXpwvPF*A85Z6q0lMtqwMt8HuWUqXM8THK6aiAndkLBPYRY*woyCaIY5qC0!/r)
          no-repeat;
        background-position: -120px -120px;
      }
    </style>
  </head>

  <body>
    <ol>
      <li class="item1"></li>
      <li class="item2"></li>
      <li class="item3"></li>
      <li class="item4"></li>
      <li class="item5"></li>
      <li class="item6"></li>
      <li class="item7"></li>
      <li class="item8"></li>
      <li class="item9"></li>
    </ol>
  </body>
</html>
```

## css3 有哪些新特性

- 圆角：border-radius
- 文字阴影：text-shadow:2px 2px #FF0000;
- 旋转：_transform_: rotate();
- 线型渐变：background-image: linear-gradient(#e66465, #9198e5);

新增伪类：

```
p:first-of-type 选择属于其⽗元素的⾸个 <p> 元素的每个 <p> 元素。
p:last-of-type 选择属于其⽗元素的最后 <p> 元素的每个 <p> 元素。
p:only-of-type 选择属于其⽗元素唯⼀的 <p> 元素的每个 <p> 元素。
p:only-child 选择属于其⽗元素的唯⼀⼦元素的每个 <p> 元素。
p:nth-child(2) 选择属于其⽗元素的第⼆个⼦元素的每个 <p> 元素。
:after 在元素之前添加内容,也可以⽤来做清除浮动。
:before 在元素之后添加内容。
:enabled 已启⽤的表单元素。
:disabled 已禁⽤的表单元素。
:checked 单选框或复选框被选中。
```

## display 有哪些值？说明他们的作用

- display: block; 转换成块状元素。
- display: inline; 转换成⾏内元素。
- display: none; 设置元素不可⻅。
- display: inline-block; 将元素转换为行内块元素。
- display: list-item; 象块类型元素⼀样显示，并添加样式列表标记。
- display: table; 此元素会作为块级表格来显示
- display: inherit; 规定应该从⽗元素继承 display 属性的值

## 介绍⼀下标准的 CSS 的盒模型？低版本 IE 的盒模型有什么不同的

- 有两种， IE 盒模型、 W3C 盒模型

- 盒模型： 内容(content)、填充( padding )、边界( margin )、 边框( border )
- 区 别： IE 的 content 部分把 border 和 padding 计算了进去

## CSS 优先级算法如何计算

- 优先级就近原则，同权重情况下样式定义最近者为准
- 载⼊样式以最后载⼊的定位为准（后面的样式覆盖前面的样式）
- 优先级为: !important > id > class > tag
- !important 比行内样式优先级高

## 对 BFC 规范的理解

- 它决定了元素如何对其内容进⾏定位，以及与其他元素的关系和相互作⽤

## 谈谈浮动和清除浮动

- 浮动的框可以向左或向右移动，直到他的外边缘碰到包含框或另⼀个浮动框的边框为⽌。 由于浮动框不在⽂档的普通流中，所以⽂档的普通流的块框表现得就像浮动框不存在⼀样。浮动的块框会漂浮在⽂档普通流的块框上

## position 的 relative 和 absolute 定位原点是

- position: fixed; 固定定位，参照于浏览器窗⼝进⾏定位

- position: absolute; 绝对定位，参照最近的父级有定位的元素

- position: relative; 相对定位，参照自己本身的位置进行定位，一般用于绝对定位的容器
- _position_: inherit; 规定从父级继承 position 属性

- position: static; 没有定位，默认值。

## display:inline-block 什么时候不会显示间隙

当两个盒子都设置 `display:inline-block;` 之后，两个盒子中间会有个间隙代码如下：

```css
* {
  margin: 0;
  padding: 0;
}
.box1 {
  width: 200px;
  height: 300px;
  background: red;
  display: inline-block;
}
.box2 {
  width: 200px;
  height: 300px;
  background: blue;
  display: inline-block;
}
```

```html
<div class="box">
  <div class="box1"></div>
  <div class="box2"></div>
</div>
```

解决方式：

- 使用 _font-size_: 0;

```css
.box {
  font-size: 0px;
}
```

- 使用 margin 负值

```css
.box2 {
  width: 200px;
  height: 300px;
  background: blue;
  display: inline-block;
  margin-left: -5px;
}
```

- 使用 letter-spacing （设置元素间距）

```css
.box {
  letter-spacing: -5px;
}

.box1 {
  width: 200px;
  height: 300px;
  background: red;
  display: inline-block;
}

.box2 {
  width: 200px;
  height: 300px;
  background: blue;
  display: inline-block;
}
```

```html
<div class="box">
  <div class="box1"></div>
  <div class="box2"></div>
</div>
```

- word-spacing 属性（设置指定元素之间的空间）

> 和上面 `letter-spacing` 用法类似

## PNG\GIF\JPG 的区别及如何选

- PNG
  - 有 PNG8 和 truecolor PNG
  - PNG8 类似 GIF 颜⾊上限为 256 ，⽂件⼩，⽀持 alpha 透明度，⽆动画
  - 适合图标、背景、按钮
- GIF
  - 8 位像素， 256 ⾊
  - ⽆损压缩
  - ⽀持简单动画
  - ⽀持 boolean 透明
  - 适合简单动画
- JPG
  - 颜⾊限于 256
  - 有损压缩
  - 可控制压缩质量
  - 不⽀持透明
  - 适合照⽚

## 行内元素 float:left 后是否变为块级元素

- ⾏内元素设置成浮动之后变得更加像是 inline-block （⾏内块级元素，设置成这个属性的元素会同时拥有⾏内和块级的特性，最明显的不同是它的默认宽度不是 100% ），这时候给⾏内元素设置 padding-top 和 padding-bottom 或者 width、height 都是有效果的

## ::before 和 :after 中双冒号和单冒号有什么区别？解释⼀下这 2 个伪元素的作用

- 单冒号( : )⽤于 CSS3 伪类，双冒号( :: )⽤于 CSS3 伪元素

:before 和 :after ：在元素之前和之后插入内容

```html
<p id="text">这是一段文字</p>
```

```css
#text:before {
  content: '你好啊';
  display: block;
  background: skyblue;
}
#text:after {
  content: '你是谁';
  display: block;
  background: green;
}
```

- 效果的一样的，仅用于区分伪类和伪元素

## 如果需要手动写动画，你认为最小时间间隔是多久，为什么

- 多数显示器默认频率是 60Hz ，即 1 秒刷新 60 次，所以理论上最⼩间隔为：
  > ms：毫秒

1000 / 60 ＝ 16.7ms

## CSS 不同选择器的权重(CSS 层叠的规则)

- !important 规则最重要，⼤于其它规则
- ⾏内样式规则，加 1000
- 对于选择器中给定的各个 ID 属性值，加 100
- 对于选择器中给定的各个类属性、属性选择器或者伪类选择器，加 10
- 如果权值⼀样，则按照样式规则的先后顺序来应用，按照后者覆盖前者的规则

## 列出你所知道可以改变页面布局的属性

- position
- display
- float
- width
- height
- margin
- padding
- top
- left
- right

## CSS 在性能优化方面的实践

- css 压缩与合并、 Gzip 压缩
- css ⽂件放在 head 里、不要用 @import
- 尽量用缩写、避免用滤镜、合理使用选择器

## CSS3 动画（简单动画的实现，如旋转等）

依靠 CSS3 中提出的三个属性： `transition` 、 `transform`、 `animation`

- transition：规定元素在变化过程中是怎么样进行的，例如

```html
<style>
  #box {
    width: 100px;
    height: 100px;
    background: red;
    transition: 2s;
  }

  #box:hover {
    width: 300px;
  }
</style>

<body>
  <div id="box"></div>
</body>
```

其他可选属性：`transition-property `、`transition-duration`、

`transition-timing-function`、`transition-delay`

- transform：定义元素的变化结果

```html
<style>
  #box {
    width: 100px;
    height: 100px;
    background: red;
    transform: rotate(70deg);
  }
</style>

<body>
  <div id="box"></div>
</body>
```

其他可选属性：

rotate：旋转 `transform: rotate(70deg);`

scale：放大倍数 `transform: scale(2);`

skew：倾斜 `transform: skew(20deg);`

translate：位移 `transform: translate(100px);`

- animation：定义动画

```html
<style>
  #box {
    width: 100px;
    height: 100px;
    background: red;
    /* 动画名称：box 时长 5s infinite：无限次 */
    animation: box 5s infinite;
  }
</style>

<body>
  <div id="box">hello</div>
</body>
```

其他可选属性：

animation-name：动画名称

animation-duration：动画持续时间

animation-timing-function：从开始到结束以相同的速度播放动画

animation-delay：动画延迟

animation-iteration-count：动画重复次数

animation-direction：动画方向

## base64 的原理及优缺点

优点：可以加密，减少了 HTTTP 请求

缺点：需要消耗 CPU 进⾏编解码

## 几种常见的 CSS 布局

- 流体布局

举个实例：三列布局（左右固定；中间自适应）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      .left {
        float: left;
        width: 100px;
        height: 200px;
        background: red;
      }

      .right {
        float: right;
        width: 200px;
        height: 200px;
        background: blue;
      }

      .main {
        margin-left: 120px;
        margin-right: 220px;
        height: 200px;
        background: green;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main"></div>
    </div>
  </body>
</html>
```

- 圣杯布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      .container {
        margin-left: 120px;
        margin-right: 220px;
      }

      .main {
        float: left;
        width: 100%;
        height: 300px;
        background: green;
      }

      .left {
        position: relative;
        left: -120px;
        float: left;
        height: 300px;
        width: 100px;
        margin-left: -100%;
        background: red;
      }

      .right {
        position: relative;
        right: -220px;
        float: right;
        height: 300px;
        width: 200px;
        margin-left: -200px;
        background: blue;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="main"></div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </body>
</html>
```

- 双飞翼布局

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    .content {
      float: left;
      width: 100%;
    }

    .main {
      height: 200px;
      margin-left: 110px;
      margin-right: 220px;
      background: green;
    }

    .main::after {
      content: '';
      display: block;
      font-size: 0;
      height: 0;
      clear: both;
    }

    .left {
      float: left;
      height: 200px;
      width: 100px;
      margin-left: -100%;
      background: red;
    }

    .right {
      float: right;
      height: 200px;
      width: 200px;
      margin-left: -200px;
      background: blue;
    }
  </style>
</head>

<div class="content">
  <div class="main"></div>
</div>
<div class="left"></div>
<div class="right"></div>
</body>

</html>
```

## stylus / sass / less 区别

- 均具有“变量”、“混合”、“嵌套”、“继承”、“颜色混合”五大基本特性

- Scss 和 LESS 语法较为严谨， LESS 要求⼀定要使用⼤括号`{}`， Scss 和 Stylus 可 以通过缩进表示层次与嵌套关系

- Scss 无全局变量的概念， LESS 和 Stylus 有类似于其它语言的作用域概念

- Sass 是基于 Ruby 语言的，而 LESS 和 Stylus 可以基于 NodeJS NPM 下载相应库后 进⾏编译

## postcss 的作用

[postcss 官网](https://www.postcss.com.cn)

**postcss**介绍：

postcss 是一个允许使用 JS 插件来转换样式的工具，就是用来处理 Css 的

postcss 有很多的插件，它可以检查你的 Css 代码，支持 `CSS Variables` 和 `Mixins`

> CSS Variables：Css 变量，详见：http://www.ruanyifeng.com/blog/2017/05/css-variables.html
>
> Mixins：混入，详见：https://github.com/postcss/postcss-mixins

帮助编译未被浏览器广泛支持的先进 CSS 语法、内联图片，以及很多优秀的功能

> 内联图片：详细解答暂未找到。详见：https://zhidao.baidu.com/question/39422354.html

其实 postcss 本身没有什么功能，本身只是提供了解析 Css 的文件，然后会被各种插件来做各种各样的事情，它的功能不是单一的，其实有着各种各样的功能，都是取决于它的插件，目前 postcss 已经有了 200 多个插件，例如：

- [Autoprefixer](https://github.com/postcss/autoprefixer) 插件可以实现自动添加浏览器厂商前缀
- [PostCSS Preset Env](https://github.com/csstools/postcss-preset-env) 插件可以让你的使用最新的 CSS 语法向下兼容 类似 JS 中的 `Bable`
- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 可以将 px 转换为 rem
- ...

PostCss 一般不单独使用，它会和已有的构建工具相互结合

Vue CLI 默认集成了 PostCSS，并且默认开启了 Autoprefixer （自动添加浏览器厂商前缀）

详见：https://cli.vuejs.org/zh/guide/css.html#postcss

## 什么是外边距重叠？重叠的结果是什么

在 CSS 当中，相邻的两个盒子（可能是兄弟关系也可能是祖先关系）的外边距可以结合成

⼀个单独的外边距。这种合并外边距的⽅式被称为折叠，并且因⽽所结合成的外边距称为

折叠外边距。

**折叠结果遵循下列计算规则：**

- 两个相邻的外边距都是正数时，折叠结果是它们两者之间较⼤的值
- 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较⼤值
- 两个外边距⼀正⼀负时，折叠结果是两者的相加的和

## rgba()和 opacity 的透明效果有什么不同

- gba() 和 opacity 都能实现透明效果，但最⼤的不同是 opacity 作⽤于元素，以及元素内的所有内容的透明度

- 而 rgba() 只作用于元素的颜⾊或其背景色。（设置 rgba 透明的元素的⼦元素不会继承透明效果！）

## px 和 em 的区别

- px 和 em 都是⻓度单位，区别是， px 的值是固定的，指定是多少就是多少，计算比较容易。 em 得值不是固定的，并且 em 会继承⽗级元素的字体大小

- 浏览器的默认字体⾼都是 16px，所以未经调整的浏览器都符合: 1em=16px，那么 12px=0.75em，10px=0.625em

## css 中 content 属性有什么作用

- css 的 content 属性专⻔应⽤在 before / after 伪元素上
- ⽤于来插⼊⽣成 内容

例如：

```html
<style>
  #text:before {
    content: '你好啊';
    display: block;
    background: skyblue;
  }

  #text:after {
    content: '你是谁';
    display: block;
    background: green;
  }
</style>

<body>
  <p id="text">这是一段文字</p>
</body>
```

- 最常见的应用是利用伪类清除浮动

例如：

```html
<style>
  .box1 {
    width: 200px;
    height: 300px;
    background: red;
    float: right;
  }

  .box2 {
    width: 500px;
    height: 300px;
    background: skyblue;
  }

  .clear::before,
  .clear::after {
    content: '';
    display: block;
    clear: both;
  }

  .clear1 {
    clear: both;
  }
</style>

<body>
  <div class="clear">
    <div class="box1"></div>
  </div>
  <div class="box2"></div>

  <h2 class="clear">浮动元素之下的元素</h2>
</body>
```

## 如何使用 CSS 实现硬件加速

> 硬件加速是指通过创建独⽴的复合图层，让 GPU 来渲染这个图层，从⽽提⾼性能

- ⼀般触发硬件加速的 CSS 属性有 transform 、 opacity 、 filter ，为了避免 2D 动画在开始和结束的时候的 repaint 操作，⼀般使⽤ tranform:translateZ(0)

## 重绘和回流（重排）是什么，如何避免

- DOM 的变化影响到了元素的⼏何属性（宽⾼）,浏览器重新计算元素的⼏何属性，其他元素的几何
- 属性和位置也会受到影响，浏览器需要重新构造渲染树，这个过程称为重排，浏览器将受到影响的部分
- 重新绘制到屏幕上的过程称为重绘。引起重排的原因有
  - 添加或者删除可⻅的 DOM 元素
  - 元素位置、尺⼨、内容改变
  - 浏览器⻚⾯初始化
  - 浏览器窗⼝尺⼨改变，重排⼀定重绘，重绘不⼀定重排

**减少重绘和重排的方法：**

- 不在布局信息改变时做 DOM 查询
- 使⽤ cssText 或者 className ⼀次性改变属性
- 使⽤ fragment、
- 对于多次重排的元素，如动画，使⽤绝对定位脱离⽂档流，让他的改变不影响到其他元素

## 说⼀说 css3 的 animation

- css3 的 animation 是 css3 新增的动画属性，这个 css3 动画的每⼀帧是通过 @keyframes 来声明的， keyframes 声明了动画的名称，通过 from 、 to 或者是百分⽐来定义

- 每⼀帧动画元素的状态，通过 animation-name 来引⽤这个动画，同时 css3 动画也可以定义动画运⾏的时⻓、动画开始时间、动画播放⽅向、动画循环次数、动画播放的⽅式

## 如何实现小于 12px 的字体效果

- transform:scale() 这个属性只可以缩放可以定义宽⾼的元素，⽽⾏内元素是没有宽⾼的，我们可以加上⼀个 display:inline-block;

## 说一说盒模型

在一个文档中，每个元素都被表示为一个矩形的盒子。在 CSS 中，使用标准盒模型来定义这些矩形盒子的，每一个盒子都从内到外都有 4 个区域：**content、padding、border、margin**

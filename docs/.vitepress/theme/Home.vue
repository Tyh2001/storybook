<template>
  <div id="home">
    <p align="center">
      <img src="https://tianyuhao.cn/images/my.png" />
    </p>
    <p class="title">Tyh2001</p>

    <p align="center">
      <a href="/blog/docs/hello/hello.html">
        <button class="start">😊 快速开始</button>
      </a>
      <a href="https://github.com/Tyh2001" target="_back">
        <button>Github</button>
      </a>
    </p>

    <p class="box">
      <strong>写在前面</strong>
      <span>🍉 最怕你一生碌碌无为，还安慰自己平凡可贵。</span>
      <span>
        🎨
        所有的框架都会过时，我们需要的就是能够沉淀下来不变的东西，什么东西不变？算法，数据结构，编译原理，网络协议，操作系统，设计模式。
      </span>
    </p>

    <p class="box">
      <strong>内容</strong>
      <span>⚡ 记录 JavaScript 的各种方法</span>
      <span>🌲 Vue2 和 Vue3 的一些使用</span>
      <span>🔨 Vue 周边一些生态</span>
      <span>📌 TypeScript 基础</span>
      <span>📃 我的文章</span>
      <span>📆 里程碑</span>
      <span>🏆 前端面试题</span>
    </p>
  </div>
</template>

<style scoped>
#home {
  max-width: 620px;
  margin: 40px auto;
  box-sizing: border-box;
  padding: 40px;
  padding-bottom: 0;
}
img {
  width: 160px;
  user-select: none;
}
.title {
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  line-height: 70px;
  margin-bottom: 20px;
  user-select: none;
}
button {
  width: 120px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #eee;
  color: #333;
  border-radius: 10px;
  margin-bottom: 30px;
  user-select: none;
}
.start {
  margin-right: 15px;
  background: #2d5af1;
  color: #fff;
  font-weight: 600;
}
button:hover {
  opacity: 0.8;
}

button:active {
  opacity: 1;
}
.box {
  padding: 40px 0;
  border-top: 1px solid rgb(224, 224, 224);
  box-sizing: border-box;
}
.box span {
  display: block;
  line-height: 40px;
}
.box strong {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  display: block;
}
</style>

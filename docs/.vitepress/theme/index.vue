<template>
  <main>
    <p align="center">
      <img class="avatar" src="https://tianyuhao.cn/images/auto/my.png" />
    </p>

    <h3 class="title">Tyh2001</h3>

    <p align="center">
      <a class="start" href="/docs/hello/hello.html">
        😊快速开始
      </a>
      <a class="github" href="https://github.com/Tyh2001" target="_blank">
        Github
      </a>
    </p>

    <h3 class="write-start">写在前面</h3>
    <p>🍉 最怕你一生碌碌无为，还安慰自己平凡可贵。</p>
    <p>🎃 不要惧怕写出不完美的代码，只要在后续迭代过程中“见招拆招”，代码就会变得越来越完善，框架也会变得越来越健壮。</p>

    <h3>主要内容</h3>
    <p>⚡ 记录 JavaScript 的各种方法</p>
    <p>🌲 Vue2 和 Vue3 的一些使用</p>
    <p>🔨 Vue 周边一些生态</p>
    <p>📌 TypeScript 基础</p>
    <p>📃 我的文章</p>
    <p>📆 里程碑</p>
    <p>🏆 前端面试题</p>
  </main>
</template>

<style scoped>
main {
  max-width: 620px;
  margin: 40px auto;
  box-sizing: border-box;
  padding: 40px;
  padding-bottom: 0;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.title {
  text-align: center;
  font-weight: 600;
  color: #333;
  line-height: 70px;
  font-size: 22px;
}

.github,
.start {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: none;
  outline: none;
  user-select: none;
  text-decoration: none;
  height: 35px;
  border-radius: 20px;
  transition: .3s;
  line-height: 1;
  cursor: pointer;
  padding: 0 25px;
  background: #2d5af1;
  white-space: nowrap;
  vertical-align: middle;
  color: #fff;
}

.github {
  background: #f0f0f0;
  color: #333;
  margin-left: 15px;
}

.f-button__default {
  margin-left: 15px;
}

p {
  display: block;
  line-height: 40px;
}

h3 {
  font-size: 17px;
  font-weight: 600;
  color: #333;
  line-height: 50px;
}

.write-start {
  margin-top: 50px;
}
</style>

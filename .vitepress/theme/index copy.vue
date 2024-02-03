<script lang="ts" setup></script>

<template>
  <f-main>
    <f-text align="center">
      <f-avatar
        class="avatar"
        :size="110"
        round
        src="https://avatars.githubusercontent.com/u/73180970?v=4"
      />
    </f-text>

    <f-text align="center" style="margin-top: 20px">
      <f-button
        round
        type="primary"
        class="start"
        href="/docs/hello/hello.html"
      >
        快速开始
      </f-button>
      <f-button
        round
        href="https://github.com/Tyh2001"
        target="_blank"
        style="margin-left: 20px"
      >
        Github
      </f-button>
    </f-text>

    <f-divider margin="40px" color="#eef" />

    <f-text bold block>写在前面</f-text>
    <f-text block>🍉 最怕你一生碌碌无为，还安慰自己平凡可贵。</f-text>
    <f-text block>
      🎃
      不要惧怕写出不完美的代码，只要在后续迭代过程中“见招拆招”，代码就会变得越来越完善，框架也会变得越来越健壮。
    </f-text>

    <f-divider margin="40px" color="#eef" />

    <f-text bold block>特性</f-text>
    <f-text>⚡ 记录 JavaScript 的各种方法</f-text>
    <f-text>🌲 Vue2 和 Vue3 的一些使用</f-text>
    <f-text>🔨 Vue 周边一些生态</f-text>
    <f-text>📌 TypeScript 基础</f-text>
    <f-text>📃 我的文章</f-text>
    <f-text>📆 里程碑</f-text>
    <f-text>🏆 前端面试题</f-text>
  </f-main>
</template>

<style scoped>
  .f-main {
    max-width: 620px;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 40px;
    padding-bottom: 0;
  }

  .f-button-default {
    margin-left: 10px;
  }

  .f-text {
    display: block;
    line-height: 40px;
  }
</style>

<script lang="ts" setup>
  const articles = [
    {
      url: '/article/annual-summary/2022',
      title: '田同学 2022 年度总结',
      banner:
        'https://raw.githubusercontent.com/Tyh2001/tyh-blog/master/.vitepress/theme/assets/1.jpg'
    },
    {
      url: '/article/annual-summary/2023',
      title: '田同学 2023 年度总结',
      banner:
        'https://raw.githubusercontent.com/Tyh2001/tyh-blog/master/.vitepress/theme/assets/2.jpg'
    }
  ]
</script>

<template>
  <f-main>
    <!-- 头部 -->
    <div class="header">
      <div class="header-title"></div>
    </div>

    <!-- 内容部分 -->
    <div class="body">
      <!-- 标题 -->
      <div class="body-title">精选文章</div>

      <!-- 推荐文章 -->
      <div class="articles">
        <a
          class="article-item"
          v-for="(item, index) in articles"
          :key="index"
          :href="item.url"
          :style="{
            background: `url('${item.banner}') no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
        >
          <div class="article-title">
            {{ item.title }}
          </div>
        </a>
      </div>
    </div>
  </f-main>
</template>

<style lang="scss" scoped>
  .f-main {
    max-width: 820px;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 40px;
    padding-bottom: 0;

    .body {
      .body-title {
        font-size: 22px;
        color: #111;
        margin-bottom: 20px;
        padding: 0 10px;
        box-sizing: border-box;
      }

      .articles {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        .article-item {
          height: 220px;
          width: 100%;
          display: block;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          cursor: pointer;

          .article-title {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            backdrop-filter: blur(25px);
            height: 50px;
            display: flex;
            align-items: center;
            padding: 0 23px;
            box-sizing: border-box;
            color: #fff;
            font-size: 18px;
            cursor: pointer;
            user-select: none;
          }
        }
      }
    }
  }
</style>

<script lang="ts" setup>
  const articles = [
    {
      url: '/article/annual-summary/2022',
      title: '田同学 2022 年度总结',
      banner: './assets/1.jpg'
    }
  ]
</script>

<template>
  <f-main>
    <div class="body">
      <div class="body-article" v-for="(item, index) in articles">
        <img :src="item.banner" alt="" />
        {{ item.title }}
      </div>
    </div>
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
</style>

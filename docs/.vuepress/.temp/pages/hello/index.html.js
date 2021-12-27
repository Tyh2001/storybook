export const data = {
  "key": "v-fe51d454",
  "path": "/hello/",
  "title": "Hello",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Welcome to my Blog",
      "slug": "welcome-to-my-blog",
      "children": []
    },
    {
      "level": 2,
      "title": "你喜欢 vue 吗？",
      "slug": "你喜欢-vue-吗",
      "children": []
    },
    {
      "level": 2,
      "title": "推荐给你",
      "slug": "推荐给你",
      "children": [
        {
          "level": 3,
          "title": "介绍",
          "slug": "介绍",
          "children": []
        },
        {
          "level": 3,
          "title": "安装",
          "slug": "安装",
          "children": []
        },
        {
          "level": 3,
          "title": "快速上手",
          "slug": "快速上手",
          "children": []
        },
        {
          "level": 3,
          "title": "更新日志",
          "slug": "更新日志",
          "children": []
        },
        {
          "level": 3,
          "title": "贡献者",
          "slug": "贡献者",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": null
  },
  "filePathRelative": "hello/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

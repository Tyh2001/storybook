export const data = {
  "key": "v-7b071d9d",
  "path": "/hello/hello.html",
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
      "title": "强烈推荐",
      "slug": "强烈推荐",
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
    "updatedTime": 1639926868000,
    "contributors": [
      {
        "name": "unknown",
        "email": "you@example.com",
        "commits": 6
      },
      {
        "name": "Tyh2001",
        "email": "1469442737@qq.com",
        "commits": 2
      },
      {
        "name": "15227241216",
        "email": "1469442737@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "hello/hello.md"
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

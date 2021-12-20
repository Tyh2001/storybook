export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/my.png",
    "heroText": "Tyh2001",
    "tagline": "最怕你一生碌碌无为，还安慰自己平凡可贵。",
    "actionText": "start",
    "actions": [
      {
        "text": "快速上手",
        "link": "/hello/hello",
        "type": "primary"
      },
      {
        "text": "Github",
        "link": "https://github.com/Tyh2001/my-blog",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "简洁至上",
        "details": "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"
      },
      {
        "title": "Vue 驱动",
        "details": "享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。"
      },
      {
        "title": "高性能",
        "details": "VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。"
      }
    ],
    "footer": "Tyh2001 | 浙ICP备2021024540号-1"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1639291904000,
    "contributors": [
      {
        "name": "unknown",
        "email": "you@example.com",
        "commits": 4
      },
      {
        "name": "15227241216",
        "email": "1469442737@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
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

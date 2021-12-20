export const themeData = {
  "logo": "/my.png",
  "lastUpdated": "最后更新",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "Github",
      "link": "https://github.com/Tyh2001/my-note-web"
    },
    {
      "text": "tyh-Ui",
      "ariaLabel": "Language Menu",
      "children": [
        {
          "text": "tyh-ui",
          "link": "https://tianyuhao.icu/tyhui"
        },
        {
          "text": "tyh-ui2",
          "link": "https://tianyuhao.icu/tyhui/v3"
        }
      ]
    },
    {
      "text": "关于我",
      "ariaLabel": "Language Menu",
      "children": [
        {
          "text": "个人网站",
          "link": "https://tianyuhao.icu"
        },
        {
          "text": "Gitee",
          "link": "https://gitee.com/tyh666999"
        },
        {
          "text": "微博",
          "link": "https://weibo.com/tyh2001"
        }
      ]
    },
    {
      "text": "相关链接",
      "ariaLabel": "Language Menu",
      "children": [
        {
          "text": "Vue3",
          "link": "https://v3.cn.vuejs.org"
        },
        {
          "text": "Vite",
          "link": "https://cn.vitejs.dev/"
        },
        {
          "text": "Pinia",
          "link": "https://pinia.esm.dev"
        },
        {
          "text": "VuePress",
          "link": "https://vuepress.vuejs.org/zh"
        }
      ]
    }
  ],
  "sidebarDepth": 3,
  "sidebar": [
    {
      "text": "Hello",
      "link": "/hello/hello"
    },
    {
      "text": "里程碑",
      "link": "/milepost/milepost"
    },
    {
      "text": "Vue3 相关",
      "link": "/vue3/vue3"
    },
    {
      "text": "Js 相关",
      "link": "/javascript/js-function",
      "children": [
        {
          "text": "基础",
          "link": "/javascript/js-basic"
        },
        {
          "text": "函数相关",
          "link": "/javascript/js-function"
        },
        {
          "text": "方法",
          "link": "/javascript/js-methods"
        },
        {
          "text": "工具函数",
          "link": "/javascript/js-utils"
        },
        {
          "text": "算法",
          "link": "/javascript/js-computed"
        }
      ]
    },
    {
      "text": "TypeScript 基础",
      "link": "/typescript/ts"
    },
    {
      "text": "Vue2 相关",
      "link": "/vue2/vue2"
    },
    {
      "text": "其它技术",
      "link": "/other/other"
    },
    {
      "text": "前端面试题",
      "link": "/int-ques/ques-web",
      "children": [
        {
          "text": "Web 综合问题",
          "link": "/int-ques/ques-web"
        },
        {
          "text": "Css 相关问题",
          "link": "/int-ques/ques-css"
        },
        {
          "text": "Html 相关问题",
          "link": "/int-ques/ques-html"
        },
        {
          "text": "Js 相关问题",
          "link": "/int-ques/ques-js"
        },
        {
          "text": "Vue2 相关问题",
          "link": "/int-ques/ques-vue2"
        },
        {
          "text": "Vue3 相关问题",
          "link": "/int-ques/ques-vue3"
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

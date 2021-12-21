export const themeData = {
  "logo": "/my.png",
  "contributors": false,
  "lastUpdatedText": "最后更新",
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
          "link": "https://v2.vuepress.vuejs.org/zh/"
        }
      ]
    }
  ],
  "sidebar": [
    "/hello/hello",
    "/milepost/milepost",
    "/vue3/vue3",
    "/vue2/vue2",
    "/typescript/typescript",
    {
      "text": "Js 相关",
      "children": [
        "/javascript/js-basic",
        "/javascript/js-function",
        "/javascript/js-methods",
        "/javascript/js-utils",
        "/javascript/js-computed"
      ]
    },
    "/other/other",
    {
      "text": "前端面试题",
      "children": [
        "/int-ques/ques-web",
        "/int-ques/ques-css",
        "/int-ques/ques-html",
        "/int-ques/ques-js",
        "/int-ques/ques-vue2",
        "/int-ques/ques-vue3"
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
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
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

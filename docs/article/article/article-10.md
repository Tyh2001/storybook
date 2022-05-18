# Vite + TS 配置 .env 环境文件

## 新建配置文件

在项目的 `根目录` 下新建 `.env.development` 和 `.env.production` 两个配置文件

文件的名称必须这样定义，否则读取不到

- `.env.development` 是开发环境使用的配置文件
- `.env.production` 是生产环境中使用的配置文件

## 写入内容

下面使用接口的 `baseUrl` 来举例，内部可以定义一些变量，但是变量名必须是以 `VITE_` 为开头的名称

.env.development

```
VITE_BASE_URL = 'http://123.123.2.122:8888/api'
```

## TypeScript 智能提示

在 `src` 下新建 `env.d.ts` 加入下面内容，使以 `VITE_` 为前缀的用户自定义环境变量的 `TypeScript` 加入智能提示

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

## 获取变量

在配置文件中的变量可以在全局任意地方获取，获取方式为 `import.meta.env.VITE_xxx`

```ts
console.log(import.meta.env.VITE_BASE_URL)
```

## 官方文档参考

- [环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html#production-replacement)

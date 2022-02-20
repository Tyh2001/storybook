# 我的文章

## Git 常用命令

| 命令                      | 简要说明                       |
| ------------------------- | ------------------------------ |
| git clone 仓库地址        | 克隆版本库                     |
| git status                | 查看状态                       |
| git add .                 | 添加至暂存区                   |
| git commit -m '说明'      | 提交并添加说明                 |
| git push -u origin master | 推送至远程仓库 master 分支     |
| git branch -a             | 列出所有分支                   |
| git branch test           | 创建 test 分支                 |
| git checkout test         | 切换到 test 分支               |
| git merge test            | 把 test 分支合并到 master 分支 |
| git branch -d test        | 删除 test 分支                 |
| git pull origin master    | 同步分支到本地                 |
| git pull origin master    | 同步分支到本地                 |
| git reset --hard 版本号   | 获取历史版本                   |

## Npm 一些命令

`--save` 是什么意思？

`npm i xxx --save` 是把依赖写入进 dependencies 对象里面，

dependencies 是生产环境下的依赖，项目刚需的依赖在这里，比如 UI 框架，字体文件等线上必需的东西

`-d` 什么意思？

`npm i xxx -g` 就是安装到全局下，在命令行的任何地方都可以操作，不会提示“命令不存在等错误”

## 第三方库推荐

### Rollup Plugin Visualizer

**介绍**

[rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) 是一个汇总插件可视化工具，项目执行 `npm run build` 之后，项目根目录下会生成一个 `stats.html` 可以展示安装的第三方包文件大小

**安装**

```shell
npm install --save-dev rollup-plugin-visualizer
```

**配置**

`vite.config.js` 中：

```js
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [vue(), visualizer()],
})
```

### json-bigint

js 能够精准的表示的整数范围在 -2^53 到 -2^53 之间（不含两个端点），超出这个范围，则无法正常显示这个值，这使得 JavaScript 不适合金融和科学方面的计算

通常我么在使用**axios**发送请求的时候，后台可能会返回比较大的一个数字，因为**axios**会把 JSON 格式字符串转换为 JS 对象，那么如果这个数字很大，那么就会出现问题，比如：

```js
const str = '{ "id": 158464848747369549 }'
console.log(JSON.parse(str).id)
```

这样输出的`id`就不是原始的数据了

因为这个数字超出了 JS 的安全整数范围，所以不能正常表示了，那么**json-bigint**就可以很好的帮助解决这个问题

**json-bigint** Github 仓库地址：[json-bigint](https://github.com/sidorares/json-bigint)

安装 **json-bigint**

```shell
npm i json-bigint
```

可以通过 json-bigint 内置的方法来获取这样大的数据

1. 将 JSON 数据转换为 JavaScript 对象

```js
JSONbig.parse()
```

等同于

```js
JSON.parse()
```

通过`JSONbig.parse()`转换为的是一个 js 对象，其实它只是换了一种形式表示出了这个数字，那么想要再获得这个数据，还需要`toString()`一下就可以获取到了

```js
// 引入 json-bigint
import JSONbig from 'json-bigint'

const str = '{ "id": 158464848747369549 }'
console.log(JSON.parse(str).id)
console.log(JSONbig.parse(str).id.toString())
```

2. 将 JavaScript 对象转换为 JSON 字符串

```js
JSONbig.stringify()
```

等同于

```js
JSON.stringify()
```

虽然这个两个方法的等同于的，但是通过`JSONbig.parse()`转换为的 JavaScript 对象使用`JSON.stringify()`转换为 JSON 字符串会有一定的问题

> 所以。用什么转来的，就用什么转回去就不会有问题了

## Github 提交代码不增加小绿格?

事情是这样的，我在公司和在家里都会往 GIthub 上提交代码，但是大多数时间都是在公司提交，但是在公司提交就不会增加首页下方小绿格的贡献度数量，后来发现公司电脑的邮箱不是 Github 绑定的邮箱才导致的，所以解决方案是

修改全局默认的用户名和邮箱

```shell
git config --global user.name 'xxxxx'
git config --global user.email 'xxxxx@qq.com'
```

这样修改之后再提交就会增加贡献度和下方小绿格了。

## 进制转换

### 进制的概念

**二进制：** 0、1

**八进制：** 0、1、2、3、4、5、6、7

**十进制：** 0、1、2、3、4、5、6、7、8、9

**十六进制：** 0、1、2、3、4、5、6、7、8、9、A、B、C、D、E

| 二进制   | 八进制   | 十进制   | 十六进制 |
| -------- | -------- | -------- | -------- |
| 1 -> 1   | 7 -> 7   | 9 -> 9   | 14 -> D  |
| 2 -> 10  | 8 -> 10  | 10 -> 10 | 15 -> E  |
| 3 -> 11  | 9 -> 11  | 11 -> 11 | 16 -> 10 |
| 4 -> 100 | 10 -> 12 | 12 -> 12 | 17 -> 11 |

### 进制转换

**将十进制转换为二 八 十六进制**

公式: `除N 求余 倒序` 一直将除到商为 0 时，在将余数倒序

想要将十进制转换为其他进制,就除多少,比如下面将十进制的 21 转换

**转换为二进制:**

```
21 / 2 = 10 …… 1
10 / 2 = 5 …… 0
5 / 2 = 2 …… 1
2 / 2 = 1 …… 0
1 / 2 = 0 …… 1
```

所以 21 的二进制结果为 `10101`

**转换为八进制:**

```
21 / 8 = 2 …… 5
2 / 8 = 0 …… 2
```

所以 21 的八进制结果为 `25`

**转换为十六进制:**

```
21 / 16 = 1 …… 5
1 / 16 = 0 …… 1
```

所以 21 的十六进制结果为 `15`

**将二 八 十六进制转换为十进制**

上面介绍了将将十进制转换为二 八 十六进制，下面介绍将二 八 十六进制转换为十进制

**二进制转换为十进制**

`10101` 转换为十进制就是

```
1 * 2⁰ + 0 * 2¹ + 1 * 2² + 0 * 2³ + 1 * 2⁴ = 1 + 0 + 4 + 0 + 16 = 21
```

> 一个数的零次方都是 1

**八进制转换为十进制**

```
5 * 8⁰ + 2 * 8¹ = 5 + 16 = 21
```

**十六进制转换为十进制**

```
5 * 16⁰ + 1 * 16¹ = 16 + 5 = 21
```

## 怎么将 html 文件以端口形式打开

VScode 安装 Live Server

html 文件中右键点击 `Open with Live Server` 就可以启动一个端口了

当编辑器中代码保存后浏览器不需要刷新就可以进行同步

## 服务器的 ssl 配置文件在哪里？

下面地址：

```shell
/usr/local/nginx/conf/nginx.conf
```

# Vue3 相关

## 组件结构

vue3 的组件结构和 vue2 的结果在 js 部分的差别的最大的，文件结构为：

```vue
<template></template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped></style>
```

`template` 中不再可以有一个根节点了，现在是可以有很多个。

`script` 中不再有 `data、mounted、created、watch、mounted` 等钩子函数，现在需要将所有的都集合到了 `setup` 函数中

## setup

`sepup` 是在单文件组件中使用**组合式 API** 的编译时的语法糖，相比普通的 script 语法，它有更多的优势：

- 更少的样板内容，更简洁的代码。
- 能够使用纯 Typescript 声明 props 和抛出事件。
- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。

### 定义变量

在 `setup` 中可以定义函数或者变量，**但是必须将这些函数或变量 return 出去**，才可以正常在模板中使用。

```vue
<template>
  <h1>{{ text }}</h1>

  <button @click="onclick">点击</button>
</template>

<script>
export default {
  setup() {
    const text = 'hello vue3'

    function onclick() {
      console.log('被点击了')
    }

    return {
      text,
      onclick,
    }
  },
}
</script>
```

### 响应式变量 ref

如果想要更改某个变量的时候，那么像下面这种直接赋值的方式修改，是不能实现的：

```vue
<template>
  <h1>{{ text }}</h1>

  <button @click="change">修改内容</button>
</template>

<script>
export default {
  setup() {
    let text = 'hello vue3'

    function change() {
      text = '你好啊'
    }

    return {
      text,
      change,
    }
  },
}
</script>
```

如果想要使变量变成响应式，那么就需要创建响应式的变量，可以通过在 vue 来解构出一个函数来创建响应式变量

```vue
<template>
  <h1>{{ text }}</h1>

  <button @click="change">修改内容</button>
</template>

<script>
// 通过在 vue 中解构出 ref 函数
import { ref } from 'vue'
export default {
  setup() {
    // 使变量变成响应式变量
    let text = ref('hello vue3')

    function change() {
      // 通过变量名.value 来改变变量
      text.value = '你好啊'
    }

    return {
      text,
      change,
    }
  },
}
</script>
```

### 响应式对象

使用解构出的 `reactive` 可以将对象变成响应式的对象：

```vue
<script>
import { reactive } from 'vue'
export default {
  setup() {
    const student = reactive({
      name: '小明',
      ahe: 12,
    })

    return {
      student,
    }
  },
}
</script>
```

**注：只有将对象或者变量变成响应式的才可以随意修改其值**

## setup 函数和 script 上作用 setup

在上面，我介绍了 vue3 的全新目录结构，整理使用组合 api，直接暴露出来一个 setup 函数，代码是这样的：

```js
export default {
  setup() {
    const name = '张三'

    return {
      name,
    }
  },
}
```

通过在 setup 中写入变量或者函数，在 return 出去提供给模板使用。

但是 setup 是有个语法糖的写法，就是将 setup 当作属性直接作用到 script 标签上，如下：

```vue
<template>
  {{ name }}
</template>

<script setup>
const name = '张三'
</script>
```

将 `script` 标签添加 `setup` 属性之后，这样定义的变量 name 变量，**可以在模板中直接使用，并不需要 return 出去。**这样的代码段自然而然又变得简洁了很多。其实 script setup 就相当于在编译运行是把代码放到了 setup 函数中运行，然后把导出的变量定义到上下文中，并包含在返回的对象中。



对于导入组件，导入之后可以直接在模板上使用，并不需要注册，也可以正常工作。

```vue
<template>
  <my-button />
</template>

<script setup>
import MyButton from './components/MyButton.vue'
</script>
```



当然，这种语法糖的写法，也是会有缺失的地方，有时候我们需要更改组件选项，比如添加 name 属性，这时候就需要再引入一个 script，在上方写入对应的`export`即可

```vue
<script>
export default {
  name: 'app',
}
</script>

<script setup>
const name = '小明'
</script>
```

## 生命周期

下面是 vue2 -> vue3 的生命周期钩子函数

```
beforeCreate -> setup()
created -> setup()
beforeMount -> onBeforeMount
mounted -> onMounted
beforeUpdate -> onBeforeUpdate
updated -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed -> onUnmounted
errorCaptured -> onErrorCaptured
```

在 vue3 中，移除了 `beforeCreate` 和 `created`，现在使用 `setup` 就可以直接优先加载了，其余钩子函数都需要通过解构引入才能进行使用。

```js
import { onMounted } from 'vue'
export default {
  setup() {
    onMounted(() => {
      console.log('onMounted')
    })

    console.log('setup')
  },
}

// 输出结果：
// setup
// onMounted
```

那么想要通过接口获取数据就可以使用下面方式：

```js
import { onMounted } from 'vue'
import axios from 'axios'
export default {
  setup() {
    onMounted(() => {
      loadData()
    })

    function loadData() {
      axios({
        method: 'GET',
        url: 'http://api.wod.xyz/Ip/outGetIpInfo?ip=57.23.66.35',
      }).then((res) => {
        console.log(res)
      })
    }
  },
}
```

## 计算属性

计算属性 computed 也是需要在 vue 中结构来引入的：

```vue
<template>
  <h1>{{ num }}</h1>
</template>

<script>
// 引入 computed
import { computed } from 'vue'
export default {
  setup() {
    // computed 内部传入一个回调函数再赋值给变量 num
    const num = computed(() => {
      // 计算属性必须有返回值
      return 10 + 20
    })

    // 返回计算属性的结果给模板使用
    return {
      num,
    }
  },
}
</script>
```

## 组合 api 的优势

在之前选项 api 中，有很多钩子函数，可能在 data 中定义的很多的数据，然后 methods 中，一堆的方法，create 一堆的方法，还有各种函数中都存在很多的方法，这样就会显得非常的凌乱，不清楚那些数据和那些函数是有关系的。

但是组合 api 可以将所有的变量数据函数全部都放在 setup 一个函数中，这样其实我们可以将固定的模块抽离出一个单独的文件进行处理，然后再引入传参解构进行调用，如果逻辑很多的情况下，使用这种组合拆分的方式，你的组件里的代码就会越来越少了，每个模块单独管理方便维护。

## 组件中使用路由方法

**方式一 ：通过 getCurrentInstance 方法获取当前组件实例，从而获取 route 和 router**

```js
import { getCurrentInstance } from 'vue'

export default {
  setup() {
    const { proxy } = getCurrentInstance()
    console.log(proxy.$root.$route)
    console.log(proxy.$root.$router)
  },
}
```

**方式二：通过从路由中导入 useRoute useRouter 使用 route 和 router**

安装路由：

```shell
npm install vue-router@4
```

```js
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const $route = useRoute()
    const $router = useRouter()
    console.log($route)
    console.log($router)
  },
}
```

## 组件绑定事件

在 Vue2 中，想要给组件绑定事件需要在子组件向父组件发送自定义事件才可以，但是在 Vue3 中，可以对组件直接进行绑定事件

**子组件**

```vue
<template>
  <button>按钮</button>
</template>
```

**父组件**

```vue
<template>
  <Btn @click="add" />
</template>

<script>
import Btn from './components/demo/Btn.vue'
export default {
  components: {
    Btn,
  },
  setup() {
    function add() {
      alert('点击了')
    }
    return {
      add,
    }
  },
}
</script>
```

## 插槽

Vue3 相比 Vue2 插槽也有了一定的变化，尤其是具名插槽

普通插槽没有变化，下面来举出具名插槽的例子：

**子组件**

```vue
<template>
  <!-- 子组件相比以往是没有变化的，具名插槽使用 name 定义插槽名称 -->
  <h1>
    <slot name="title"></slot>
  </h1>
  <p>
    <slot name="text"></slot>
  </p>
</template>
```

**父组件**

```vue
<template>
  <MyCom>
    <template v-slot:title>这是标题</template>
    <template v-slot:text>这是一个段落</template>
  </MyCom>
</template>

<script>
import MyCom from './components/demo/My-com.vue'
export default {
  components: {
    MyCom,
  },
}
</script>
```

在父组件中，插槽必须统一使用 template 容器来进行存放，内部可以有其他标签，但是容器标签不能改变，在容易上使用 v-slot:插槽名 方式来绑定对应的插槽名称插入对应的内容。

注：v-slot 指令只能在 template 标签上使用！！！

## 获取 DOM

**获取单个 DOM**

```vue
<template>
  <div ref="myRef">获取单个DOM元素</div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const myRef = ref(null)

    onMounted(() => {
      console.log(myRef)
    })

    return { myRef }
  },
}
</script>
```

**获取多个 DOM**

```vue
<template>
  <div :ref="setRef">
    <div>获取多个DOM元素</div>
    <input type="text" />
    <button>按钮</button>
    <p>这是一段文字</p>
  </div>
</template>

<script>
export default {
  setup() {
    const setRef = (el) => {
      console.log(el)
    }

    return { setRef }
  },
}
</script>
```

**nextTick 函数**

```vue
<template>
  <div class="text">获取单个DOM元素</div>
</template>

<script>
import { nextTick } from 'vue'

export default {
  setup() {
    nextTick(() => {
      console.log(document.querySelector('.text'))
    })
  },
}
</script>
```

## 组件上绑定 v-model

**父组件**

```vue
<template>
  <!-- 组件上绑定 v-mode 对应下面一个响应式的变量 -->
  <MyInput v-model="text" />
</template>

<script>
import MyInput from './components/MyInput.vue'
import { ref } from 'vue'
export default {
  name: 'app',
  components: {
    MyInput,
  },
  setup() {
    const text = ref('')

    return { text }
  },
}
</script>
```

**子组件**

```vue
<template>
  <!-- 
    type 是文本框的内容 绑定传递的参数 modelValue
    默认监听 input 事件，这里我们来调用自己定义的 myInput 函数
  -->
  <input :type="modelValue" @input="myInput" />
</template>

<script>
export default {
  name: '',
  props: {
    // 在父组件上绑定了 v-model 后，相当于传递了一个 modelValue 的参数
    // modelValue 的名字的固定的，不能改变
    // 并且 prop 还会抛出 update:modelValue 事件，事件名称也是不能改变的
    modelValue: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    // 通过调用函数 向父组件发送文本框的内容
    function myInput(evt) {
      emit('update:modelValue', evt.target.value)
    }
    return { myInput }
  },
}
</script>

<style scoped>
input {
  width: 200px;
  height: 35px;
  border-radius: 5px;
  color: #3f536e;
  border: 1px solid #c5d9e8;
  outline: 0;
  padding: 0 10px;
  transition: border 0.35s;
  background: #fff;
  box-sizing: border-box;
}
</style>
```

## provide / inject

这是一个组合 api，必须两个同时使用才可以生效

`provide` 和 `inject` 启用依赖注入。这两者只能在使用当前活动实例的 `setup()` 期间被调用

无论组件层次结构有多深，父组件都可以作为其所有子组件的依赖提供者，`provide ` 只能通过父组件来提供给子组件，不能子组件给父组件提供，子组件通过`inject` 注入。

```vue
// 父组件
<template>
  <h1>这是父组件</h1>
  <my-component></my-component>
</template>

<script>
import MyComponent from './components/MyComponent.vue'
import { provide } from 'vue'
export default {
  components: {
    MyComponent,
  },
  setup() {
    const say = '这是父组件提供的数据' // 需要提供的数据
    // 使用 provide 函数，第一个参数为提供数据的名称，可以自定义，第二个是需要提供的数据
    provide('AppSay', say)
  },
}
</script>
```

```vue
// 子组件
<template>
  <h1>这是子组件</h1>
  <h2>父组件提供的数据是：{{ res }}</h2>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    // 通过 inject 函数接收父组件提供的数据，可以通过名称 AppSay 获取
    const res = inject('AppSay')
    return { res }
  },
}
</script>
```

## component / is

通过 `component ` 标签配合 `is` 属性，可以绑定一个动态的组件进行渲染

```vue
<template>
  <h1>这是父组件</h1>

  <!-- 通过计算 is 来绑定一个计算属性来渲染组件 -->
  <component :is="componentsName"></component>

  <!-- 点击按钮渲染不同的组件 -->
  <button @click="change">改变组件</button>
</template>

<script>
// 引入两个组件
import MyInput from './components/MyInput.vue'
import MyButton from './components/MyButton.vue'
import { computed, ref } from 'vue'
export default {
  components: {
    // 注册两个组件
    MyInput,
    MyButton,
  },
  setup() {
    // 通过变量控制渲染的组件
    const text = ref(true)

    // 点击按钮调用函数，改变变量控制渲染的组件
    function change() {
      text.value = !text.value
    }

    // 计算属性根据 text 的变量来返回不同的组件名称进行渲染
    const componentsName = computed(() => {
      return text.value ? 'MyInput' : 'MyButton'
    })

    return {
      componentsName,
      change,
      text,
    }
  },
}
</script>
```

## 在组件上使用 keep-alive

我们之前曾经在一个多标签的界面中使用 `is` 来切换不同的组件

当在这些组件之间切换的时候，你有时会想保持这些组件的状态，比如下面引入的子组件中有一个文本框的组件 `MyInput`，但是当我点击按钮写换渲染的组件之后再切换回来的时候，发现之前在文本框中输入的内容没有了，但是我想在输入之后切换组件回来的时候文本框中的内容依然存在，那么就需要 `keep-alive` 元素将其动态组件包裹起来，那么这样的话失活的组件将会被缓存，当我切换回 `MyInput` 组件的时候，里面内容依然存在

```vue
// 保留状态
<keep-alive>
  <component :is="componentsName"></component>
</keep-alive>
```

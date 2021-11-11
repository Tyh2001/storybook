# Js 工具函数

## 添加本地存储

```js
/**
 * 添加本地存储
 * @param { string } name 本地存储名称
 * @param { string } data 本地存储的数据
 */
export const setStorage = (name, data) => {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  window.localStorage.setItem(name, data)
}
```



## 获取本地存储

```js
/**
 * 获取本地存储
 * @param { string } name 本地存储名称
 */
export const getStorage = name => {
  const data = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
```



## 删除本地存储

```js
/**
 * 删除本地存储数据
 * @param { string } name 本地存储名称
 */
export const removeStorage = name => {
  return window.localStorage.removeItem(name)
}
```



## 数组去重

```js
/**
 * 数组去重
 * @param { array } arr 需要去重的数组
 * @returns 去重后的数组 如果传入的不是数组则返回空数组
 */

export const uniqueArray = arr => {
   if (!Array.isArray(arr)) {
    throw new Error('第一个参数必须是数组')
  }
  if (arr.length == 1) {
    return arr
  }
  return [...new Set(arr)]
}
```



## 合并数组去重

```js
/**
 * 将多个数组合并成一个新的数组，并去重
 * 该方法可以传入一个或多个数组
 * @returns 将多个数组合并后并去重
 */

export const DelAllArrayRepeat = () => {
  const newArr = []

  for (let i = 0; i < arguments.length; i++) {
    newArr.push(...arguments[i])
  }

  return [...new Set([...newArr])]
}
```



## 计算从一个时间到现在过去多久

```js
/**
 * 计算从一个时间到现在过去多久
 * @param { string } time 开始时间 格式为：'2021-01-28 00:00'
 * @returns xx天xx小时xx分钟xx秒
 */

export const onTime = time => {
  const nowStamp = new Date().getTime()
  const targetStamp = new Date(time.replace(/-/g, '/')).getTime()
  const difference = nowStamp - targetStamp
  const allSeconds = Math.floor(difference / 1000)
  const allMinutes = Math.floor(allSeconds / 60)
  const allHours = Math.floor(allMinutes / 60)
  const day = Math.floor(allHours / 24)
  const hours = allHours % 24
  const minutes = allMinutes % 60
  const seconds = allSeconds % 60
  return `${day}天${hours}小时${minutes}分钟${seconds}秒`
}
```



## 将时间戳转换为真正的时间格式

```js
/**
 * 将时间戳转换为真正的时间格式
 * @param { string } times 时间戳
 * @returns xxxx年 xx月 xx日 xx时 xx分 xx秒
 */

export const toDates = times => {
  const date = new Date(parseInt(times))
  const Y = date.getFullYear()
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
  const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
  const H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const Mi = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  const S = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  return `${Y}年 ${M}月 ${D}日 ${H}时 ${Mi}分 ${S}秒`
}
```



## 获取 0-9 随机数

```js
/**
 * 获取 0-9 的随机数
 * @returns 0-9 的随机数
 */

export const WitTenNum = () => {
  return Math.floor(Math.random() * 9)
}
```



## 获取指定范围随机数

```js
/**
 * 获取指定参数范围的随机数
 * 该方法的取值范围为：包含最小值，但不包含最大值
 * @param { number } min 随机数范围的最小值
 * @param { number } max 随机数范围的最大值
 * @returns 指定参数范围的随机数
 */

export const randomNum = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min
}

```



## 浅克隆

```js
/**
 * 浅克隆
 * @param { object } obj 需要克隆的对象
 * @returns 克隆好的新对象
 */

export const shallowClone = obj => {
  const newObj = {}
  for (const key in obj) {
    newObj[key] = obj[key]
  }
  return newObj
}
```



## 深克隆

```js
/**
 * 深克隆
 * @param { object } obj 需要拷贝的对象
 * @returns 拷贝完成的对象
 */

export const deepCopy = obj => {
  if (typeof obj != 'object') {
    return obj
  }
  if (obj == null) {
    return obj
  }
  return JSON.parse(JSON.stringify(obj))
}
```



## 数组相减

```js
/**
 * 数组相减
 * 例如有两个数组：
 * const arr1 = [1, 2, 3, 4, 5, 6] 和 const arr2 = [1, 2, 3]
 * 那么这时候需要第一个数组减去第二个数组中的项，返回剩下的项
 * 使用 subArr(arr1, arr2) 就可以解决这个问题
 * 返回 [4, 5, 6]
 * 
 * @param { Array } arr1 要处理的数组1
 * @param { Array } arr2 要处理的数组2
 * @returns 相减后的数组
 */

export const subArr = (arr1, arr2) => {
  if (arr1.length > arr2.length) {
    return arr1.filter(item1 => {
      return !arr2.find(item2 => {
        return item1 === item2
      })
    })
  } else {
    return arr2.filter(item1 => {
      return !arr1.find(item2 => {
        return item1 === item2
      })
    })
  }
}
```



## 生成随机字符串

```js
/**
 * 生成随机字符串
 * @param { number } length 指定位数
 * @param { string } chars 字符串指定字符
 * @returns 随机字符串
 */
export const uuid = (length, chars) => {
  chars = chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  length = length || 8
  var result = ''
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)]
  return result
}
```



## 将对象转换为 formData 对象 

```js
/**
 * 将对象转换为 formData 对象
 * @param { object } object 需要转换的对象
 * @returns formData 对象
 */
export const getFormData = object => {
  const formData = new FormData()
  Object.keys(object).forEach(key => {
    const value = object[key]
    if (Array.isArray(value)) {
      value.forEach((subValue, i) =>
        formData.append(key + `[${i}]`, subValue)
      )
    } else {
      formData.append(key, object[key])
    }
  })
  return formData
}
```



## 保留小数点后 n 位

```js
/**
 * 保留小数点后 n 位
 * @param { number } number 小数
 * @param { number } no 保留位数
 * @returns 转换结果
 */
export const = cutNumber (number, no = 2) => {
  if (typeof number != 'number') {
    number = Number(number)
  }
  return Number(number.toFixed(no))
}
```


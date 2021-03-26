# Intro

Filter duplicate object in Array by certain key name. 对象数组去重：过滤对象数组中指定键名的重复值，不会比较其他键值，不会合并。

# install

npm i dedup-array

# Usage

let filteredArr = dedup(array,["key1","key2"])

# Demo
```js
let dedup = require("dedup-array");
let array = [
    {
        id: 1,
        name: '1',
        prop: {
            url: "url1",
            description: "des1"
        }
    },
    {
        id: 1,
        name: '2',
        prop: {
            url: "url2",
            description: "des2"
        }
    },
    {
        id: 3,
        name: '3',
        prop: {
            url: "url3",
            description: "des1"
        }
    },
]
console.log("input", array)
console.log('key=["id"]:\n', dedup(array, ['id']))
console.log('key=["prop","description"]:\n', dedup(array, ['prop', 'description']))
```
result
```
input [
  { id: 1, name: '1', prop: { url: 'url1', description: 'des1' } },
  { id: 1, name: '2', prop: { url: 'url2', description: 'des2' } },
  { id: 3, name: '3', prop: { url: 'url3', description: 'des1' } }
]
key=["id"] 
[
  { id: 1, name: '1', prop: { url: 'url1', description: 'des1' } },
  { id: 3, name: '3', prop: { url: 'url3', description: 'des1' } }
]
key=["prop","description"]
[
  { id: 1, name: '1', prop: { url: 'url1', description: 'des1' } },
  { id: 1, name: '2', prop: { url: 'url2', description: 'des2' } }
]
```
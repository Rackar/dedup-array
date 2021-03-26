# Intro

Filter duplicate object in Array with key name.

# install

npm i object-array-unique

# Usage

let filteredArr = unique(array,["key1","key2"])

# Demo
```js
let unique = require("./object-array-unique");
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
console.log('key=["id"]:\n', unique(array, ['id']))
console.log('key=["prop","description"]:\n', unique(array, ['prop', 'description']))
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
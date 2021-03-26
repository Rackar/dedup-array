let dedup = require("./index");
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
console.log('key=["id"]\n', dedup(array,['id']))
console.log('key=["prop","description"\n', dedup(array, ['prop', 'description']))

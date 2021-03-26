//对象数组根据某一属性去重
module.exports = function unique(arr, keys = ["properties", "filename"]) {
    return arr.reduce((prev, cur) => prev.some(pre => {
        let p, c
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            p = p ? p[key] : pre[key]
            c = c ? c[key] : cur[key]
        }
        return p === c
    }) ? prev : [...prev, cur], []);
}
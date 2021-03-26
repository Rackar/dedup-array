//对象数组根据某一属性去重
module.exports = function dedup(arr, keys = []) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Not an Array')
    }
    if(!keys){
        keys=[]
    }else if (typeof keys == 'string'){
        keys=[keys]
    }else if(!Array.isArray(keys)){
        throw new TypeError('Keys must be an array of key names.')
    }else if (keys.length===0){
        return arr
    }
    return arr.reduce((prev, cur) => prev.some(pre => {
        let p, c
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            p = p ? p[key] : pre[key]
            c = c ? c[key] : cur[key]
            if(!p||!c){
                throw new TypeError("No such key.")  
            }
        }
        return p === c
    }) ? prev : [...prev, cur], []);
}
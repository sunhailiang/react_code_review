let pathToRegexp = require("path-to-regexp")

let keys = [];

let reg = pathToRegexp("/user/:id/:name", keys, { end: true })

// keys:匹配路径中的参数-生成数组，根据参数个数决定庶族成员个数
// end如果是true:在规定格式之外不允许继续添加内容即严格匹配，如果是false:除了匹配规定内容之外还能允许其他的内容存在，非严格匹配

console.log("/user/27/harry".match)
console.log("key", keys)
var res = "/user/27/harry".match(reg)

// ==========这是匹配到的结果的值===========
// res：console.log("res",res)
// [ '/user/27/harry',
// '27',
// 'harry',
// index: 0,
// input: '/user/27/harry' ]



//============从key里面索引到的参数name=================
// name [ 'id', 'name' ]


//通过map数组获得用户输入的路径参数
let names = keys.map(key => key.name)
console.log("name", names)
console.log("res", res)
//将从keys参数数组中检索的name和正则匹配的结果作为键值对作为键值对取出参数
let params = names.reduce((memo, name, idx) => {
    memo[name] = res[idx + 1]
    return memo
}, {})

console.log("params", params)





//===============================组=================================
//由此可见，pathToRegexp中的参数key其实就是用来获取地址参数，并且根据参数的多少来生成数组

// let reg = pathToRegexp("/user/:id/:name", keys, { end: true })
// console.log("/user/27/harry".match)
// console.log("key", keys)

// key[
//     {
//         name: 'id',
//         prefix: '/',
//         delimiter: '/',
//         optional: false,
//         repeat: false,
//         partial: false,
//         pattern: '[^\\/]+?'
//     },
//     {
//         name: 'name',
//         prefix: '/',
//         delimiter: '/',
//         optional: false,
//         repeat: false,
//         partial: false,
//         pattern: '[^\\/]+?'
//     }]


import React from "react"
let {Provider,Consumer}=React.createContext();
export{
    Provider, //提供数据，可以跨级别传递数据
    Consumer  //消费数据
}
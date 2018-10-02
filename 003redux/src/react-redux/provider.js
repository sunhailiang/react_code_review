//组件，接收store，通过context api传递给所有子组件
import React from "react"
import {Provider as StoreProvider} from "./context"
import PropTypes from "prop-types"
export default class provider extends React.Component {
    //规定如果有人想要使用这个组件，必须提供一个redux得仓库属性
    static propTypes={
       store:PropTypes.object.isRequired
    }
    render() {
        let value={store:this.props.store}
        return (
             <StoreProvider value={value}>
                  {this.props.children}
             </StoreProvider>
        )
    }
}
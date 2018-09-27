import React from "react"
import { render } from "react-dom"
import PropTypes from "prop-types"

class Person extends React.Component {
    constructor(props) {
        super(props)
    }
    //这个属性用来校属性类型，是否必传
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        gender: PropTypes.oneOf(["男", "女"]),
        hobby: PropTypes.arrayOf(PropTypes.string),
        pos: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number
        }),
        salary(props, property) {
            if (props[property] > 3000) {
                throw new Error("工资超出范围")
            }
        }
    }
    //ES7的静态属性，这个属性用来设置props如果没有传递某个属性，就给这个属性设置默认值
    static defaultProps = { //这个静态对象
        name: "未认证"
    }
    static props
    render() {
        return (
            <div>
                {
                    this.props.name
                }
            </div>
        )
    }
}

let person = {
    name: "harry",
    age: 27,
    gender: "男",
    hobby: ["睡觉", "练拳"],
    pos: {
        x: 10,
        y: 12.5
    },
    salary: 200
}
render(<Person {...person} />, window.root)
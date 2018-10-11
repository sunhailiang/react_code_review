import React,{Component} from 'react';
import {connect} from '../react-redux';
//import {bindActionCreators} from '../redux';
//import store from '../store';
import actions from '../store/actions/counter1';
//let bindActions=bindActionCreators(actions,store.dispatch);
class Counter1 extends Component{
	// state={
	// 	number:store.getState().counter1.number
	// }
	// componentDidMount() {
	// 	store.subscribe(()=>this.setState({number:store.getState().counter1.number}));
	// }
	render() {
		return (
			<div>
				<p>{this.props.number}</p>
				<button onClick={()=>this.props.add1(1)}>+</button>
				<button onClick={()=>bindActions.minus1(2)}>-</button>
			</div>
		)
	}
}
//把仓库中的完整状态映射为属性对象 state.counter1={number:0}
let mapStateToProps=(state) => state.counter1
//把dispatch方法映射为组件的属性对象
// let mapDispatchToProps=(dispatch) => ({
// 	add1() {
// 		dispatch({type:'ADD1',payload:1})
// 	},
// 	minus1() {
// 		dispatch({type:'MINUS1',payload:1})
// 	}
// })
export default connect(mapStateToProps,actions)(Counter1);

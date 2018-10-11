import React,{Component} from 'react';
import {connect} from '../react-redux';
import actions from '../store/actions/counter1';
class Counter1 extends Component{
	render() {
		return (
			<div>
				<p>{this.props.number}</p>
				<button onClick={()=>this.props.add1(1)}>+</button>
				<button onClick={() => this.props.thunk1(1)}>thunk+</button>
				<button onClick={() => this.props.promise1(1)}>promise+</button>
				<button onClick={()=>this.props.payloadPromise1(1)}>payloadPromise+</button>
			</div>
		)
	}
}
let mapStateToProps=(state) => state.counter1
export default connect(mapStateToProps,actions)(Counter1);

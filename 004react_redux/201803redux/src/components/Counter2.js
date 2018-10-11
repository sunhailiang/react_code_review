import React,{Component} from 'react';
import {connect} from '../react-redux';
import actions from '../store/actions/counter2';
class Counter2 extends Component{
	render() {
		return (
			<div>
				<p>{this.props.number}</p>
				<button onClick={()=>this.props.add2(1)}>+</button>
				<button onClick={()=>this.props.minus2(2)}>-</button>
			</div>
		)
	}
}
let mapStateToProps=(state) => state.counter2
export default connect(mapStateToProps,actions)(Counter2);

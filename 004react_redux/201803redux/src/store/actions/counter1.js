import {ADD1,MINUS1} from '../action-types';
export default {
	add1(payload) {
		return {type: ADD1,payload};
     },
	minus1(payload) {
		return {type: MINUS1,payload};
	},
	thunk1(payload) {
		/**
		 * 把这个函数发给仓库的时候
		 * 1. 需要帮我执行这个函数
		 * 2. 需要传递进来dispatch和getState方法
		 */
		return  function (dispatch,getState) {
			setTimeout(() => {
				dispatch({type: ADD1,payload});
			},1000);
		}
	},
	promise1(payload) {
		//返回一个promise 
		return new Promise(function(resolve,reject){
			setTimeout(()=> {
				resolve({type: ADD1,payload});
			},1000);
		});
	},
	payloadPromise1(payload) {
		return {
			type: ADD1,
			payload:new Promise(function(resolve,reject){
				setTimeout(()=> {
					if (Math.random()>.5) {
						resolve(payload);
					} else {
						reject(-payload);
					}
				},1000);
			})
		}
	}
}
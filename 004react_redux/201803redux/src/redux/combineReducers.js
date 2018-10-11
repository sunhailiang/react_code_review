//因为redux应用只能有一个仓库，只能有一个reducer
//把多个reducer函数合并成一个
export default function (reducers) {
	//返回的这个函数就是合并后的reducer
	return function (state={},action) {
		let newState={};
		for (let key in reducers) {
			// key=counter1
			//reducers[counter1]=counter那个reducer 
			//state合并后的状态树 
			//if (key===action.name) {
				newState[key]=reducers[key](state[key],action);
			//}
		}
		return newState;
	}
}
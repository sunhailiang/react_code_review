import counter1 from './counter1';
import counter2 from './counter2';
import {combineReducers} from '../../redux';
/**
 * 可以把多个reducer合并成一个reducer导出
 * key决定了在合并后的状态中的属性名
 */
export default combineReducers({
	counter1:counter1,
	counter2
});
/**
 * {
 *   counter1:{number:0},
 *   counter2:{number:0}
 * }
 */

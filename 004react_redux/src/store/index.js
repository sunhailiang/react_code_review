import reducer from "./reducers"
import {CreateStore} from "../redux" 
let store= CreateStore(reducer)
export default store
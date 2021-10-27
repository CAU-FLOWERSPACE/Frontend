import { combineReducers } from 'redux';
import user from './user_reducer'; //리듀서 파일당 하나씩

const rootReducer = combineReducers({
    user
})

export default rootReducer;
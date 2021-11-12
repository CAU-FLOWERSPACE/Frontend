import { combineReducers } from 'redux';
import user from './user_reducer'; //리듀서 파일당 하나씩, 여기서 정의!


const rootReducer = combineReducers({
    user
})

export default rootReducer;
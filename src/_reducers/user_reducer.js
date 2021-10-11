import {
    LOGIN_USER, REGISTER_USER
} from '../_actions/types';

export default function foo(state = {}, action) { //하나하나 적어야함
    switch (action.type) { //리듀서의 타입들마다 다른 조치를 취해줘야해서 

        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload } //스프레드 연산자는 받은 값을 똑같이 가져오는거!!, loginSuccess는 서버쪽..
            break;

        case REGISTER_USER :
            return { ...state, register : action.payload } //스프레드 연산자는 받은 값을 똑같이 가져오는거!!
            break;
    
        default:
            return state;
    }
}
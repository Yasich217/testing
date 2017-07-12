import * as types from '../actions/types';

//Reducers
const initialState = {
    query: '',
    result: [
        {
            id: 1,
            name: 'Здесь предоставлен поиск по Твиттеру'
        }
    ],
    icon: ''
}
const searchReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.TYPING_QUERY:
            return {...state, query: action.payload.query};
        case types.LOAD_RESULT:
            return { ...state, icon: action.payload.icon};
        case types.RESULT_LOADED:
            return { ...state, icon: action.payload.icon, result: action.payload.result };
        case types.LOADED_FAIL:
            return{...state, icon: action.payload.icon, error: action.payload.error};
        case types.CLEAR_QUERY:
            return { ...state, query: '', result: [], icon: ''};
        default:
            return state;
    }
}

export default searchReducer;
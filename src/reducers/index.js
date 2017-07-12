import { combineReducers } from 'redux';

// Reducers
import searchReduser from './search';

// Combine Reducers
var reducers = combineReducers({
    search: searchReduser
});


export default reducers;

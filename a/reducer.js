import {mapReducers} from 'redux-async-actions-reducers';
import actionTypes from './action.types';

const initState = {
    name: 'default'
};
let reducers = {};
reducers.a = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.A_HELLO:
            return Object.assign({}, state, {name: action.name});

        default:
            return state;
    }
};

mapReducers(reducers);
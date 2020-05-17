import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function passwordChangeReducer(state=initialState.password,action)
{
    switch (action.type) {
        case actionTypes.PASSWORD_CHANGE:
            return action.payload
        default:
            return state;
    }
}
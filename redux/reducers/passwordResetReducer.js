import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function passwordResetReducer(state=initialState.email,action)
{
    switch (action.type) {
        case actionTypes.PASSWORD_RESET:
            return action.payload
        default:
            return state;
    }
}
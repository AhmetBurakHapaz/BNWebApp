import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function contactFormReducer(state=initialState.contact,action)
{
    switch (action.type) {
        case actionTypes.CONTACT_FORM:
            return action.payload
        default:
            return state;
    }
}
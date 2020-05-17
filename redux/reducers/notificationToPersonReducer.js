import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function notificationToPersonReducer(state=initialState.notificaton1,action)
{
    switch (action.type) {
        case actionTypes.NOTIFICATION_TO_PERSON:
            return action.payload
        default:
            return state;
    }
}
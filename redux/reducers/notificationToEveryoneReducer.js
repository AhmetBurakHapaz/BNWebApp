import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function notificationToEveryoneReducer(state=initialState.notificaton2,action)
{
    switch (action.type) {
        case actionTypes.NOTIFICATION_TO_EVERYONE:
            return action.payload
        default:
            return state;
    }
}
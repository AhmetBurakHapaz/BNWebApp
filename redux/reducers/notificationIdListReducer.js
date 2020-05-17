import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function notificationIdListReducer(state=initialState.notificatonIdList,action)
{
    switch (action.type) {
        case actionTypes.NOTIFICATION_ID_LIST:
            return action.payload
        default:
            return state;
    }
}
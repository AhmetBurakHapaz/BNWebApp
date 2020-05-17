import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function notificationToCommunityReducer(state=initialState.notificaton3,action)
{
    switch (action.type) {
        case actionTypes.NOTIFICATION_TO_COMMUNITY:
            return action.payload
        default:
            return state;
    }
}
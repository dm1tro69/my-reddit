import {ActionCreator, AnyAction, Reducer} from "redux";
import {ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS} from "./me/actions";
import {meReducer, MeStateType} from "./me/reducer";


const UPDATE_COMMENT = 'UPDATE_COMMENT'
const GET_TOKEN = 'GET_TOKEN'


export type RootState = {
    commentText: string,
    token: string,
    me: MeStateType
}

export const updateComment: ActionCreator<AnyAction> = (payload: string) => {
    return {
        type: UPDATE_COMMENT,
        payload
    }
}

export const getToken: ActionCreator<AnyAction> = (payload: string) => {
    return {
        type: GET_TOKEN,
        payload
    }
}

const initialState: RootState = {
    commentText: 'Hello',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
}

export const rootReducer: Reducer<RootState, any> = (state=initialState, action): RootState => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {...state, commentText: action.payload}
        case GET_TOKEN:
            return {...state, token: action.payload}
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        default:
            return state
    }

}

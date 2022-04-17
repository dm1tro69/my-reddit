import {ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import axios from "axios";

export const ME_REQUEST = 'ME_REQUEST'
export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS'
export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR'

export interface IUserData {
    name?: string
    iconImg?: string
}

export type MeRequestAction = {
    type: typeof ME_REQUEST
}
export type MeRequestActionSuccess = {
    type: typeof ME_REQUEST_SUCCESS,
    payload: IUserData
}
export type MeRequestActionError = {
    type: typeof ME_REQUEST_ERROR,
    payload: string
}

export const myRequest: ActionCreator<MeRequestAction> = () => {
    return {
        type: ME_REQUEST
    }
}
export const myRequestSuccess: ActionCreator<MeRequestActionSuccess> = (payload: IUserData) => {
    return {
        type: ME_REQUEST_SUCCESS,
        payload
    }
}
export const myRequestError: ActionCreator<MeRequestActionError> = (payload: string) => {
    return {
        type: ME_REQUEST_ERROR,
        payload
    }
}

export const meRequestAsync  = (): ThunkAction<void, RootState, unknown, any> => (dispatch, getState) => {
    dispatch(myRequest())
    axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: {Authorization: `bearer ${getState().token}`}
    })
        .then((resp) => {
            const userData = resp.data;
            // const myUserData = {name: userData.name, iconImg: userData.icon_img}
            // setData(myUserData)
            dispatch(myRequestSuccess({name: userData.name, iconImg: userData.icon_img}))
        })
        .catch((e: any)=> {
            console.log(e)
            dispatch(myRequestError(String(e)))
        })
}

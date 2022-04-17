import {AnyAction, Reducer} from "redux";
import {IUserData, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS} from "./actions";


export type  MeStateType = {
   loading: boolean
    error: string
    data: IUserData
}

const initialState: MeStateType = {
     loading: false,
    error: '',
    data: {}
}

export const meReducer: Reducer<MeStateType> = (state=initialState, action): MeStateType => {
      switch (action.type) {
          case ME_REQUEST:
              return {...state, loading: true}
          case ME_REQUEST_SUCCESS:
              return {...state, loading: false, data: action.payload}
          case ME_REQUEST_ERROR:
              return {...state, error: action.payload, loading: false}
          default:
              return state
      }
}

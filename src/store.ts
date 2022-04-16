import {ActionCreator, AnyAction, applyMiddleware, createStore, Reducer} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const UPDATE_COMMENT = 'UPDATE_COMMENT'

export type RootState = {
    commentText: string
}

export const updateComment: ActionCreator<AnyAction> = (payload) => {
    return {
        type: UPDATE_COMMENT,
        payload
    }
}

const initialState: RootState = {
    commentText: 'Hello'
}

const rootReducer: Reducer<RootState, any> = (state=initialState, action): RootState => {
    switch (action.type) {
        case 'UPDATE_COMMENT':
            return {...state, commentText: action.payload}
        default:
            return state
    }

}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

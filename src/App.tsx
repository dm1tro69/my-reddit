import React, {useState} from 'react';
import {applyMiddleware, createStore, Reducer} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {UserContextProvider} from "./context/userContext";
import Content from "./components/Content/Content";
import CardList from "./components/CardList/CardList";
import Layout from './components/Layout/Layout';
import { tokenContext } from './context/tokenContext';
import Header from "./components/Header/Header";
import {commentContext} from "./context/commentContext";
import {useToken} from "./hooks/useToken";


export type RootState = {
    commentText: string
}

const App = () => {

    const [commentValue, setCommentValue] = useState('')

    const [token] = useToken()

    const CommentProvider = commentContext.Provider


 const initialState: RootState = {
    commentText: 'Hello'
  }

  const rootReducer: Reducer<any, any> = (state=initialState, action) => {
    return state
  }

  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

  return (
      <Provider store={store}>
          <CommentProvider value={{
              value: commentValue,
              onChange: setCommentValue
          }}>
              <tokenContext.Provider value={token}>
                  <UserContextProvider>
                      <Layout>
                          <Header/>
                          <Content>
                              <CardList/>
                          </Content>
                      </Layout>
                  </UserContextProvider>
              </tokenContext.Provider>
          </CommentProvider>
      </Provider>
  );
}

export default App;

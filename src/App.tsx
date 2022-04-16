import React from 'react';
import {ActionCreator, AnyAction, applyMiddleware, createStore, Reducer} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {UserContextProvider} from "./context/userContext";
import Content from "./components/Content/Content";
import CardList from "./components/CardList/CardList";
import Layout from './components/Layout/Layout';
import { tokenContext } from './context/tokenContext';
import Header from "./components/Header/Header";
import {useToken} from "./hooks/useToken";
import {store} from "./store";





const App = () => {

    const [token] = useToken()


  return (
      <Provider store={store}>
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
      </Provider>
  );
}

export default App;

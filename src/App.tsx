import React, {useEffect} from 'react';
import {Provider, useDispatch} from "react-redux";
import {UserContextProvider} from "./context/userContext";
import Content from "./components/Content/Content";
import CardList from "./components/CardList/CardList";
import Layout from './components/Layout/Layout';
import { tokenContext } from './context/tokenContext';
import Header from "./components/Header/Header";
import {useToken} from "./hooks/useToken";


const App = () => {

    const [token] = useToken()


  return (
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
  );
}

export default App;

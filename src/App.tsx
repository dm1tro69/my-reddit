import React from 'react';
import {UserContextProvider} from "./context/userContext";
import Content from "./components/Content/Content";
import CardList from "./components/CardList/CardList";
import Layout from './components/Layout/Layout';
import { tokenContext } from './context/tokenContext';
import Header from "./components/Header/Header";
import {useToken} from "./hooks/useToken";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Post from "./components/Post/Post";


const App = () => {

    const [token] = useToken()


  return (
      <BrowserRouter>

              <tokenContext.Provider value={token}>
                  <UserContextProvider>
                      <Layout>
                          <Header/>
                          <Content>
                              <CardList/>
                               <Routes>
                                   <Route path={'/posts/1'} element={<Post/>}/>
                               </Routes>
                          </Content>
                      </Layout>
                  </UserContextProvider>
              </tokenContext.Provider>

      </BrowserRouter>
  );
}

export default App;

import "./pages/css/main.css";
import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import styled from '@emotion/styled';

//Пример синтаксиса библиотеки  emotion (css in JS)
const SpinStyle = styled.div` 
    height: 100%;
    padding: 0;
    margin: 25% 0 0 0;  
    display: flex;
    align-items: center;
    justify-content: center;
`

const App = observer(() => {
  const {user} = useContext(Context)
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  if (loading) {
    return (
      <SpinStyle>
        <Spinner animation={"border"} style={{width: '5rem', height: '5rem'}}/>
      </SpinStyle>
    )}
  return (
      <BrowserRouter>
          <NavBar />
          <AppRouter />
      </BrowserRouter>
  );
});

export default App;

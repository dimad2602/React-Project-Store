import React, {useContext} from 'react';
import {Context} from '../index';
import Nav from 'react-bootstrap/Nav';
import {ADMIN_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import './modals/Navar.css';
import {observer} from 'mobx-react-lite';
import {useNavigate, Link} from 'react-router-dom'; // useHistory
import styled from '@emotion/styled';


const NavBar = observer (() => {
  const {user} = useContext (Context);
  const history = useNavigate (); // useHistory

  const logOut = () => {
    user.setUser ({});
    user.setIsAuth (false);
  };

  return (
    <header className="header">
      <div className="left">Build Your PC</div>
      <div className="mid">
        <ul className="navbar">
            <Link to="/">
              <li  tabindex="1">
                Главная
              </li>
            </Link>
            <Link to="/OurConfigs">
              <li tabindex="2">
                Наши сборки
              </li>
            </Link>
            <Link to="/recommendations">
              <li tabindex="3">
                Советы
              </li>
            </Link>
          
            <Link to="/reviews">
              <li tabindex="4">
                Обзоры
              </li>
            </Link>
          
            <Link to="/Contacts">
            <li tabindex="5">
              Контакты
            </li>
            </Link>
        </ul>
      </div>

      {user.isAuth
        ? 
        <div className="right">
            <ul className="navbar">
              <li onClick={() => history (ADMIN_ROUTE)}>
                Админка
              </li>
              <li onClick={() => logOut ()}>
                Выход
              </li>
            </ul>
          </div>
        : 
        <div className="right">
          <ul className="navbar">
            <li onClick={() => history (LOGIN_ROUTE)}>
              Авторизация
            </li>
          </ul>
        </div>
      }
    </header>
  );
});

export default NavBar;

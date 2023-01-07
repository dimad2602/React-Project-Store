import React, { useContext } from 'react';
import { Context } from '../index';
// import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
import { ADMIN_ROUTE, LOGIN_ROUTE} from '../utils/consts';
// import {Button} from "react-bootstrap";
import './modals/Navar.css';
import {observer} from "mobx-react-lite";
import {useNavigate,Link} from 'react-router-dom' // useHistory
// import styled from '@emotion/styled';


// const CompanyName = styled.div`
// color: white;

// `
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate() // useHistory

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <header className='header'>
            <div className='left'>BYP</div> 
            <div className='mid'>
            <ul className='navbar'>
                <li>
                <Link to='/'>
                    Главная
                </Link>
                </li>
                <li>
                    Наши сборки
                </li>
                <li>
                    Советы
                </li>
                <li>
                    Обзоры
                </li>
            </ul>

            </div>
            {user.isAuth ?
                    <div className='right' style={{color: 'white'}}>
                        <ul className='navbar'>
                            <li
                            onClick={() => history(ADMIN_ROUTE)}>
                                Админка
                            </li>
                            <li 
                            // className='nav-item'
                            onClick={() => logOut()}>
                                Выход
                            </li>
                        </ul>
                    </div>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизация</button>  
                        
                    </Nav>
                }
      </header>
    );
});

export default NavBar;
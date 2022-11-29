import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, HOME_ROUTE} from '../utils/consts';
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom' // useHistory

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate() // useHistory

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink style={{color:'white'}} to={HOME_ROUTE}>НазваниеСайта</NavLink> 
            {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()} // или history(LOGIN_ROUTE)
                            className="ml-2" // кнопки почему то не отлипают друг от друга :(
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>  
                        {/* || history(LOGIN_ROUTE) */}
                    </Nav>
                }
        </Container>
      </Navbar>
    );
});

export default NavBar;
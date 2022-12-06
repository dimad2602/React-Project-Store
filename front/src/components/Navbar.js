import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { ADMIN_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom' // useHistory
import styled from '@emotion/styled';


const CompanyName = styled.div`
color: white;

`
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate() // useHistory

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar style={{background: '#898989'}}>
        <Container>
            <CompanyName>НазваниеСайта</CompanyName> 
            {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history(ADMIN_ROUTE)}
                            style={{marginRight: '30px', marginTop: '0px'}}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()} // или history(LOGIN_ROUTE)
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>  
                        
                    </Nav>
                }
        </Container>
      </Navbar>
    );
});

export default NavBar;
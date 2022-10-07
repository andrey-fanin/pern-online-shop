import React, {useContext} from 'react';
import {Context} from "../index";
import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useHistory} from "react-router-dom";
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
        const {user} = useContext(Context)
        const history = useHistory()

        const logOut = () => {
            user.setIsAuth(false)
            localStorage.removeItem("token")
        }
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>OnlineShop</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto justify-content-between" style={{color: 'white', width:'25%'}}>
                            <Button variant={'outline-light'} onClick={() => history.push(BASKET_ROUTE)}>Basket</Button>
                            <Button variant={'outline-light'} onClick={() => history.push(ADMIN_ROUTE)}>Admin Panel</Button>
                            <Button variant={'outline-light'} onClick={logOut}>LogOut</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE )}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        )
    }
)

export default NavBar;
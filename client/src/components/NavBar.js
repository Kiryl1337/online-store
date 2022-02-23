import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer( () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Main</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'}>Admin panel</Button>
                        <Button variant={'outline-light'} className="ml-2">Login</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
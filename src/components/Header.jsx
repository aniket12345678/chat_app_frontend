import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout, resetData } from '../redux/reducers';
import { useNavigate } from 'react-router-dom';
import { changeToUpperCase } from '../common/method';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((x) => x.authSlice);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(resetData());
        navigate('/');
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Chat application {changeToUpperCase(user.user_name)}</Navbar.Brand>
                <Button onClick={handleLogout}>Logout</Button>
            </Container>
        </Navbar>
    )
}

export default Header
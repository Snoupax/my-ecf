import React, { useContext } from 'react';
import ThemeToggle from '../components/atoms/ThemeToggle';
import { LoginContext } from '../context/LoginContext';
import { StyHeader } from '../styled/styled';

const Header = () => {
    const { logged, user } = useContext(LoginContext);
    return (
        <StyHeader>
            <ThemeToggle />
            <h1>ToDoListMaker</h1>
            <p>Bienvenue {logged ? <>{user}</> : ''}</p>
        </StyHeader>
    );
};

export default Header;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import { StyMaker } from '../styled/styled';

// Container
export const StyMaker = styled.div`
    width: 100%;
`;

// Header
export const StyHeader = styled.div`
    width: 100%;
`;

// Content
export const StyContent = styled.div`
    width: 100%;
    min-height: 300px;
`;

// Navbar
export const StyNavbar = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    margin: 25px auto;
    padding: 10px;
    border: 1px solid ${(props) => (props.theme === 'light' ? '#000' : '#FFF')};
`;

export const StyLink = styled(Link)`
    width: 33%;
    text-decoration: none;
    color: ${(props) => (props.theme === 'light' ? '#000' : '#FFF')};
`;

// Content h4
export const StyH4 = styled.h4`
    margin: 5px auto;
    font-weight: bold;
`;

// ToDoList
export const StyTable = styled.div`
    width: 80%;
    margin: 40px auto;
    border: 2px solid ${(props) => (props.theme === 'light' ? '#000' : '#FFF')};
    border-radius: 5px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;
export const StyTableName = styled.p`
    display: inline-block;
    margin: 0 5px;
`;
export const StyInputTable = styled.div`
    width: 100%;
`;

export const StyList = styled.div`
    width: 30%;
    margin: 20px auto;
    border-radius: 5px;
    border: 2px solid ${(props) => (props.theme === 'light' ? '#000' : '#FFF')};
`;

export const StyInputList = styled.div`
    width: 100%;
`;

export const StyTask = styled.div`
    width: 80%;
    margin: 10px auto;
    border: 2px solid ${(props) => (props.done ? '#0eff00' : '#FF0000')};
    background-color: ${(props) => (props.done ? '#008000' : '#B22222')};
    text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
`;

export const ButtonTask = styled.button`
    padding: 0;
`;

// Login
export const Login = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.label`
    margin: 5px;
`;

export const ButtonLogin = styled.button`
    width: 30%;
`;

// Footer
export const StyFooter = styled.div`
    border-top: 2px solid
        ${(props) => (props.theme === 'light' ? '#000' : '#FFF')};
    width: 100%;
`;

export const StyParaFoot = styled.p`
    font-size: 10px;
`;
